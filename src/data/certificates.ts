export interface CertificateItem {
  title: string;
  image: string;
  issuer: string;
  year?: string;
  description: string;
}

export interface CertificateGroup {
  id: string;
  category: string;
  title: string;
  issuer: string;
  cover: string;
  itemsCount: number;
  items: CertificateItem[];
}

export const CERTIFICATE_GROUPS: CertificateGroup[] = [
  {
    "id": "dicoding-azure",
    "category": "AI & Cloud Engineering",
    "title": "elevAIte Microsoft Azure & AI Track",
    "issuer": "Dicoding Indonesia & Microsoft",
    "cover": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure AI Fundamentals- Generative AI.webp",
    "itemsCount": 27,
    "items": [
      {
        "title": "Create computer vision solutions with Azure AI Vision",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Create computer vision solutions with Azure AI Vision.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Kompetensi deteksi objek, analisis citra digital, dan ekstraksi fitur visual otomatis menggunakan Azure AI Vision."
      },
      {
        "title": "Create vision models with Azure AI Custom Vision",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Create vision models with Azure AI Custom Vision .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Pembangunan dan pelatihan model klasifikasi gambar serta deteksi objek khusus (custom object detection) dengan Azure Custom Vision."
      },
      {
        "title": "Deploy and consume models with Azure Machine Learning",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Deploy and consume models with Azure Machine Learning.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Manajemen siklus hidup model ML (MLOps), pelatihan berbasis skrip, eksperimentasi data, dan deployment model di cloud."
      },
      {
        "title": "Deploy cloud-native apps using Azure Container Apps",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Deploy cloud-native apps using Azure Container Apps.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Deployment dan orkestrasi aplikasi cloud-native modern berbasis kontainer mikroservis menggunakan Azure Container Apps."
      },
      {
        "title": "Develop Generative AI solutions with Azure OpenAI Service",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Develop Generative AI solutions with Azure OpenAI Service .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Implementasi solusi kecerdasan buatan generatif, prompt engineering, dan integrasi model LLM OpenAI dengan Semantic Kernel."
      },
      {
        "title": "Develop generative AI apps in Azure AI Foundry",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Develop generative AI apps in Azure AI Foundry.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Eksplorasi dan pengembangan solusi AI generatif end-to-end melalui ekosistem Azure AI Studio / Foundry."
      },
      {
        "title": "Develop generative AI apps with Azure OpenAI and Semantic Kernel",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Develop generative AI apps with Azure OpenAI and Semantic Kernel.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Implementasi solusi kecerdasan buatan generatif, prompt engineering, dan integrasi model LLM OpenAI dengan Semantic Kernel."
      },
      {
        "title": "Develop natural language processing solutions with Azure AI Services",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Develop natural language processing solutions with Azure AI Services .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Sertifikasi pengakuan kompetensi dan kontribusi profesional dalam bidang Develop natural language processing solutions with Azure AI Services."
      },
      {
        "title": "Develop solutions with Azure AI Document Intelligence",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Develop solutions with Azure AI Document Intelligence.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Ekstraksi data terstruktur otomatis dari formulir, faktur, dan dokumen PDF berbasis AI Document Intelligence."
      },
      {
        "title": "Experiment with Azure Machine Learning",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Experiment with Azure Machine Learning.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Manajemen siklus hidup model ML (MLOps), pelatihan berbasis skrip, eksperimentasi data, dan deployment model di cloud."
      },
      {
        "title": "Explore and configure the Azure Machine Learning workspace",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Explore and configure the Azure Machine Learning workspace.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Manajemen siklus hidup model ML (MLOps), pelatihan berbasis skrip, eksperimentasi data, dan deployment model di cloud."
      },
      {
        "title": "Get started with Azure AI Services",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Get started with Azure AI Services.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Sertifikasi pengakuan kompetensi dan kontribusi profesional dalam bidang Get started with Azure AI Services."
      },
      {
        "title": "GitHub Copilot Fundamentals Part 2 of 2",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/GitHub Copilot Fundamentals Part 2 of 2.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Peningkatan produktivitas rekayasa perangkat lunak melalui generative code completion dan asistensi GitHub Copilot."
      },
      {
        "title": "Implement knowledge mining with Azure AI Search",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Implement knowledge mining with Azure AI Search .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Pengindeksan data cerdas dan penambangan wawasan berbasis Azure Cognitive Search & Knowledge Mining."
      },
      {
        "title": "Implement security through a pipeline using Azure DevOps",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Implement security through a pipeline using Azure DevOps.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Penerapan pipeline CI/CD aman, pemindaian kerentanan kode, dan kepatuhan regulasi keamanan menggunakan Azure DevOps."
      },
      {
        "title": "Manage and review models in Azure Machine Learning",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Manage and review models in Azure Machine Learning.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Manajemen siklus hidup model ML (MLOps), pelatihan berbasis skrip, eksperimentasi data, dan deployment model di cloud."
      },
      {
        "title": "Microsoft Azure AI Fundamentals- AI Overview",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure AI Fundamentals- AI Overview.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Penguasaan fundamental komputasi awan, arsitektur infrastruktur cloud Azure, tata kelola keamanan, dan kepatuhan SLA."
      },
      {
        "title": "Microsoft Azure AI Fundamentals- Computer Vision",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure AI Fundamentals- Computer Vision.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Kompetensi deteksi objek, analisis citra digital, dan ekstraksi fitur visual otomatis menggunakan Azure AI Vision."
      },
      {
        "title": "Microsoft Azure AI Fundamentals- Document Intelligence and Knowledge Mining",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure AI Fundamentals- Document Intelligence and Knowledge Mining .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Ekstraksi data terstruktur otomatis dari formulir, faktur, dan dokumen PDF berbasis AI Document Intelligence."
      },
      {
        "title": "Microsoft Azure AI Fundamentals- Generative AI",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure AI Fundamentals- Generative AI.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Implementasi solusi kecerdasan buatan generatif, prompt engineering, dan integrasi model LLM OpenAI dengan Semantic Kernel."
      },
      {
        "title": "Microsoft Azure AI Fundamentals- Natural Language Processing",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure AI Fundamentals- Natural Language Processing.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Pemrosesan bahasa alami (NLP), analisis sentimen, ekstraksi entitas, dan pemahaman teks menggunakan Azure AI Language."
      },
      {
        "title": "Microsoft Azure Fundamentals- Describe Azure architecture and services",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure Fundamentals- Describe Azure architecture and services.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Penguasaan fundamental komputasi awan, arsitektur infrastruktur cloud Azure, tata kelola keamanan, dan kepatuhan SLA."
      },
      {
        "title": "Microsoft Azure Fundamentals- Describe Azure management and governance",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure Fundamentals- Describe Azure management and governance .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Penguasaan fundamental komputasi awan, arsitektur infrastruktur cloud Azure, tata kelola keamanan, dan kepatuhan SLA."
      },
      {
        "title": "Microsoft Azure Fundamentals- Describe cloud concepts",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure Fundamentals- Describe cloud concepts.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Penguasaan fundamental komputasi awan, arsitektur infrastruktur cloud Azure, tata kelola keamanan, dan kepatuhan SLA."
      },
      {
        "title": "Optimize model training with Azure Machine Learning",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Optimize model training with Azure Machine Learning.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Manajemen siklus hidup model ML (MLOps), pelatihan berbasis skrip, eksperimentasi data, dan deployment model di cloud."
      },
      {
        "title": "Train and manage a machine learning model with Azure Machine Learning",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Train and manage a machine learning model with Azure Machine Learning.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Manajemen siklus hidup model ML (MLOps), pelatihan berbasis skrip, eksperimentasi data, dan deployment model di cloud."
      },
      {
        "title": "Train models with scripts in Azure Machine Learning",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Train models with scripts in Azure Machine Learning .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Manajemen siklus hidup model ML (MLOps), pelatihan berbasis skrip, eksperimentasi data, dan deployment model di cloud."
      }
    ]
  },
  {
    "id": "great-learning",
    "category": "Machine Learning & Data Science",
    "title": "Great Learning Academy AI & ML Track",
    "issuer": "Great Learning Academy",
    "cover": "/Sertifikat/Certificate Great Learning/Artificial Intelligence Fundamentals.webp",
    "itemsCount": 6,
    "items": [
      {
        "title": "Artificial Intelligence Fundamentals",
        "image": "/Sertifikat/Certificate Great Learning/Artificial Intelligence Fundamentals.webp",
        "issuer": "Great Learning Academy",
        "year": "2024",
        "description": "Penguasaan fundamental komputasi awan, arsitektur infrastruktur cloud Azure, tata kelola keamanan, dan kepatuhan SLA."
      },
      {
        "title": "Basics Of Machine Learning",
        "image": "/Sertifikat/Certificate Great Learning/Basics Of Machine Learning.webp",
        "issuer": "Great Learning Academy",
        "year": "2024",
        "description": "Manajemen siklus hidup model ML (MLOps), pelatihan berbasis skrip, eksperimentasi data, dan deployment model di cloud."
      },
      {
        "title": "Data Visualization Using Python",
        "image": "/Sertifikat/Certificate Great Learning/Data Visualization Using Python.webp",
        "issuer": "Great Learning Academy",
        "year": "2024",
        "description": "Analisis data dan visualisasi statistik grafis interaktif menggunakan pustaka Python (Matplotlib, Seaborn)."
      },
      {
        "title": "Introduction to Supervised Learning",
        "image": "/Sertifikat/Certificate Great Learning/Introduction to Supervised Learning.webp",
        "issuer": "Great Learning Academy",
        "year": "2024",
        "description": "Penerapan algoritma machine learning (regresi, klasifikasi, decision trees) untuk pemodelan prediktif akurat."
      },
      {
        "title": "Machine Learning Algorithms",
        "image": "/Sertifikat/Certificate Great Learning/Machine Learning Algorithms.webp",
        "issuer": "Great Learning Academy",
        "year": "2024",
        "description": "Manajemen siklus hidup model ML (MLOps), pelatihan berbasis skrip, eksperimentasi data, dan deployment model di cloud."
      },
      {
        "title": "Unsupervised Learning",
        "image": "/Sertifikat/Certificate Great Learning/Unsupervised Learning.webp",
        "issuer": "Great Learning Academy",
        "year": "2024",
        "description": "Analisis pola tersembunyi dan pengelompokan data tanpa label (clustering & dimensionality reduction)."
      }
    ]
  },
  {
    "id": "wadhwani",
    "category": "Professional & Entrepreneurship",
    "title": "Wadhwani Liftoff Job Readiness",
    "issuer": "Wadhwani Foundation",
    "cover": "/Sertifikat/wadhwani/png/Program Certificate.webp",
    "itemsCount": 14,
    "items": [
      {
        "title": "Customer Centricity",
        "image": "/Sertifikat/wadhwani/png/Customer Centricity.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Prinsip pemahaman kebutuhan pengguna dan orientasi kepuasan pelanggan dalam produk digital."
      },
      {
        "title": "Effective Speaking and Listening Skills",
        "image": "/Sertifikat/wadhwani/png/Effective Speaking and Listening Skills.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Komunikasi profesional lintas tim, presentasi gagasan efektif, dan penulisan dokumen teknis terstandar."
      },
      {
        "title": "Financial Literacy",
        "image": "/Sertifikat/wadhwani/png/Financial Literacy.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Pengelolaan literasi keuangan profesional, analisis biaya operasional, dan perencanaan anggaran terukur."
      },
      {
        "title": "Impactful Writing Skills",
        "image": "/Sertifikat/wadhwani/png/Impactful Writing Skills.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Komunikasi profesional lintas tim, presentasi gagasan efektif, dan penulisan dokumen teknis terstandar."
      },
      {
        "title": "Interpersonal Skills",
        "image": "/Sertifikat/wadhwani/png/Interpersonal Skills.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Sertifikasi pengakuan kompetensi dan kontribusi profesional dalam bidang Interpersonal Skills."
      },
      {
        "title": "Introduction to Entrepreneurship",
        "image": "/Sertifikat/wadhwani/png/Introduction to Entrepreneurship.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Pengembangan pola pikir inovasi bisnis, validasi peluang pasar, dan perancangan model bisnis rintisan (startup)."
      },
      {
        "title": "Online Communication & Data Security",
        "image": "/Sertifikat/wadhwani/png/Online Communication & Data Security.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Komunikasi profesional lintas tim, presentasi gagasan efektif, dan penulisan dokumen teknis terstandar."
      },
      {
        "title": "Problem Solving & Innovation",
        "image": "/Sertifikat/wadhwani/png/Problem Solving & Innovation.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Metodologi pemecahan masalah kritis, analisis akar masalah, dan perancangan solusi inovatif terstruktur."
      },
      {
        "title": "Professionalism",
        "image": "/Sertifikat/wadhwani/png/Professionalism.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Manajemen waktu kerja, etika profesionalisme industri, dan pemanfaatan perangkat produktivitas digital."
      },
      {
        "title": "Program Certificate",
        "image": "/Sertifikat/wadhwani/png/Program Certificate.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Sertifikasi pengakuan kompetensi dan kontribusi profesional dalam bidang Program Certificate."
      },
      {
        "title": "Self-Management",
        "image": "/Sertifikat/wadhwani/png/Self-Management.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Manajemen waktu kerja, etika profesionalisme industri, dan pemanfaatan perangkat produktivitas digital."
      },
      {
        "title": "Self-Presentation",
        "image": "/Sertifikat/wadhwani/png/Self-Presentation.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Sertifikasi pengakuan kompetensi dan kontribusi profesional dalam bidang Self-Presentation."
      },
      {
        "title": "Start-up Mindset",
        "image": "/Sertifikat/wadhwani/png/Start-up Mindset.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Pengembangan pola pikir inovasi bisnis, validasi peluang pasar, dan perancangan model bisnis rintisan (startup)."
      },
      {
        "title": "Work Productivity Tools",
        "image": "/Sertifikat/wadhwani/png/Work Productivity Tools.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2024",
        "description": "Manajemen waktu kerja, etika profesionalisme industri, dan pemanfaatan perangkat produktivitas digital."
      }
    ]
  },
  {
    "id": "asean-digital",
    "category": "Regional Certification",
    "title": "ASEAN AI Career Readiness",
    "issuer": "ASEAN Digital Academy",
    "cover": "/Sertifikat/ASEAN Digital Academy/AI Career Readiness.webp",
    "itemsCount": 1,
    "items": [
      {
        "title": "AI Career Readiness",
        "image": "/Sertifikat/ASEAN Digital Academy/AI Career Readiness.webp",
        "issuer": "ASEAN Digital Academy",
        "year": "2024",
        "description": "Sertifikasi kesiapan karir bidang Artificial Intelligence dan etika pemanfaatan AI tingkat regional ASEAN."
      }
    ]
  },
  {
    "id": "org-leadership",
    "category": "Leadership & Community",
    "title": "Kepemimpinan & Organisasi Mahasiswa",
    "issuer": "Universitas Sebelas April & Komunitas",
    "cover": "/Sertifikat/Organisasi/BEM UNSAP 2024-2025.webp",
    "itemsCount": 10,
    "items": [
      {
        "title": "ACARA DIESNATALIS UNSAP 2023",
        "image": "/Sertifikat/Organisasi/ACARA DIESNATALIS UNSAP 2023.webp",
        "issuer": "BEM UNSAP & Komunitas TahuNgoding",
        "year": "2022 - 2025",
        "description": "Sertifikasi pengakuan kompetensi dan kontribusi profesional dalam bidang ACARA DIESNATALIS UNSAP 2023."
      },
      {
        "title": "ACARA PKKMB 2023",
        "image": "/Sertifikat/Organisasi/ACARA PKKMB 2023.webp",
        "issuer": "BEM UNSAP & Komunitas TahuNgoding",
        "year": "2022 - 2025",
        "description": "Sertifikasi pengakuan kompetensi dan kontribusi profesional dalam bidang ACARA PKKMB 2023."
      },
      {
        "title": "BEM UNSAP 2023-2024",
        "image": "/Sertifikat/Organisasi/BEM UNSAP 2023-2024.webp",
        "issuer": "BEM UNSAP & Komunitas TahuNgoding",
        "year": "2022 - 2025",
        "description": "Pengurus Badan Eksekutif Mahasiswa (BEM) Universitas Sebelas April periode 2023-2024 bidang kepemimpinan dan advokasi."
      },
      {
        "title": "BEM UNSAP 2024-2025",
        "image": "/Sertifikat/Organisasi/BEM UNSAP 2024-2025.webp",
        "issuer": "BEM UNSAP & Komunitas TahuNgoding",
        "year": "2022 - 2025",
        "description": "Pengurus Badan Eksekutif Mahasiswa (BEM) Universitas Sebelas April periode 2024-2025 bidang kepemimpinan dan advokasi."
      },
      {
        "title": "DISHUB 2023",
        "image": "/Sertifikat/Organisasi/DISHUB 2023.webp",
        "issuer": "BEM UNSAP & Komunitas TahuNgoding",
        "year": "2022 - 2025",
        "description": "Kontribusi dalam program pendukung operasional dan sosialisasi Dinas Perhubungan Kabupaten Sumedang."
      },
      {
        "title": "KETUA KKN UNSAP 2026",
        "image": "/Sertifikat/Organisasi/KETUA KKN UNSAP 2026.webp",
        "issuer": "BEM UNSAP & Komunitas TahuNgoding",
        "year": "2022 - 2025",
        "description": "Pemimpin dan koordinator utama pelaksanaan program KKN UNSAP 2026 dengan tata kelola tim yang solid."
      },
      {
        "title": "LDKM 2022",
        "image": "/Sertifikat/Organisasi/LDKM 2022.webp",
        "issuer": "BEM UNSAP & Komunitas TahuNgoding",
        "year": "2022 - 2025",
        "description": "Sertifikasi pengakuan kompetensi dan kontribusi profesional dalam bidang LDKM 2022."
      },
      {
        "title": "PEMIRA UNSAP 2023",
        "image": "/Sertifikat/Organisasi/PEMIRA UNSAP 2023.webp",
        "issuer": "BEM UNSAP & Komunitas TahuNgoding",
        "year": "2022 - 2025",
        "description": "Sertifikasi pengakuan kompetensi dan kontribusi profesional dalam bidang PEMIRA UNSAP 2023."
      },
      {
        "title": "PENGURUS INTI TAHUNGODING TERBAIK 2024",
        "image": "/Sertifikat/Organisasi/PENGURUS INTI TAHUNGODING TERBAIK 2024.webp",
        "issuer": "BEM UNSAP & Komunitas TahuNgoding",
        "year": "2022 - 2025",
        "description": "Apresiasi dedikasi pengurus inti terbaik komunitas pemrograman dan riset teknologi TahuNgoding."
      },
      {
        "title": "TAHUNGODING 2023-2024",
        "image": "/Sertifikat/Organisasi/TAHUNGODING 2023-2024.webp",
        "issuer": "BEM UNSAP & Komunitas TahuNgoding",
        "year": "2022 - 2025",
        "description": "Apresiasi dedikasi pengurus inti terbaik komunitas pemrograman dan riset teknologi TahuNgoding."
      }
    ]
  },
  {
    "id": "org-speaker",
    "category": "Public Speaking & Event Director",
    "title": "Narasumber & Pengabdian Masyarakat",
    "issuer": "Mitra Pendidikan & Panitia Pelaksana",
    "cover": "/Sertifikat/Organisasi/Pemateri SMK.webp",
    "itemsCount": 8,
    "items": [
      {
        "title": "ACARA WORKSHOP PERSONAL BRANDING HIMA",
        "image": "/Sertifikat/Organisasi/ACARA WORKSHOP PERSONAL BRANDING HIMA.webp",
        "issuer": "Mitra Pendidikan & Panitia Pelaksana",
        "year": "2023 - 2024",
        "description": "Sertifikasi pengakuan kompetensi dan kontribusi profesional dalam bidang ACARA WORKSHOP PERSONAL BRANDING HIMA."
      },
      {
        "title": "KETUA MILANGKALA DESA BAGINDA 2024",
        "image": "/Sertifikat/Organisasi/KETUA MILANGKALA DESA BAGINDA 2024.webp",
        "issuer": "Mitra Pendidikan & Panitia Pelaksana",
        "year": "2023 - 2024",
        "description": "Pemimpin dan koordinator utama pelaksanaan program MILANGKALA DESA BAGINDA 2024 dengan tata kelola tim yang solid."
      },
      {
        "title": "KETUA PKM 2023",
        "image": "/Sertifikat/Organisasi/KETUA PKM 2023.webp",
        "issuer": "Mitra Pendidikan & Panitia Pelaksana",
        "year": "2023 - 2024",
        "description": "Pemimpin dan koordinator utama pelaksanaan program PKM 2023 dengan tata kelola tim yang solid."
      },
      {
        "title": "KETUA SEMINAR AI 2023",
        "image": "/Sertifikat/Organisasi/KETUA SEMINAR AI 2023.webp",
        "issuer": "Mitra Pendidikan & Panitia Pelaksana",
        "year": "2023 - 2024",
        "description": "Pemimpin dan koordinator utama pelaksanaan program SEMINAR AI 2023 dengan tata kelola tim yang solid."
      },
      {
        "title": "KETUA SEMINAR STARTUP 2023",
        "image": "/Sertifikat/Organisasi/KETUA SEMINAR STARTUP 2023.webp",
        "issuer": "Mitra Pendidikan & Panitia Pelaksana",
        "year": "2023 - 2024",
        "description": "Pemimpin dan koordinator utama pelaksanaan program SEMINAR STARTUP 2023 dengan tata kelola tim yang solid."
      },
      {
        "title": "Pemateri SD",
        "image": "/Sertifikat/Organisasi/Pemateri SD.webp",
        "issuer": "Mitra Pendidikan & Panitia Pelaksana",
        "year": "2023 - 2024",
        "description": "Narasumber edukasi teknologi dan literasi digital kepada peserta SD."
      },
      {
        "title": "Pemateri SMK",
        "image": "/Sertifikat/Organisasi/Pemateri SMK.webp",
        "issuer": "Mitra Pendidikan & Panitia Pelaksana",
        "year": "2023 - 2024",
        "description": "Narasumber edukasi teknologi dan literasi digital kepada peserta SMK."
      },
      {
        "title": "PemateriUMKM",
        "image": "/Sertifikat/Organisasi/PemateriUMKM.webp",
        "issuer": "Mitra Pendidikan & Panitia Pelaksana",
        "year": "2023 - 2024",
        "description": "Narasumber edukasi teknologi dan literasi digital kepada peserta UMKM."
      }
    ]
  }
];
