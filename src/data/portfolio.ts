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
    title: "Full-Stack Web Developer & UI/UX Specialist",
    location: "Sumedang, Jawa Barat, Indonesia",
    contact: {
      phone: "+62 819 5998 6108",
      email: "rifkiseptianarizki@gmail.com",
      linkedin: "https://linkedin.com/in/rifky-septiana-rizki",
      github: "https://github.com/RifkySeptianaRizki",
      instagram: "https://instagram.com/rifkyseptianarizki",
    },
    shortBio: "Fresh graduate Sarjana Informatika Universitas Sebelas April (IPK 3.68) specializing in full-stack web development, UI/UX design, and IT system maintenance. Proven leadership in university and public organizations.",
    mission: "Software engineer shaping resilient web applications and impactful digital products from Sumedang."
  },
  metrics: [
    { label: "GPA / Academic Distinction (Sarjana Informatika UNSAP)", value: "3.68" },
    { label: "Production & Community Web Projects", value: "06+" },
    { label: "Years of Leadership & Dev Experience", value: "03+" }
  ],
  projects: [
    {
      id: 1,
      title: "LuminaFund – Platform Donasi & Beasiswa",
      subtitle: "PT Sadigit • FTI UNSAP",
      role: "Full-Stack Developer (PT Sadigit Intern)",
      year: "2025",
      stack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "RESTful API"],
      description: "Platform filantropi terintegrasi untuk menyalurkan bantuan finansial mahasiswa prasejahtera FTI UNSAP; dilengkapi modul verifikasi administrasi dan rekam jejak transaksi donasi secara transparan.",
      highlights: [
        "Arsitektur front-end responsif & integrasi REST API",
        "Modul seleksi beasiswa & verifikasi berkas mahasiswa",
        "Transparansi rekam jejak penyaluran dana donasi"
      ],
      hashtags: ["#LuminaFund", "#ReactJS", "#NodeJS", "#ExpressJS", "#TailwindCSS", "#FullStackDev"],
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
      title: "SuperChallenge Esport – Tournament Engine",
      subtitle: "Kemitraan Komunitas Djarum Super",
      role: "Full-Stack Developer (Kemitraan Djarum Super)",
      year: "2024",
      stack: ["React.js", "Supabase", "Express.js", "Dynamic Bracket Algorithm"],
      description: "Sistem manajemen kompetisi Mobile Legends otomatis untuk kalkulasi poin, penjadwalan bagan pertandingan (dynamic tournament bracket), live scoring, dan penegakan regulasi turnamen.",
      highlights: [
        "Dynamic Bracket Algorithm untuk bagan pertandingan otomatis",
        "Real-time live scoring & klasemen tim peserta",
        "Manajemen registrasi tim dan jadwal Grand Finals"
      ],
      hashtags: ["#SuperChallenge", "#TournamentEngine", "#ReactJS", "#Supabase", "#Esports", "#WebDev"],
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
      title: "M-Finance – AI Financial Management System",
      subtitle: "Smart Financial SaaS & OCR Tracker",
      role: "Full-Stack Developer",
      year: "2024",
      stack: ["TypeScript", "Express.js", "PostgreSQL", "AI/OCR Integration", "Data Analytics"],
      description: "Aplikasi pencatatan keuangan pintar (SaaS) dengan kapabilitas pemindaian struk berbasis AI/OCR secara otomatis serta visualisasi analisis tren pengeluaran dan arus kas berkala.",
      highlights: [
        "Pemindaian struk belanja otomatis berbasis AI/OCR",
        "Visualisasi grafik analitik pemasukan & pengeluaran",
        "Manajemen anggaran & pelacakan transaksi real-time"
      ],
      hashtags: ["#MFinance", "#TypeScript", "#PostgreSQL", "#AIFinance", "#OCR", "#SaaS"],
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
      title: "UMKM UNSAP – Digital Startup Portal",
      subtitle: "Universitas Sebelas April Sumedang",
      role: "Full-Stack Developer",
      year: "2024",
      stack: ["Flutter", "React.js", "RESTful API", "Responsive Web"],
      description: "Wadah digital bagi wirausaha mahasiswa UNSAP untuk memamerkan katalog produk dan jasa, memperluas jangkauan pasar lokal, serta mengotomasi sistem pemesanan dasar.",
      highlights: [
        "Etalase katalog produk & jasa wirausaha mahasiswa",
        "Integrasi pemesanan langsung & manajemen toko",
        "Desain responsif lintas perangkat (Web & Mobile)"
      ],
      hashtags: ["#UMKMUNSAP", "#DigitalStartup", "#ReactJS", "#Flutter", "#RESTfulAPI", "#UNSAP"],
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
      title: "Sistem Manajemen Member & Audit GYM 151",
      subtitle: "Gym Operations & Financial Ledger SaaS",
      role: "Full-Stack Developer",
      year: "2023",
      stack: ["React.js", "Express.js", "Supabase", "RBAC", "Financial Ledger"],
      description: "Platform SaaS operasional pusat kebugaran untuk mengelola keanggotaan aktif, paket langganan berkala, riwayat kehadiran member, dan rekonsiliasi audit finansial internal.",
      highlights: [
        "Role-Based Access Control (RBAC) untuk staf & pemilik",
        "Pencatatan invoice otomatis & audit pembukuan",
        "Monitoring masa aktif membership & presensi harian"
      ],
      hashtags: ["#Gym151", "#SaaS", "#ReactJS", "#Supabase", "#ExpressJS", "#WebSystem"],
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
      subtitle: "Pilkades & Dialog Terbuka Desa Baginda",
      role: "Front-End Developer (Desa Baginda)",
      year: "2024",
      stack: ["React.js", "Vite", "JavaScript", "Tailwind CSS", "CSS Animation"],
      description: "Aplikasi tampilan panggung interaktif untuk dialog terbuka calon kepala desa, dilengkapi countdown timer, pengundian giliran calon, bumper profil & sambutan, serta kontrol penuh melalui shortcut keyboard operator.",
      highlights: [
        "Countdown timer panggung real-time & audio cue",
        "Sistem undian giliran otomatis kandidat kepala desa",
        "Kontrol operator instan via shortcut keyboard"
      ],
      hashtags: ["#DesakCakades", "#DesaBaginda", "#ReactJS", "#Vite", "#TailwindCSS", "#InteractiveStage"],
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
      title: "Full-Stack Web Development",
      description: "React, Next.js, Express, Laravel, REST APIs, MySQL/PostgreSQL",
      icon: "Code"
    },
    {
      id: 2,
      title: "UI/UX & Visual Design",
      description: "Figma wireframing, modern design systems, Adobe Photoshop, Canva",
      icon: "PenTool"
    },
    {
      id: 3,
      title: "IT Support & System Maintenance",
      description: "Troubleshooting, uptime stability, performance optimization",
      icon: "Server"
    },
    {
      id: 4,
      title: "Agile Leadership & Project Coordination",
      description: "Agile workflow, cross-functional team coordination, public speaking",
      icon: "Users"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Software Engineer Intern (Full-Stack)",
      company: "PT Sadigit",
      period: "2025 - 2026",
      description: "Developed and maintained full-stack web applications, contributing to both frontend UI components and backend RESTful APIs."
    },
    {
      id: 2,
      role: "Freelance Graphic Designer",
      company: "Kanara",
      period: "2025 - Present",
      description: "Designed marketing materials, branding assets, and modern visual identities for various client campaigns."
    },
    {
      id: 3,
      role: "Freelance IT Support & Web Maintenance",
      company: "Mahugi Entertainment",
      period: "2024 - 2025",
      description: "Ensured uptime stability, performed system troubleshooting, and optimized website performance."
    },
    {
      id: 4,
      role: "Ketua Karang Taruna",
      company: "Desa Baginda",
      period: "2024 - 2026",
      description: "Led community programs, organized local events, and facilitated cross-functional coordination for youth empowerment."
    },
    {
      id: 5,
      role: "Satuan Pengawas Internal & Satgas PPKPT",
      company: "BEM UNSAP",
      period: "2023 - 2025",
      description: "Monitored organizational compliance, conducted internal audits, and ensured accountability within the student executive board."
    },
    {
      id: 6,
      role: "Ketua Divisi P2M",
      company: "UKM TahuNgoding UNSAP",
      period: "2023 - 2024",
      description: "Spearheaded community outreach initiatives, bridging the gap between student developers and local societal needs."
    }
  ],
  faq: [
    {
      id: 1,
      question: "What is your core tech stack?",
      answer: "I specialize in the Next.js, React, and Node.js ecosystem, alongside PostgreSQL and Flutter."
    },
    {
      id: 2,
      question: "Are you available for full-time roles or freelance projects?",
      answer: "I'm open to both! Whether joining a team full-time or collaborating on freelance projects."
    },
    {
      id: 3,
      question: "How do you approach full-stack project development?",
      answer: "I focus on scalable architecture and seamless UX. From Figma wireframes to a robust backend and an animated frontend."
    }
  ]
};
