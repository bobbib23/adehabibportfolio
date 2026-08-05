# Portfolio Ade Habib Dirja

Website portfolio pribadi **Ade Habib Dirja** - seorang web developer profesional dengan keahlian dalam pengembangan full-stack. Dibangun dengan teknologi modern menggunakan **Next.js 15**, **TypeScript**, **Tailwind CSS**, dan arsitektur **Feature-based Clean Architecture**.

## Tentang Saya

**Ade Habib Dirja** adalah seorang web developer berpengalaman yang bersemangat dalam menciptakan solusi digital yang inovatif dan user-friendly. Dengan keahlian di bidang frontend, backend, dan full-stack development, saya siap menghadirkan pengalaman pengguna yang luar biasa.

## Fitur Portfolio

- 📁 Struktur folder berbasis fitur (Clean Architecture)
- 🔍 Optimasi SEO (metadata, Open Graph, Twitter cards)
- 📱 Desain responsif untuk semua perangkat
- 🌙 Tema gelap modern
- 💼 Showcase skill dan keahlian
- 🚀 Galeri proyek-proyek terkini
- 📧 Form kontak terintegrasi
- 📄 Tombol download CV/Resume

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React (icons)

## Architecture

```
src/
├── app/                    # Next.js App Router (presentation entry)
├── features/               # Feature modules
│   ├── home/
│   ├── about/
│   ├── skills/
│   │   ├── data/           # Feature data / domain
│   │   └── ui/             # Feature UI components
│   ├── projects/
│   └── contact/
├── shared/                 # Shared across features
│   ├── ui/                 # Reusable UI components
│   ├── lib/                # Utilities
│   └── hooks/              # Shared hooks
└── entities/               # Domain entities (if needed)
```

## Memulai Pengembangan

Untuk menjalankan portfolio ini secara lokal:

```bash
npm install
npm run dev
```

Akses portfolio di [http://localhost:3000](http://localhost:3000).

## Kustomisasi

Untuk menyesuaikan portfolio sesuai kebutuhan:

1. **Update informasi pribadi** - Ubah data personal di folder feature components
2. **Resume/CV** - Ganti file `/public/resume.pdf` dengan CV terbaru Anda
3. **Tautan Media Sosial** - Update link di file `Footer.tsx`
4. **Metadata & SEO** - Sesuaikan metadata di `src/app/layout.tsx`
5. **Galeri Proyek** - Tambahkan proyek di `src/features/projects/data/projects.ts`

## Catatan SEO & Aksesibilitas

Portfolio ini dioptimalkan dengan:

- 🔗 Metadata dinamis dan template yang fleksibel
- 📱 Open Graph & Twitter cards untuk sharing media sosial
- 🏷️ Semantic HTML untuk aksesibilitas
- 📊 Hierarki heading yang tepat
- 🤖 Konfigurasi `robots` untuk search engines
- ⚡ Performance optimized dengan Next.js 15

## Kontak & Tautan Sosial

Hubungi Ade Habib Dirja melalui:
- 📧 Email: adehabib23@gmail.com
- 💼 LinkedIn: [https://www.linkedin.com/in/ade-habib-dirja-50315821b] (https://www.linkedin.com/in/ade-habib-dirja-50315821b)
- 🐙 GitHub: [https://github.com/bobbib23] (https://github.com/bobbib23)
- 🌐 Website: [https://dirja.web.id] (https://dirja.web.id)

---

**© 2026 Ade Habib Dirja. All Rights Reserved.**
# adehabibportfolio
