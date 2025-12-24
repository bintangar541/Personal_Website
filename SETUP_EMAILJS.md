# Cara Setup EmailJS untuk Contact Form

Berikut adalah langkah-langkah untuk mendapatkan API Keys agar form kontak website Anda berfungsi.

## 1. Buat Akun & Login
1. Buka [https://www.emailjs.com/](https://www.emailjs.com/).
2. Klik **Global Sign Up** (Gratis).
3. Buat akun dan login ke dashboard.

## 2. Buat Email Service
1. Di dashboard, klik menu **Email Services**.
2. Klik tombol **Add New Service**.
3. Pilih **Gmail** (atau penyedia email lain yang Anda pakai).
4. Klik **Connect Account** dan berikan izin.
5. Setelah terhubung, klik **Create Service**.
6. **PENTING**: Copy **Service ID** (biasanya `service_xxxxxx`).
   - Paste ini ke file `.env` sebagai `VITE_EMAILJS_SERVICE_ID`.

## 3. Buat Email Template
1. Klik menu **Email Templates** di sidebar kiri.
2. Klik **Create New Template**.
3. Di tab **Design**, atur format email yang ingin Anda terima. Gunakan variabel berikut agar sesuai dengan kode website:
   - **Subject**: `{{subject}}`
   - **Content**:
     ```text
     Nama Pengirim: {{user_name}}
     Email Pengirim: {{user_email}}
     
     Pesan:
     {{message}}
     ```
4. Di tab **Auto-Reply** (opsional), Anda bisa mengatur email otomatis ke pengirim.
5. Klik **Save**.
6. **PENTING**: Copy **Template ID** (biasanya `template_xxxxxx`).
   - Paste ini ke file `.env` sebagai `VITE_EMAILJS_TEMPLATE_ID`.

## 4. Ambil Public Key
1. Klik nama profil Anda di pojok kanan atas, lalu pilih **Account**.
2. Klik tab **Public Key** (atau API Keys).
3. **PENTING**: Copy **Public Key** (kode acak panjang).
   - Paste ini ke file `.env` sebagai `VITE_EMAILJS_PUBLIC_KEY`.

## 5. Simpan Konfigurasi
1. Jika belum ada, buat file baru bernama `.env` di folder utama project Anda.
2. Masukkan 3 kunci tadi dengan format:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

3. **Restart Terminal**: Matikan terminal (`Ctrl + C`) lalu jalankan `npm run dev` lagi agar settings terbaca.

Selesai! Form kontak Anda sekarang sudah bisa mengirim email.
