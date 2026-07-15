# Zul Ajiz — Portfolio (Electrical Technician)

Website portfolio profesional, modern, dan premium yang dibangun dengan Next.js 15, TypeScript, Tailwind CSS, Framer Motion, dan Lucide React.

## Fitur

- Entrance animation (preloader) yang elegan
- Navbar sticky dengan background blur dan active state pill
- Hero 2 kolom dengan foto mengambang dan status Online
- Section: About, Skills, Experience, Projects, Certificates, Contact
- Background pattern grid + radial yang halus
- Animasi smooth dengan Framer Motion (stagger, whileInView)
- Fully responsive (mobile-first)

## Menjalankan di Local

Prasyarat: Node.js 18.18+ (disarankan 20+).

```bash
npm install
npm run dev
```

Buka http://localhost:3000

Build produksi:

```bash
npm run build
npm run start
```

## Aset Gambar

Semua gambar berada di folder `public/`:

- `utama.jpg` — Hero
- `fotodua.jpg` — About
- `pro1.jpg`, `pro2.jpg`, `pro3.jpg` — Projects
- `sert1.jpg` .. `sert6.jpg` — Certificates

Tombol Download CV mengarah ke `public/cv.pdf`. Tambahkan file `cv.pdf` ke folder `public/` bila sudah tersedia.

## Deploy ke Vercel

1. Push project ke GitHub/GitLab/Bitbucket.
2. Buka https://vercel.com, klik "Add New… > Project", lalu import repository.
3. Vercel otomatis mendeteksi Next.js. Biarkan setting default:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output: otomatis
4. Klik "Deploy". Selesai.

Alternatif via CLI:

```bash
npm i -g vercel
vercel
vercel --prod
```

## Struktur

- `app/` — layout, halaman utama, global styles
- `components/` — komponen section terpisah
- `lib/` — data konten, helper motion, utils
