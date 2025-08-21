/*
  # Insert Mock Data

  1. Insert sample data from the existing mock constants
  2. Populate all tables with realistic test data
  3. Maintain referential integrity between tables
*/

-- Insert default profile
INSERT INTO profiles (
  id,
  user_id,
  full_name,
  email,
  phone,
  company_name,
  website,
  address,
  bank_account,
  authorized_signer,
  bio,
  income_categories,
  expense_categories,
  project_types,
  event_types,
  asset_categories,
  sop_categories,
  project_status_config,
  briefing_template,
  terms_and_conditions
) VALUES (
  '550e8400-e29b-41d4-a716-446655440161',
  '0f0e7315-6c62-4c43-bb12-7c3bd3dba244',
  'Vena Pictures',
  'admin@vena.pictures',
  '+62 895-4061-81407',
  'Vena Pictures',
  'https://vena.pictures',
  'Jl. Contoh No. 123, Jakarta',
  'BCA 1234567890 a.n. Vena Pictures',
  'Vena Pictures',
  'Vendor fotografi dan videografi profesional yang mengabadikan momen berharga Anda.',
  '["DP Proyek", "Pelunasan Proyek", "Penjualan Aset", "Pendapatan Lainnya"]'::jsonb,
  '["Gaji Freelancer", "Peralatan", "Transport", "Akomodasi", "Marketing", "Operasional"]'::jsonb,
  '["Pernikahan", "Prewedding", "Engagement", "Birthday", "Corporate Event", "Graduation", "Family Portrait"]'::jsonb,
  '["Meeting Klien", "Survey Lokasi", "Libur", "Workshop", "Lainnya"]'::jsonb,
  '["Kamera", "Lensa", "Lighting", "Audio", "Aksesoris", "Komputer", "Software"]'::jsonb,
  '["Fotografi", "Videografi", "Editing", "Administrasi", "Marketing"]'::jsonb,
  '[
    {"id": "status_1", "name": "Dikonfirmasi", "color": "#10b981", "subStatuses": [], "note": "Proyek telah dikonfirmasi dan siap dikerjakan"},
    {"id": "status_2", "name": "Briefing", "color": "#3b82f6", "subStatuses": [{"name": "Briefing Klien", "note": "Diskusi detail dengan klien"}, {"name": "Briefing Tim", "note": "Pengarahan kepada tim"}], "note": "Tahap briefing dan persiapan"},
    {"id": "status_3", "name": "Editing", "color": "#8b5cf6", "subStatuses": [{"name": "Seleksi Foto", "note": "Memilih foto terbaik"}, {"name": "Edit Foto", "note": "Proses editing foto"}, {"name": "Review Klien", "note": "Menunggu approval klien"}], "note": "Proses editing dan review"},
    {"id": "status_4", "name": "Cetak", "color": "#f97316", "subStatuses": [{"name": "Persiapan Cetak", "note": "Menyiapkan file untuk cetak"}, {"name": "Proses Cetak", "note": "Sedang dicetak"}, {"name": "Quality Check", "note": "Pemeriksaan kualitas hasil cetak"}], "note": "Tahap pencetakan produk fisik"},
    {"id": "status_5", "name": "Dikirim", "color": "#06b6d4", "subStatuses": [], "note": "Produk sedang dalam pengiriman"},
    {"id": "status_6", "name": "Selesai", "color": "#eab308", "subStatuses": [], "note": "Proyek telah selesai dan diserahkan"},
    {"id": "status_7", "name": "Dibatalkan", "color": "#ef4444", "subStatuses": [], "note": "Proyek dibatalkan"}
  ]'::jsonb,
  'Halo tim! Briefing untuk proyek [NAMA_PROYEK] pada [TANGGAL] di [LOKASI]. Mohon persiapkan peralatan dan datang tepat waktu. Terima kasih!',
  E'📜 SYARAT & KETENTUAN UMUM\n\n📅 JADWAL & WAKTU\n- Jadwal pemotretan yang telah disepakati tidak dapat diubah kecuali ada kesepakatan baru\n- Keterlambatan dari pihak klien akan mengurangi waktu pemotretan\n- Perpanjangan waktu akan dikenakan biaya tambahan\n\n💰 PEMBAYARAN\n- DP minimal 30% dari total biaya saat booking\n- Pelunasan paling lambat H-3 sebelum hari pelaksanaan\n- DP yang sudah dibayar tidak dapat dikembalikan jika terjadi pembatalan\n\n📦 HASIL & PENYERAHAN\n- Hasil foto/video akan diserahkan sesuai paket yang dipilih\n- Waktu pengerjaan sesuai yang tercantum di masing-masing paket\n- Revisi minor dapat dilakukan maksimal 2x\n\n⏱ KETERLAMBATAN\n- Keterlambatan penyerahan hasil akan mendapat kompensasi sesuai kesepakatan\n- Force majeure (bencana alam, pandemi, dll) tidak termasuk keterlambatan\n\n➕ LAIN-LAIN\n- Hak cipta foto/video tetap milik Vena Pictures untuk keperluan promosi\n- Klien berhak mendapat salinan hasil sesuai paket\n- Segala perubahan dari kesepakatan awal harus tertulis'
);

-- Insert users
INSERT INTO users (id, email, password, full_name, role, permissions) VALUES
('0f0e7315-6c62-4c43-bb12-7c3bd3dba244', 'admin@vena.pictures', 'admin', 'Admin Vena Pictures', 'Admin', NULL),
('3f1f4a7c-7c6b-4d05-88a7-97d85ae7692f', 'member@vena.pictures', 'member', 'Member Vena Pictures', 'Member', '["Manajemen Klien", "Proyek", "Freelancer", "Keuangan"]'::jsonb);

-- Insert cards
INSERT INTO cards (id, card_holder_name, bank_name, card_type, last_four_digits, expiry_date, balance, color_gradient) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Vena Pictures', 'BCA', 'Debit', '3090', '12/26', 15750000, 'from-blue-500 to-sky-400'),
('550e8400-e29b-41d4-a716-446655440002', 'Vena Pictures', 'Mandiri', 'Kredit', '7821', '08/25', 8200000, 'from-purple-500 to-pink-400'),
('550e8400-e29b-41d4-a716-446655440003', 'Vena Pictures', 'Tunai', 'Tunai', '0000', NULL, 2500000, 'from-slate-600 to-slate-400');

-- Insert financial pockets
INSERT INTO financial_pockets (id, name, description, icon, type, amount, goal_amount, source_card_id) VALUES
('550e8400-e29b-41d4-a716-446655440011', 'Dana Darurat', 'Simpanan untuk keperluan mendesak', 'piggy-bank', 'Nabung & Bayar', 5000000, 10000000, '550e8400-e29b-41d4-a716-446655440001'),
('550e8400-e29b-41d4-a716-446655440012', 'Upgrade Peralatan', 'Tabungan untuk beli kamera baru', 'lock', 'Terkunci', 3200000, 25000000, '550e8400-e29b-41d4-a716-446655440002'),
('550e8400-e29b-41d4-a716-446655440013', 'Hadiah Tim', 'Pool hadiah untuk freelancer terbaik', 'star', 'Tabungan Hadiah Freelancer', 0, NULL, NULL);

-- Insert clients
INSERT INTO clients (id, name, email, phone, whatsapp, since, instagram, status, client_type, last_contact, portal_access_id) VALUES
('550e8400-e29b-41d4-a716-446655440021', 'Sarah & Ahmad', 'sarah.ahmad@email.com', '+62 812-3456-7890', '+62 812-3456-7890', '2024-01-15', '@sarahahmad', 'Aktif', 'Langsung', '2024-01-20T10:00:00Z', uuid_generate_v4()),
('550e8400-e29b-41d4-a716-446655440022', 'Budi Santoso', 'budi.santoso@email.com', '+62 813-9876-5432', '+62 813-9876-5432', '2024-02-10', '@budisantoso', 'Aktif', 'Langsung', '2024-02-15T14:30:00Z', uuid_generate_v4()),
('550e8400-e29b-41d4-a716-446655440023', 'Sinta Wedding Organizer', 'info@sintawo.com', '+62 821-1111-2222', '+62 821-1111-2222', '2024-01-05', '@sintawo', 'Aktif', 'Vendor', '2024-01-25T09:15:00Z', uuid_generate_v4());

-- Insert packages
INSERT INTO packages (id, name, price, physical_items, digital_items, processing_time, photographers, videographers) VALUES
('550e8400-e29b-41d4-a716-446655440031', 'Paket Silver', 3500000, '[{"name": "Album 20x30 (20 halaman)", "price": 500000}, {"name": "Foto cetak 4R (50 lembar)", "price": 200000}]'::jsonb, '["300+ foto edit terbaik", "File RAW semua foto", "Online gallery 1 tahun"]'::jsonb, '14 hari kerja', '2 Fotografer', '1 Videografer'),
('550e8400-e29b-41d4-a716-446655440032', 'Paket Gold', 5500000, '[{"name": "Album 30x40 (30 halaman)", "price": 800000}, {"name": "Foto cetak 4R (100 lembar)", "price": 400000}, {"name": "Frame foto 20x30", "price": 150000}]'::jsonb, '["500+ foto edit premium", "Video highlight 3-5 menit", "File RAW semua foto", "Online gallery 2 tahun"]'::jsonb, '21 hari kerja', '3 Fotografer', '2 Videografer'),
('550e8400-e29b-41d4-a716-446655440033', 'Paket Platinum', 8500000, '[{"name": "Album premium 40x60 (50 halaman)", "price": 1500000}, {"name": "Foto cetak 4R (200 lembar)", "price": 800000}, {"name": "Frame foto 30x40 (2 buah)", "price": 400000}, {"name": "USB custom design", "price": 200000}]'::jsonb, '["800+ foto edit premium", "Video cinematic 8-10 menit", "Same day edit", "File RAW semua foto", "Online gallery unlimited"]'::jsonb, '30 hari kerja', '4 Fotografer', '3 Videografer');

-- Insert add-ons
INSERT INTO add_ons (id, name, price) VALUES
('550e8400-e29b-41d4-a716-446655440041', 'Drone Footage', 1500000),
('550e8400-e29b-41d4-a716-446655440042', 'Extra Photographer', 800000),
('550e8400-e29b-41d4-a716-446655440043', 'Live Streaming', 2000000),
('550e8400-e29b-41d4-a716-446655440044', 'Photo Booth', 1200000);

-- Insert team members
INSERT INTO team_members (id, name, role, email, phone, standard_fee, no_rek, reward_balance, rating, performance_notes, portal_access_id) VALUES
('550e8400-e29b-41d4-a716-446655440051', 'Andi Photographer', 'Fotografer', 'andi@email.com', '+62 812-1111-1111', 500000, 'BCA 1111111111', 250000, 4.8, '[{"id": "note1", "date": "2024-01-15", "note": "Hasil foto sangat memuaskan klien", "type": "Pujian"}]'::jsonb, uuid_generate_v4()),
('550e8400-e29b-41d4-a716-446655440052', 'Budi Videographer', 'Videografer', 'budi@email.com', '+62 813-2222-2222', 600000, 'Mandiri 2222222222', 180000, 4.6, '[{"id": "note2", "date": "2024-01-20", "note": "Perlu lebih memperhatikan audio recording", "type": "Perhatian"}]'::jsonb, uuid_generate_v4()),
('550e8400-e29b-41d4-a716-446655440053', 'Citra Editor', 'Editor', 'citra@email.com', '+62 814-3333-3333', 400000, 'BNI 3333333333', 320000, 4.9, '[{"id": "note3", "date": "2024-02-01", "note": "Editing sangat cepat dan berkualitas", "type": "Pujian"}]'::jsonb, uuid_generate_v4());

-- Insert projects
INSERT INTO projects (
  id, project_name, client_name, client_id, project_type, package_name, package_id, 
  add_ons, date, location, progress, status, total_cost, amount_paid, payment_status, team
) VALUES
('550e8400-e29b-41d4-a716-446655440061', 'Pernikahan Sarah & Ahmad', 'Sarah & Ahmad', '550e8400-e29b-41d4-a716-446655440021', 'Pernikahan', 'Paket Gold', '550e8400-e29b-41d4-a716-446655440032', 
 '[{"id": "550e8400-e29b-41d4-a716-446655440041", "name": "Drone Footage", "price": 1500000}]'::jsonb, '2024-03-15', 'Ballroom Hotel Mulia, Jakarta', 75, 'Editing', 7000000, 3500000, 'DP Terbayar', 
 '[{"memberId": "550e8400-e29b-41d4-a716-446655440051", "name": "Andi Photographer", "role": "Fotografer", "fee": 500000}, {"memberId": "550e8400-e29b-41d4-a716-446655440052", "name": "Budi Videographer", "role": "Videografer", "fee": 600000}]'::jsonb),
('550e8400-e29b-41d4-a716-446655440062', 'Prewedding Budi & Sari', 'Budi Santoso', '550e8400-e29b-41d4-a716-446655440022', 'Prewedding', 'Paket Silver', '550e8400-e29b-41d4-a716-446655440031', 
 '[]'::jsonb, '2024-02-28', 'Pantai Ancol, Jakarta', 100, 'Selesai', 3500000, 3500000, 'Lunas', 
 '[{"memberId": "550e8400-e29b-41d4-a716-446655440051", "name": "Andi Photographer", "role": "Fotografer", "fee": 500000}]'::jsonb);

-- Insert transactions
INSERT INTO transactions (id, date, description, amount, type, project_id, category, method, card_id) VALUES
('550e8400-e29b-41d4-a716-446655440071', '2024-01-20', 'DP Pernikahan Sarah & Ahmad', 3500000, 'Pemasukan', '550e8400-e29b-41d4-a716-446655440061', 'DP Proyek', 'Transfer Bank', '550e8400-e29b-41d4-a716-446655440001'),
('550e8400-e29b-41d4-a716-446655440072', '2024-02-28', 'Pelunasan Prewedding Budi & Sari', 3500000, 'Pemasukan', '550e8400-e29b-41d4-a716-446655440062', 'Pelunasan Proyek', 'Transfer Bank', '550e8400-e29b-41d4-a716-446655440001'),
('550e8400-e29b-41d4-a716-446655440073', '2024-01-25', 'Gaji Andi - Prewedding', 500000, 'Pengeluaran', '550e8400-e29b-41d4-a716-446655440062', 'Gaji Freelancer', 'Transfer Bank', '550e8400-e29b-41d4-a716-446655440001');

-- Insert team project payments
INSERT INTO team_project_payments (id, project_id, team_member_name, team_member_id, date, status, fee) VALUES
('550e8400-e29b-41d4-a716-446655440081', '550e8400-e29b-41d4-a716-446655440061', 'Andi Photographer', '550e8400-e29b-41d4-a716-446655440051', '2024-01-20', 'Unpaid', 500000),
('550e8400-e29b-41d4-a716-446655440082', '550e8400-e29b-41d4-a716-446655440061', 'Budi Videographer', '550e8400-e29b-41d4-a716-446655440052', '2024-01-20', 'Unpaid', 600000),
('550e8400-e29b-41d4-a716-446655440083', '550e8400-e29b-41d4-a716-446655440062', 'Andi Photographer', '550e8400-e29b-41d4-a716-446655440051', '2024-02-28', 'Paid', 500000);

-- Insert leads
INSERT INTO leads (id, name, contact_channel, location, status, date, notes, whatsapp) VALUES
('550e8400-e29b-41d4-a716-446655440091', 'Dina & Reza', 'Instagram', 'Bandung', 'Sedang Diskusi', '2024-02-01', 'Tertarik paket Gold untuk pernikahan Juni 2024', '+62 815-4444-4444'),
('550e8400-e29b-41d4-a716-446655440092', 'PT. Teknologi Maju', 'Website', 'Jakarta', 'Menunggu Follow Up', '2024-02-05', 'Butuh dokumentasi corporate event', '+62 816-5555-5555'),
('550e8400-e29b-41d4-a716-446655440093', 'Sarah & Ahmad', 'WhatsApp', 'Jakarta', 'Dikonversi', '2024-01-10', 'Sudah booking paket Gold', '+62 812-3456-7890');

-- Insert assets
INSERT INTO assets (id, name, category, purchase_date, purchase_price, serial_number, status, notes) VALUES
('550e8400-e29b-41d4-a716-446655440101', 'Canon EOS R5', 'Kamera', '2023-06-15', 65000000, 'CR5001234', 'Tersedia', 'Kamera utama untuk wedding'),
('550e8400-e29b-41d4-a716-446655440102', 'Sony FX3', 'Kamera', '2023-08-20', 45000000, 'FX3005678', 'Digunakan', 'Sedang dipakai untuk project Sarah & Ahmad'),
('550e8400-e29b-41d4-a716-446655440103', 'Godox AD600Pro', 'Lighting', '2023-05-10', 8500000, 'GD600789', 'Tersedia', 'Flash studio portable');

-- Insert client feedback
INSERT INTO client_feedback (id, client_name, satisfaction, rating, feedback, date) VALUES
('550e8400-e29b-41d4-a716-446655440111', 'Budi Santoso', 'Sangat Puas', 5, 'Hasil foto prewedding sangat bagus! Tim sangat profesional dan ramah. Terima kasih Vena Pictures!', '2024-03-01'),
('550e8400-e29b-41d4-a716-446655440112', 'Keluarga Wijaya', 'Puas', 4, 'Pelayanan baik, hasil memuaskan. Hanya saja pengiriman agak terlambat dari jadwal.', '2024-02-20');

-- Insert promo codes
INSERT INTO promo_codes (id, code, discount_type, discount_value, is_active, usage_count, max_usage, expiry_date) VALUES
('550e8400-e29b-41d4-a716-446655440121', 'NEWCLIENT2024', 'percentage', 10, true, 2, 50, '2024-12-31'),
('550e8400-e29b-41d4-a716-446655440122', 'EARLYBIRD', 'fixed', 500000, true, 1, 20, '2024-06-30');

-- Insert SOPs
INSERT INTO sops (id, title, category, content, last_updated) VALUES
('550e8400-e29b-41d4-a716-446655440131', 'Persiapan Pemotretan Wedding', 'Fotografi', 'CHECKLIST PERSIAPAN PEMOTRETAN WEDDING\n\n1. H-7 sebelum acara:\n- Konfirmasi jadwal dengan klien\n- Cek kondisi semua peralatan\n- Charge semua baterai\n- Format memory card\n\n2. H-1 sebelum acara:\n- Siapkan backup peralatan\n- Cek lokasi dan rute\n- Koordinasi dengan tim\n\n3. Hari H:\n- Datang 30 menit sebelum jadwal\n- Setup peralatan\n- Brief singkat dengan klien\n- Mulai dokumentasi', now()),
('550e8400-e29b-41d4-a716-446655440132', 'Proses Editing Foto', 'Editing', 'WORKFLOW EDITING FOTO\n\n1. Import & Backup:\n- Import semua foto ke Lightroom\n- Backup ke external drive\n- Buat folder terorganisir\n\n2. Seleksi:\n- Pilih foto terbaik (no blur, good composition)\n- Tandai foto untuk edit detail\n- Hapus foto duplikat/jelek\n\n3. Editing:\n- Color correction & grading\n- Skin retouching (natural)\n- Background cleanup jika perlu\n- Konsistensi tone di semua foto\n\n4. Export:\n- High resolution untuk cetak\n- Web resolution untuk online gallery\n- Watermark untuk preview', now());

-- Insert notifications
INSERT INTO notifications (id, title, message, timestamp, is_read, icon, link_view, link_action) VALUES
('550e8400-e29b-41d4-a716-446655440141', 'Prospek Baru', 'Dina & Reza menghubungi via Instagram untuk paket pernikahan', '2024-02-01T10:30:00Z', false, 'lead', 'Prospek', '{"type": "VIEW_LEAD_DETAILS", "id": "550e8400-e29b-41d4-a716-446655440091"}'::jsonb),
('550e8400-e29b-41d4-a716-446655440142', 'Deadline Mendekat', 'Proyek Pernikahan Sarah & Ahmad deadline dalam 3 hari', '2024-03-12T09:00:00Z', false, 'deadline', 'Proyek', '{"type": "VIEW_PROJECT_DETAILS", "id": "550e8400-e29b-41d4-a716-446655440061"}'::jsonb);

-- Insert social media posts
INSERT INTO social_media_posts (id, project_id, client_name, post_type, platform, scheduled_date, caption, status) VALUES
('550e8400-e29b-41d4-a716-446655440151', '550e8400-e29b-41d4-a716-446655440062', 'Budi Santoso', 'Instagram Feed', 'Instagram', '2024-03-05', 'Behind the scenes prewedding Budi & Sari di Pantai Ancol 📸✨ #prewedding #venapictures #jakarta', 'Terjadwal'),
('550e8400-e29b-41d4-a716-446655440152', '550e8400-e29b-41d4-a716-446655440061', 'Sarah & Ahmad', 'Instagram Story', 'Instagram', '2024-03-20', 'Sneak peek wedding Sarah & Ahmad! 💕 Coming soon...', 'Draf');