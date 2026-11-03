export interface ProjectItem {
  id: number;
  title: string;
  subtitle?: string;
  role: string;
  year: string;
  stack: string[];
  description: string;
  highlights?: string[];
  hashtags?: string[];
  cover: string;
  slides: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Rifky Septiana Rizki",
    title: "Front-End & Full-Stack Web Developer",
    location: "Sumedang, Jawa Barat",
    contact: {
      phone: "0822-4932-1965",
      email: "rifkiseptianarizki@gmail.com",
      linkedin: "https://linkedin.com/in/rifky-septiana-rizki",
      github: "https://github.com/RifkySeptianaRizki",
      instagram: "https://instagram.com/rifkyseptianarizki",
    },
    shortBio: "Saya lulusan S1 Informatika Universitas Sebelas April (IPK 3,68) dengan pengalaman dalam pengembangan web, desain antarmuka, dan dukungan teknis. Saya mengembangkan antarmuka responsif menggunakan JavaScript, React.js, Vite, dan Tailwind CSS serta mengintegrasikan REST API bersama tim back-end. Saya juga berpengalaman memimpin tim dalam kegiatan kampus dan masyarakat seperti pada Desak Cakades Desa Baginda, Karang Taruna, BEM UNSAP, dan UKM TahuNgoding.",
    mission: "Saya membangun aplikasi web yang responsif dan mudah digunakan melalui kolaborasi tim, sekaligus menghadirkan solusi teknis yang mendukung kegiatan kampus dan masyarakat di Sumedang."
  },
  metrics: [
    { label: "IPK S1 Informatika (Universitas Sebelas April)", value: "3,68" },
    { label: "Proyek Web & Sistem Digital", value: "06" },
    { label: "Tahun Pengalaman Web & Organisasi", value: "03+" }
  ],
  projects: [
    {
      id: 1,
      title: "LuminaFund — Platform Donasi dan Beasiswa Mahasiswa",
      subtitle: "PT Sawarga Digital Indonesia • FTI UNSAP",
      role: "Front-End Developer",
      year: "2025 - 2026",
      stack: ["React.js", "Vite", "Tailwind CSS", "Zustand", "REST API"],
      description: "Mengembangkan antarmuka responsif untuk penelusuran kampanye, detail donasi, profil pengguna, riwayat donasi, dan pengajuan beasiswa bagi mahasiswa. Saya membangun komponen yang dapat digunakan kembali, mengelola status aplikasi dengan Zustand, serta mengintegrasikan REST API bersama pengembang back-end untuk menghubungkan antarmuka dengan layanan platform.",
      highlights: [
        "Mengimplementasikan halaman autentikasi, dasbor, kampanye donasi, profil pengguna, dan layanan beasiswa",
        "Membangun komponen antarmuka reusable dengan React.js, Tailwind CSS, dan pengelolaan state Zustand",
        "Mengintegrasikan REST API bersama pengembang back-end untuk menyelaraskan kebutuhan data dan interaksi pengguna"
      ],
      hashtags: ["#LuminaFund", "#ReactJS", "#Vite", "#TailwindCSS", "#Zustand", "#RESTAPI"],
      cover: "/Portofolio/cover-lumina.webp",
      slides: [
        "/Portofolio/cover-lumina.webp",
        "/Portofolio/lumina1.webp",
        "/Portofolio/lumina2.webp",
        "/Portofolio/lumina3.webp",
        "/Portofolio/lumina4.webp"
      ]
    },
    {
      id: 2,
      title: "SuperChallenge — Sistem Pengelolaan Turnamen Esports",
      subtitle: "Kompetisi Mobile Legends",
      role: "Front-End Developer",
      year: "2026",
      stack: ["React.js", "Supabase"],
      description: "Mengembangkan fitur pengelolaan bagan pertandingan dan pencatatan skor untuk kompetisi Mobile Legends, sehingga panitia dapat melihat susunan pertandingan dan mencatat hasilnya dalam satu aplikasi.",
      highlights: [
        "Mengembangkan tampilan bagan pertandingan (playoff bracket) dari babak penyisihan hingga final",
        "Menyediakan fitur pencatatan skor agar panitia dapat memperbarui hasil pertandingan secara terpusat",
        "Menghubungkan antarmuka React.js dengan layanan basis data Supabase"
      ],
      hashtags: ["#SuperChallenge", "#ReactJS", "#Supabase", "#FrontEnd", "#Esports"],
      cover: "/Portofolio/cover-sc.webp",
      slides: [
        "/Portofolio/cover-sc.webp",
        "/Portofolio/sc1.webp",
        "/Portofolio/sc2.webp",
        "/Portofolio/sc3.webp",
        "/Portofolio/sc4.webp"
      ]
    },
    {
      id: 3,
      title: "M-Finance — Sistem Manajemen Keuangan",
      subtitle: "Aplikasi Pencatatan Transaksi & Ringkasan Pengeluaran",
      role: "Fullstack Developer",
      year: "2026",
      stack: ["Next.js", "TypeScript", "Supabase"],
      description: "Mengembangkan aplikasi pencatatan transaksi dengan tampilan ringkasan pengeluaran untuk membantu pengguna meninjau riwayat dan memahami pola pengeluarannya.",
      highlights: [
        "Membangun fitur pencatatan transaksi pemasukan, pengeluaran, dan pengelolaan saldo dompet",
        "Menampilkan ringkasan pengeluaran, anggaran bulanan, serta grafik arus kas yang mudah dipahami",
        "Mengembangkan aplikasi secara full-stack menggunakan Next.js, TypeScript, dan Supabase"
      ],
      hashtags: ["#MFinance", "#NextJS", "#TypeScript", "#Supabase", "#Fullstack"],
      cover: "/Portofolio/cover-finance.webp",
      slides: [
        "/Portofolio/cover-finance.webp",
        "/Portofolio/finance1.webp",
        "/Portofolio/finance2.webp",
        "/Portofolio/finance3.webp",
        "/Portofolio/finance4.webp"
      ]
    },
    {
      id: 4,
      title: "Platform Digitalisasi UMKM UNSAP",
      subtitle: "Universitas Sebelas April Sumedang",
      role: "Fullstack Developer",
      year: "2024",
      stack: ["React.js", "Express.js", "PostgreSQL"],
      description: "Mengembangkan platform katalog digital untuk membantu mahasiswa UNSAP menampilkan produk dan jasa. Fitur penelusuran katalog membantu pengunjung menemukan produk, sementara alur pemesanan dasar mendukung pengajuan pesanan melalui aplikasi.",
      highlights: [
        "Menyediakan katalog digital bagi usaha mahasiswa UNSAP untuk menampilkan produk dan jasa",
        "Memudahkan pengunjung mencari produk melalui fitur penelusuran katalog dan alur pemesanan dasar",
        "Membangun antarmuka dan layanan back-end menggunakan React.js, Express.js, serta PostgreSQL"
      ],
      hashtags: ["#UMKMUNSAP", "#ReactJS", "#ExpressJS", "#PostgreSQL", "#UNSAP"],
      cover: "/Portofolio/cover-umkm.webp",
      slides: [
        "/Portofolio/cover-umkm.webp",
        "/Portofolio/umkm1.webp",
        "/Portofolio/umkm2.webp",
        "/Portofolio/umkm3.webp"
      ]
    },
    {
      id: 5,
      title: "Sistem Manajemen Keanggotaan dan Audit GYM 151",
      subtitle: "Aplikasi Operasional Pusat Kebugaran",
      role: "Fullstack Developer",
      year: "2025",
      stack: ["React.js", "Express.js", "Supabase"],
      description: "Mengembangkan aplikasi operasional pusat kebugaran untuk mengelola data anggota, paket langganan, dan riwayat kehadiran. Aplikasi juga mendukung pencatatan transaksi untuk kebutuhan pemeriksaan internal.",
      highlights: [
        "Mengelola data anggota, masa aktif paket langganan, dan riwayat kehadiran harian",
        "Mendukung pencatatan transaksi pembayaran keanggotaan untuk kebutuhan pemeriksaan internal",
        "Mengembangkan sistem berbasis React.js, Express.js, dan Supabase"
      ],
      hashtags: ["#Gym151", "#ReactJS", "#ExpressJS", "#Supabase", "#Fullstack"],
      cover: "/Portofolio/cover-gym.webp",
      slides: [
        "/Portofolio/cover-gym.webp",
        "/Portofolio/gym1.webp",
        "/Portofolio/gym2.webp",
        "/Portofolio/gym3.webp",
        "/Portofolio/gym4.webp"
      ]
    },
    {
      id: 6,
      title: "Sistem Desak Cakades Desa Baginda",
      subtitle: "Karang Taruna & Panitia Pilkades Desa Baginda",
      role: "Front-End Developer",
      year: "2026",
      stack: ["React.js", "Vite", "JavaScript", "Tailwind CSS"],
      description: "Mengembangkan website tampilan panggung untuk mendukung dialog terbuka calon kepala desa, dengan fitur penghitung waktu bicara, pengundian giliran calon, serta penayangan profil dan materi audiovisual. Sebagai koordinator dan moderator acara, saya menerjemahkan alur dialog ke dalam fitur aplikasi dan menambahkan pintasan papan ketik agar operator dapat berpindah tampilan selama acara.",
      highlights: [
        "Membangun fitur pengundian giliran calon, penghitung waktu bicara, serta penayangan profil dan audiovisual",
        "Menambahkan pintasan papan ketik (keyboard shortcut) agar operator mudah berpindah tampilan saat acara berlangsung",
        "Menyelaraskan fitur teknis aplikasi dengan susunan acara sebagai koordinator dan moderator dialog terbuka"
      ],
      hashtags: ["#DesakCakades", "#DesaBaginda", "#ReactJS", "#Vite", "#TailwindCSS"],
      cover: "/Portofolio/cover-desak.webp",
      slides: [
        "/Portofolio/cover-desak.webp",
        "/Portofolio/desak1.webp",
        "/Portofolio/desak2.webp",
        "/Portofolio/desak3.webp",
        "/Portofolio/desak4.webp"
      ]
    }
  ],
  expertise: [
    {
      id: 1,
      title: "Pengembangan Front-End",
      description: "JavaScript, TypeScript, React.js, Vite, HTML, CSS, Tailwind CSS, desain web responsif, dan integrasi REST API.",
      icon: "Code"
    },
    {
      id: 2,
      title: "Pengembangan Back-End dan Basis Data",
      description: "Node.js, Express.js, PostgreSQL, MySQL, dan Supabase untuk pengelolaan layanan aplikasi serta basis data.",
      icon: "Server"
    },
    {
      id: 3,
      title: "Desain dan Operasional TI",
      description: "Figma, Adobe Photoshop, Canva, Git, GitHub, pengujian fungsional, pemeliharaan situs web, dan penanganan kendala teknis.",
      icon: "PenTool"
    },
    {
      id: 4,
      title: "Kepemimpinan dan Komunikasi",
      description: "Koordinasi tim, perencanaan dan pelaksanaan kegiatan, kolaborasi lintas tim, moderasi acara, dan berbicara di depan umum.",
      icon: "Users"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Software Engineer Intern (Front-End Developer)",
      company: "PT Sawarga Digital Indonesia",
      period: "2025 - 2026",
      description: "Mengembangkan antarmuka LuminaFund, platform donasi dan beasiswa bagi mahasiswa, menggunakan React.js dan Tailwind CSS. Membangun komponen yang dapat digunakan kembali untuk halaman autentikasi, dasbor, kampanye donasi, profil pengguna, dan layanan beasiswa, serta berkolaborasi dengan pengembang back-end dalam mengintegrasikan REST API."
    },
    {
      id: 2,
      role: "Freelance Graphic Designer",
      company: "Kanara",
      period: "2025 - 2026",
      description: "Merancang materi visual media sosial untuk kebutuhan publikasi dan promosi menggunakan Adobe Photoshop dan Canva. Mengolah tata letak, tipografi, warna, dan elemen grafis agar pesan mudah dibaca dan tampilan selaras dengan identitas merek."
    },
    {
      id: 3,
      role: "Freelance IT Support & Web Maintenance",
      company: "Mahugi Entertainment",
      period: "2024 - 2025",
      description: "Menangani kendala teknis pada situs web dan memperbaiki tampilan halaman untuk mendukung operasional perusahaan, sekaligus memeriksa fungsi dan responsivitas halaman pada perangkat desktop maupun seluler setelah perbaikan."
    },
    {
      id: 4,
      role: "Ketua",
      company: "Karang Taruna Desa Baginda",
      period: "2023 - Sekarang",
      description: "Mengoordinasikan anggota dan kepanitiaan kegiatan desa, termasuk menjadi Ketua Pelaksana Milangkala Desa Baginda ke-47 pada 2024. Menyusun alur acara, bertugas sebagai koordinator dan moderator Desak Cakades 2026 sekaligus mengembangkan aplikasi panggung pendukungnya, serta memberikan sosialisasi bijak bermedia sosial kepada warga dan pelajar."
    },
    {
      id: 5,
      role: "Staf Departemen Kemahasiswaan dan Satuan Pengawas Internal",
      company: "Badan Eksekutif Mahasiswa Universitas Sebelas April",
      period: "2023 - 2025",
      description: "Mendukung pelaksanaan program kerja pada periode 2023/2024 dan melakukan pemantauan serta evaluasi program sebagai Satuan Pengawas Internal pada periode 2024/2025. Memimpin PKM Bina Desa Baginda (2024), mengoordinasikan acara Dies Natalis UNSAP (2024 & 2025), serta menjadi pemateri literasi digital, digitalisasi UMKM, dan AI di Desa Pangadegan (2025)."
    },
    {
      id: 6,
      role: "Ketua Divisi Pengabdian dan Pemberdayaan Masyarakat (P2M)",
      company: "Unit Kegiatan Mahasiswa TahuNgoding",
      period: "2023 - 2024",
      description: "Mengoordinasikan kegiatan divisi dan memimpin kepanitiaan NgabuburIT bertema kecerdasan buatan serta Seminar Digital StartUp yang melibatkan Research Alliance Ko+Lab Telkom University. Menerima TAHUAWARD sebagai Pengurus Inti TahuNgoding Terbaik atas kontribusi selama 2023."
    }
  ],
  faq: [
    {
      id: 1,
      question: "Teknologi apa yang menjadi fokus utama Anda dalam pengembangan web?",
      answer: "Saya berfokus pada pengembangan front-end menggunakan JavaScript, TypeScript, React.js, Vite, HTML, CSS, dan Tailwind CSS serta integrasi REST API. Untuk kebutuhan pengembangan full-stack dan basis data, saya menggunakan Next.js, Node.js, Express.js, PostgreSQL, MySQL, dan Supabase."
    },
    {
      id: 2,
      question: "Bagaimana pengalaman Anda dalam bekerja sama di dalam tim maupun memimpin kegiatan?",
      answer: "Di sisi teknis, saya terbiasa berkolaborasi dengan pengembang back-end untuk menyelaraskan kebutuhan data dan integrasi REST API, seperti saat mengembangkan LuminaFund di PT Sawarga Digital Indonesia. Di sisi kepemimpinan, saya berpengalaman mengoordinasikan kepanitiaan dan lintas tim melalui Karang Taruna Desa Baginda, Desak Cakades 2026, BEM UNSAP, dan UKM TahuNgoding."
    },
    {
      id: 3,
      question: "Apakah ada karya ilmiah atau publikasi yang berkaitan dengan proyek portofolio ini?",
      answer: "Ya, saya mengangkat pengembangan antarmuka situs penggalangan dana FTI UNSAP berbasis React.js dengan metode SDLC sebagai topik skripsi. Saya juga menjadi penulis pertama publikasi ilmiah berjudul “Arsitektur Unified Ledger untuk Donasi Digital yang Transparan dengan Idempotency dan Server-Sent Events” di Jurnal Informatika, Multimedia dan Teknik, Vol. 2 No. 2, hlm. 100–108, Januari 2026 (DOI: https://doi.org/10.71456/jimt.v2i2.1590)."
    }
  ]
};
