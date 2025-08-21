
import React, { useState, useMemo } from 'react';
import { Lead, LeadStatus, ContactChannel, Profile } from '../types';

interface CrudProps<T> {
    add: (item: Omit<T, 'id'>) => Promise<T | undefined>;
    update: (id: string, updates: Partial<T>) => Promise<T | undefined>;
    remove: (id: string) => Promise<void>;
}

interface PublicLeadFormProps {
    leadCrud: CrudProps<Lead>;
    userProfile: Profile;
    showNotification: (message: string) => void;
}

const PublicLeadForm: React.FC<PublicLeadFormProps> = ({ leadCrud, userProfile }) => {
    // Admin number: keep local format for display and convert to international for wa.me
    const ADMIN_LOCAL_NUMBER = '085693762240';
    const ADMIN_INTERNATIONAL_NUMBER = ADMIN_LOCAL_NUMBER.replace(/^0/, '62');
    const [formState, setFormState] = useState({
        name: '',
        whatsapp: '',
        eventType: userProfile.projectTypes[0] || '',
        eventDate: '',
        eventLocation: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const notes = `Jenis Acara: ${formState.eventType}\nTanggal Acara: ${new Date(formState.eventDate).toLocaleDateString('id-ID')}\nLokasi Acara: ${formState.eventLocation}`;

        const newLeadData = {
            name: formState.name,
            whatsapp: formState.whatsapp,
            contactChannel: ContactChannel.WEBSITE, // Since it's from a web form
            location: formState.eventLocation,
            status: LeadStatus.DISCUSSION, // Automatically placed in "Sedang Diskusi"
            date: new Date().toISOString().split('T')[0],
            notes: notes
        };
        
        await leadCrud.add(newLeadData);
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        const whatsappMessage = `Halo admin Vena Pictures, saya ${formState.name}. Saya baru saja mengisi formulir prospek dan ingin menanyakan informasi lebih lanjut.`;
        const whatsappUrl = `https://wa.me/${ADMIN_INTERNATIONAL_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

        return (
            <div className="flex items-center justify-center min-h-screen bg-brand-bg p-4">
                <div className="w-full max-w-lg p-8 text-center bg-brand-surface rounded-2xl shadow-lg border border-brand-border">
                    <h1 className="text-2xl font-bold text-gradient">Terima Kasih!</h1>
                    <p className="mt-4 text-brand-text-primary">Informasi Anda telah kami terima. Tim kami akan segera menghubungi Anda.</p>
                    <p className="mt-2 text-sm text-brand-text-secondary">Untuk bantuan atau informasi lebih lanjut, silakan hubungi admin kami: {ADMIN_LOCAL_NUMBER}.</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 button-primary inline-block">
                        Hubungi Admin via WhatsApp
                    </a>
                    <a href="#" className="mt-4 text-sm text-brand-text-secondary hover:underline block">Kembali</a>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-brand-bg p-4">
            <div className="w-full max-w-lg p-8 space-y-6 bg-brand-surface rounded-2xl shadow-lg border border-brand-border">
                <div className="text-center space-y-3">
                    <h1 className="text-2xl font-bold text-brand-text-light">Hai! Terimakasih telah menghubungi #venapictures</h1>
                    <p className="text-brand-text-primary">Perkenalkan aku Nina! (๑•ᴗ•๑)♡</p>
                    <p className="text-sm text-brand-text-secondary">Untuk informasi mengenai pricelist dan availability, mohon mengisi data berikut ya!</p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input id="name" name="name" type="text" value={formState.name} onChange={handleFormChange} className="input-field" placeholder=" " required />
                        <label htmlFor="name" className="input-label">Nama</label>
                    </div>
                     <div className="input-group">
                        <input id="whatsapp" name="whatsapp" type="tel" value={formState.whatsapp} onChange={handleFormChange} className="input-field" placeholder=" " required />
                        <label htmlFor="whatsapp" className="input-label">Nomor WhatsApp</label>
                    </div>
                    <div className="input-group">
                        <select id="eventType" name="eventType" value={formState.eventType} onChange={handleFormChange} className="input-field" required>
                             {userProfile.projectTypes.map(pt => <option key={pt} value={pt}>{pt}</option>)}
                        </select>
                        <label htmlFor="eventType" className="input-label">Jenis Acara</label>
                    </div>
                    <div className="input-group">
                        <input id="eventDate" name="eventDate" type="date" value={formState.eventDate} onChange={handleFormChange} className="input-field" placeholder=" " required />
                        <label htmlFor="eventDate" className="input-label">Tanggal Acara</label>
                    </div>
                    <div className="input-group">
                        <input id="eventLocation" name="eventLocation" type="text" value={formState.eventLocation} onChange={handleFormChange} className="input-field" placeholder=" " required />
                        <label htmlFor="eventLocation" className="input-label">Lokasi Acara</label>
                    </div>
                    <div className="pt-2">
                        <button type="submit" disabled={isSubmitting} className="w-full button-primary">
                            {isSubmitting ? 'Mengirim...' : 'Kirim Informasi'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PublicLeadForm;