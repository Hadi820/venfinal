
import React, { useRef, useEffect, useState } from 'react';
import { Trash2Icon } from '../constants';

interface SignaturePadProps {
    onSave: (signatureDataUrl: string) => void;
    onClose: () => void;
}

const SignaturePad: React.FC<SignaturePadProps> = ({ onSave, onClose }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const lastPointRef = useRef<{ x: number, y: number } | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isSigned, setIsSigned] = useState(false);

    const setupCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // prevent default touch interactions (scroll/zoom) while drawing
        canvas.style.touchAction = 'none';
        // ensure crisp rendering on high DPI screens
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        const rect = canvas.getBoundingClientRect();
        canvas.width = Math.round(rect.width * ratio);
        canvas.height = Math.round(rect.height * ratio);

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.setTransform(ratio, 0, 0, ratio, 0, 0); // equivalent to scale but resets transform first
        const isDark = document.documentElement.classList.contains('dark');
        ctx.strokeStyle = isDark ? 'var(--color-text-light)' : 'var(--color-text-primary)';
        ctx.lineWidth = 2.5; // base width in CSS pixels
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    };

    useEffect(() => {
        setupCanvas();
        // Use ResizeObserver to handle container size changes (orientation, keyboard)
        const canvas = canvasRef.current;
        let ro: ResizeObserver | null = null;
        try {
            if (canvas && typeof ResizeObserver !== 'undefined') {
                ro = new ResizeObserver(() => setupCanvas());
                ro.observe(canvas);
            } else {
                window.addEventListener('resize', setupCanvas);
            }
        } catch (e) {
            window.addEventListener('resize', setupCanvas);
        }

        return () => {
            if (ro && canvas) ro.unobserve(canvas);
            window.removeEventListener('resize', setupCanvas);
        };
    }, []);

    const getCoordsFromPointer = (clientX: number, clientY: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
        e.preventDefault();
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        // make stroke slightly thicker for touch input
        const pointerType = (e.nativeEvent as PointerEvent).pointerType;
        ctx.lineWidth = pointerType === 'touch' ? 3.5 : 2.5;

        const coords = getCoordsFromPointer(e.clientX, e.clientY);
        setIsDrawing(true);
        if (!isSigned) setIsSigned(true);

        lastPointRef.current = { x: coords.x, y: coords.y };
        ctx.beginPath();
        ctx.moveTo(coords.x, coords.y);

        // capture pointer so we keep receiving events outside the element bounds
        try { canvas.setPointerCapture((e.nativeEvent as PointerEvent).pointerId); } catch (_) {}
    };

    const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return;
        e.preventDefault();
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx || !lastPointRef.current) return;

        const coords = getCoordsFromPointer(e.clientX, e.clientY);
        const midPointX = (lastPointRef.current.x + coords.x) / 2;
        const midPointY = (lastPointRef.current.y + coords.y) / 2;

        ctx.quadraticCurveTo(lastPointRef.current.x, lastPointRef.current.y, midPointX, midPointY);
        ctx.stroke();

        lastPointRef.current = { x: coords.x, y: coords.y };
    };

    const stopDrawing = (e?: React.PointerEvent<HTMLCanvasElement> | undefined) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx || !lastPointRef.current) return;

        ctx.lineTo(lastPointRef.current.x, lastPointRef.current.y);
        ctx.stroke();
        ctx.closePath();

        setIsDrawing(false);
        lastPointRef.current = null;

        if (e && canvas) {
            try { canvas.releasePointerCapture((e.nativeEvent as PointerEvent).pointerId); } catch (_) {}
        }
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        ctx.clearRect(0, 0, canvas.width / ratio, canvas.height / ratio);
        setIsSigned(false);
    };

    const saveSignature = () => {
        const canvas = canvasRef.current;
        if (canvas && isSigned) {
            onSave(canvas.toDataURL('image/png'));
        } else {
            alert("Mohon bubuhkan tanda tangan terlebih dahulu.");
        }
    };
    
    return (
        <div className="flex flex-col items-center w-full">
            <p className="text-sm text-brand-text-secondary mb-3 text-center">Gunakan mouse atau jari Anda untuk menandatangani di area di bawah ini.</p>
            <div className="relative w-full rounded-lg border-2 border-dashed border-brand-border overflow-hidden" style={{minHeight: 180, maxHeight: 600}}>
                <canvas
                    ref={canvasRef}
                    className="w-full h-full bg-brand-bg cursor-crosshair"
                    onPointerDown={startDrawing}
                    onPointerMove={draw}
                    onPointerUp={stopDrawing}
                    onPointerCancel={stopDrawing}
                    onPointerLeave={stopDrawing}
                    role="img"
                    aria-label="Area tanda tangan; gunakan jari atau stylus untuk menandatangani"
                />
                {!isSigned && (
                     <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-brand-text-secondary/60">
                        <p className="font-semibold text-lg">Tanda Tangan di Sini</p>
                        <div className="w-3/4 h-px bg-brand-border mt-10"></div>
                    </div>
                )}
            </div>
            <div className="flex w-full justify-between items-center mt-4">
                <button onClick={clearCanvas} disabled={!isSigned} className="button-secondary text-sm inline-flex items-center gap-2">
                    <Trash2Icon className="w-4 h-4" /> Ulangi
                </button>
                 <div className="space-x-2">
                    <button onClick={onClose} className="button-secondary text-sm">Batal</button>
                    <button onClick={saveSignature} disabled={!isSigned} className="button-primary text-sm">Simpan Tanda Tangan</button>
                </div>
            </div>
        </div>
    );
};

export default SignaturePad;
