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
    "id": "google-cloud",
    "category": "Komputasi Awan",
    "title": "Google Cloud Computing Foundations Certificate",
    "issuer": "Google Cloud",
    "cover": "/Sertifikat/Google Cloud/Google Cloud Computing Foundations- Cloud Computing Fundamentals.webp",
    "itemsCount": 9,
    "items": [
      {
        "title": "Google Cloud Computing Foundations Certificate",
        "image": "/Sertifikat/Google Cloud/Google Cloud Computing Foundations Certificate.webp",
        "issuer": "Google Cloud",
        "year": "April 2026",
        "description": "Sertifikat kelulusan rangkaian kurikulum Google Cloud Computing Foundations yang mencakup dasar komputasi awan, infrastruktur, jaringan, keamanan, data, serta pembelajaran mesin."
      },
      {
        "title": "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
        "image": "/Sertifikat/Google Cloud/Google Cloud Computing Foundations- Cloud Computing Fundamentals.webp",
        "issuer": "Google Cloud",
        "year": "April 2026",
        "description": "Mempelajari konsep dasar komputasi awan, arsitektur layanan Google Cloud, serta pengelolaan sumber daya melalui Cloud Console dan Cloud Shell."
      },
      {
        "title": "Google Cloud Computing Foundations: Infrastructure in Google Cloud",
        "image": "/Sertifikat/Google Cloud/Google Cloud Computing Foundations- Infrastructure in Google Cloud.webp",
        "issuer": "Google Cloud",
        "year": "April 2026",
        "description": "Memahami penyediaan mesin virtual (Compute Engine), layanan penyimpanan cloud, pengelolaan kontainer, serta arsitektur aplikasi di Google Cloud."
      },
      {
        "title": "Google Cloud Computing Foundations: Networking & Security in Google Cloud",
        "image": "/Sertifikat/Google Cloud/Google Cloud Computing Foundations- Networking & Security in Google Cloud.webp",
        "issuer": "Google Cloud",
        "year": "April 2026",
        "description": "Mempelajari konfigurasi jaringan Virtual Private Cloud (VPC), pengaturan firewall, penyeimbang beban, serta pengelolaan hak akses keamanan (IAM)."
      },
      {
        "title": "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud",
        "image": "/Sertifikat/Google Cloud/Google Cloud Computing Foundations- Data, ML, and AI in Google Cloud.webp",
        "issuer": "Google Cloud",
        "year": "April 2026",
        "description": "Mengelola pengolahan data berskala besar dengan BigQuery serta memanfaatkan API pembelajaran mesin dan kecerdasan buatan di Google Cloud."
      },
      {
        "title": "Build a Secure Google Cloud Network",
        "image": "/Sertifikat/Google Cloud/Build a Secure Google Cloud Network.webp",
        "issuer": "Google Cloud",
        "year": "April 2026",
        "description": "Praktik langsung membangun dan mengamankan jaringan VPC, mengonfigurasi aturan firewall, serta melindungi aplikasi menggunakan Cloud Armor."
      },
      {
        "title": "Implement Load Balancing on Compute Engine",
        "image": "/Sertifikat/Google Cloud/Implement Load Balancing on Compute Engine.webp",
        "issuer": "Google Cloud",
        "year": "April 2026",
        "description": "Mengonfigurasi Network Load Balancer dan HTTP(S) Load Balancer untuk mendistribusikan trafik aplikasi pada instans Compute Engine."
      },
      {
        "title": "Set Up an App Dev Environment on Google Cloud",
        "image": "/Sertifikat/Google Cloud/Set Up an App Dev Environment on Google Cloud.webp",
        "issuer": "Google Cloud",
        "year": "April 2026",
        "description": "Menyiapkan lingkungan pengembangan aplikasi menggunakan Cloud Storage, IAM, Cloud Functions, dan Pub/Sub pada Google Cloud."
      },
      {
        "title": "Prepare Data for ML APIs on Google Cloud",
        "image": "/Sertifikat/Google Cloud/Prepare Data for ML APIs on Google Cloud.webp",
        "issuer": "Google Cloud",
        "year": "April 2026",
        "description": "Membersihkan dan memproses data menggunakan Dataprep, Dataflow, serta Dataproc sebelum diintegrasikan dengan API Machine Learning Google Cloud."
      }
    ]
  },
  {
    "id": "huawei-ai",
    "category": "Kecerdasan Buatan & Data",
    "title": "Overview of AI",
    "issuer": "Huawei ICT Academy & Mitra Pelatihan",
    "cover": "/Sertifikat/Huawei/Overview of AI.webp",
    "itemsCount": 8,
    "items": [
      {
        "title": "Overview of AI",
        "image": "/Sertifikat/Huawei/Overview of AI.webp",
        "issuer": "Huawei ICT Academy",
        "year": "November 2026",
        "description": "Menyelesaikan pembelajaran dan ujian Overview of AI pada Huawei ICT Academy yang membahas konsep dasar kecerdasan buatan, pembelajaran mesin, dan penerapannya."
      },
      {
        "title": "AI Career Readiness",
        "image": "/Sertifikat/ASEAN Digital Academy/AI Career Readiness.webp",
        "issuer": "ASEAN Digital Academy & ASEAN Foundation",
        "year": "Oktober 2025",
        "description": "Menyelesaikan pelatihan kesiapan karier di bidang kecerdasan buatan yang diselenggarakan melalui platform ASEAN Digital Academy."
      },
      {
        "title": "Artificial Intelligence Fundamentals",
        "image": "/Sertifikat/Certificate Great Learning/Artificial Intelligence Fundamentals.webp",
        "issuer": "Great Learning Academy",
        "year": "2024",
        "description": "Mempelajari konsep dasar kecerdasan buatan, algoritma pencarian, serta pengantar pembelajaran mesin dan jaringan saraf."
      },
      {
        "title": "Basics Of Machine Learning",
        "image": "/Sertifikat/Certificate Great Learning/Basics Of Machine Learning.webp",
        "issuer": "Great Learning Academy",
        "year": "2024",
        "description": "Memahami alur dasar pembelajaran mesin, persiapan data, serta perbedaan antara pembelajaran terawasi dan tak terawasi."
      },
      {
        "title": "Data Visualization Using Python",
        "image": "/Sertifikat/Certificate Great Learning/Data Visualization Using Python.webp",
        "issuer": "Great Learning Academy",
        "year": "2024",
        "description": "Menyajikan data ke dalam berbagai bentuk grafik informatif menggunakan pustaka Python seperti Matplotlib dan Seaborn."
      },
      {
        "title": "Introduction to Supervised Learning",
        "image": "/Sertifikat/Certificate Great Learning/Introduction to Supervised Learning.webp",
        "issuer": "Great Learning Academy",
        "year": "2024",
        "description": "Mempelajari konsep regresi dan klasifikasi pada data berlabel untuk membangun model prediksi dasar."
      },
      {
        "title": "Machine Learning Algorithms",
        "image": "/Sertifikat/Certificate Great Learning/Machine Learning Algorithms.webp",
        "issuer": "Great Learning Academy",
        "year": "2024",
        "description": "Mendalami cara kerja algoritma pembelajaran mesin populer seperti regresi linier, pohon keputusan, dan pengelompokan data."
      },
      {
        "title": "Unsupervised Learning",
        "image": "/Sertifikat/Certificate Great Learning/Unsupervised Learning.webp",
        "issuer": "Great Learning Academy",
        "year": "2024",
        "description": "Mempelajari teknik pengelompokan data tanpa label (clustering) dan pengurangan dimensi untuk menemukan pola data."
      }
    ]
  },
  {
    "id": "dicoding-azure",
    "category": "Pelatihan AI & Cloud",
    "title": "Develop generative AI apps in Azure AI Foundry",
    "issuer": "Microsoft & Dicoding Indonesia",
    "cover": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Develop generative AI apps in Azure AI Foundry.webp",
    "itemsCount": 27,
    "items": [
      {
        "title": "Develop generative AI apps in Azure AI Foundry",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Develop generative AI apps in Azure AI Foundry.webp",
        "issuer": "Microsoft",
        "year": "April 2025",
        "description": "Mengembangkan dan menguji aplikasi kecerdasan buatan generatif menggunakan ekosistem pengembangan Azure AI Foundry."
      },
      {
        "title": "Create computer vision solutions with Azure AI Vision",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Create computer vision solutions with Azure AI Vision.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Mempelajari analisis citra digital, deteksi objek, dan ekstraksi fitur visual otomatis menggunakan layanan Azure AI Vision."
      },
      {
        "title": "Create vision models with Azure AI Custom Vision",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Create vision models with Azure AI Custom Vision .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Melatih dan mempublikasikan model klasifikasi gambar serta deteksi objek kustom menggunakan Azure AI Custom Vision."
      },
      {
        "title": "Deploy and consume models with Azure Machine Learning",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Deploy and consume models with Azure Machine Learning.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Melakukan deployment model machine learning ke endpoint daring dan mengintegrasikannya untuk inferensi aplikasi."
      },
      {
        "title": "Deploy cloud-native apps using Azure Container Apps",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Deploy cloud-native apps using Azure Container Apps.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Menjalankan dan mengelola aplikasi berbasis kontainer di lingkungan cloud menggunakan Azure Container Apps."
      },
      {
        "title": "Develop Generative AI solutions with Azure OpenAI Service",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Develop Generative AI solutions with Azure OpenAI Service .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Membangun solusi AI generatif menggunakan model bahasa pada layanan Azure OpenAI dan teknik penyusunan prompt."
      },
      {
        "title": "Develop generative AI apps with Azure OpenAI and Semantic Kernel",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Develop generative AI apps with Azure OpenAI and Semantic Kernel.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Mengintegrasikan model Azure OpenAI dengan SDK Semantic Kernel untuk membangun alur kerja aplikasi berbasis AI."
      },
      {
        "title": "Develop natural language processing solutions with Azure AI Services",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Develop natural language processing solutions with Azure AI Services .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Mengembangkan solusi pemrosesan bahasa alami (NLP) untuk analisis teks, terjemahan, dan pengenalan ucapan di Azure."
      },
      {
        "title": "Develop solutions with Azure AI Document Intelligence",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Develop solutions with Azure AI Document Intelligence.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Mengekstraksi teks dan data terstruktur dari dokumen atau formulir secara otomatis dengan Azure AI Document Intelligence."
      },
      {
        "title": "Experiment with Azure Machine Learning",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Experiment with Azure Machine Learning.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Menjalankan eksperimen pelatihan model dan mencatat metrik evaluasi menggunakan ruang kerja Azure Machine Learning."
      },
      {
        "title": "Explore and configure the Azure Machine Learning workspace",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Explore and configure the Azure Machine Learning workspace.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Mengonfigurasi sumber daya komputasi, aset data, dan lingkungan kerja pada Azure Machine Learning."
      },
      {
        "title": "Get started with Azure AI Services",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Get started with Azure AI Services.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Mempelajari penyediaan layanan, pengelolaan kunci autentikasi, dan integrasi REST API pada Azure AI Services."
      },
      {
        "title": "GitHub Copilot Fundamentals Part 2 of 2",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/GitHub Copilot Fundamentals Part 2 of 2.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Memanfaatkan GitHub Copilot untuk mendukung penulisan kode, penyusunan pengujian, dan peninjauan kode secara efisien."
      },
      {
        "title": "Implement knowledge mining with Azure AI Search",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Implement knowledge mining with Azure AI Search .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Membangun indeks pencarian dan pengayaan data berbasis AI untuk mengekstrak informasi dengan Azure AI Search."
      },
      {
        "title": "Implement security through a pipeline using Azure DevOps",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Implement security through a pipeline using Azure DevOps.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Mengonfigurasi pemeriksaan keamanan dan pemindaian kerentanan otomatis pada alur kerja CI/CD di Azure DevOps."
      },
      {
        "title": "Manage and review models in Azure Machine Learning",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Manage and review models in Azure Machine Learning.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Mendaftarkan, mengelola versi, dan mengevaluasi performa model yang dilatih di dalam Azure Machine Learning."
      },
      {
        "title": "Microsoft Azure AI Fundamentals- AI Overview",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure AI Fundamentals- AI Overview.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Memahami konsep dasar kecerdasan buatan, pembelajaran mesin, dan prinsip AI yang bertanggung jawab di Microsoft Azure."
      },
      {
        "title": "Microsoft Azure AI Fundamentals- Computer Vision",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure AI Fundamentals- Computer Vision.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Mempelajari konsep dasar pemrosesan citra, klasifikasi gambar, dan pengenalan teks optik (OCR) pada Azure."
      },
      {
        "title": "Microsoft Azure AI Fundamentals- Document Intelligence and Knowledge Mining",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure AI Fundamentals- Document Intelligence and Knowledge Mining .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Memahami dasar-dasar ekstraksi informasi dokumen dan pengindeksan pencarian cerdas menggunakan layanan Azure AI."
      },
      {
        "title": "Microsoft Azure AI Fundamentals- Generative AI",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure AI Fundamentals- Generative AI.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Memahami cara kerja model bahasa besar (LLM), kapabilitas AI generatif, dan penerapannya di Azure OpenAI."
      },
      {
        "title": "Microsoft Azure AI Fundamentals- Natural Language Processing",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure AI Fundamentals- Natural Language Processing.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Mempelajari dasar-dasar analisis teks, pengenalan entitas, analisis sentimen, dan layanan bahasa di Azure."
      },
      {
        "title": "Microsoft Azure Fundamentals- Describe Azure architecture and services",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure Fundamentals- Describe Azure architecture and services.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Memahami arsitektur inti Microsoft Azure, layanan komputasi, jaringan, serta penyimpanan cloud."
      },
      {
        "title": "Microsoft Azure Fundamentals- Describe Azure management and governance",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure Fundamentals- Describe Azure management and governance .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Mempelajari pengelolaan biaya, kebijakan tata kelola sumber daya, dan pemantauan infrastruktur di Microsoft Azure."
      },
      {
        "title": "Microsoft Azure Fundamentals- Describe cloud concepts",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Microsoft Azure Fundamentals- Describe cloud concepts.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Memahami konsep dasar komputasi awan, model penerapan cloud, serta perbedaan layanan IaaS, PaaS, dan SaaS."
      },
      {
        "title": "Optimize model training with Azure Machine Learning",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Optimize model training with Azure Machine Learning.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Melakukan penyetelan hyperparameter dan pemilihan model terbaik secara terukur pada Azure Machine Learning."
      },
      {
        "title": "Train and manage a machine learning model with Azure Machine Learning",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Train and manage a machine learning model with Azure Machine Learning.webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Melatih, mengevaluasi, dan mengelola siklus model pembelajaran mesin menggunakan Azure Machine Learning."
      },
      {
        "title": "Train models with scripts in Azure Machine Learning",
        "image": "/Sertifikat/Certificate elevAIte with Dicoding Program 2025/Train models with scripts in Azure Machine Learning .webp",
        "issuer": "Microsoft & Dicoding Indonesia",
        "year": "2025",
        "description": "Menjalankan skrip pelatihan model terotomasi menggunakan lingkungan komputasi pada Azure Machine Learning."
      }
    ]
  },
  {
    "id": "wadhwani",
    "category": "Kesiapan Kerja & Wirausaha",
    "title": "Employability Skills – JobReady",
    "issuer": "Wadhwani Foundation",
    "cover": "/Sertifikat/wadhwani/png/Program Certificate.webp",
    "itemsCount": 14,
    "items": [
      {
        "title": "Employability Skills – JobReady (Program Certificate)",
        "image": "/Sertifikat/wadhwani/png/Program Certificate.webp",
        "issuer": "Wadhwani Foundation",
        "year": "Juli 2026",
        "description": "Sertifikat kelulusan program Employability Skills – JobReady dari Wadhwani Foundation yang mencakup komunikasi, kolaborasi tim, dan pemecahan masalah."
      },
      {
        "title": "Customer Centricity",
        "image": "/Sertifikat/wadhwani/png/Customer Centricity.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2026",
        "description": "Memahami kebutuhan pengguna dan menerapkan pendekatan yang berorientasi pada pelayanan serta kepuasan pelanggan."
      },
      {
        "title": "Effective Speaking and Listening Skills",
        "image": "/Sertifikat/wadhwani/png/Effective Speaking and Listening Skills.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2026",
        "description": "Melatih kemampuan berbicara secara terstruktur dan mendengarkan aktif untuk mendukung komunikasi yang jelas di lingkungan kerja."
      },
      {
        "title": "Financial Literacy",
        "image": "/Sertifikat/wadhwani/png/Financial Literacy.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2026",
        "description": "Mempelajari dasar-dasar pengelolaan keuangan, perencanaan anggaran, dan pemahaman laporan keuangan dasar."
      },
      {
        "title": "Impactful Writing Skills",
        "image": "/Sertifikat/wadhwani/png/Impactful Writing Skills.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2026",
        "description": "Menyusun pesan tertulis, surel profesional, dan dokumen kerja yang ringkas, jelas, serta mudah dipahami."
      },
      {
        "title": "Interpersonal Skills",
        "image": "/Sertifikat/wadhwani/png/Interpersonal Skills.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2026",
        "description": "Membangun kerja sama tim yang sehat, empati, dan kemampuan beradaptasi dalam kolaborasi lintas fungsi."
      },
      {
        "title": "Introduction to Entrepreneurship",
        "image": "/Sertifikat/wadhwani/png/Introduction to Entrepreneurship.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2026",
        "description": "Mempelajari langkah awal mengidentifikasi peluang usaha, memvalidasi ide produk, dan menyusun model bisnis."
      },
      {
        "title": "Online Communication & Data Security",
        "image": "/Sertifikat/wadhwani/png/Online Communication & Data Security.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2026",
        "description": "Menerapkan etika komunikasi daring dan kesadaran keamanan data saat berkolaborasi menggunakan perangkat digital."
      },
      {
        "title": "Problem Solving & Innovation",
        "image": "/Sertifikat/wadhwani/png/Problem Solving & Innovation.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2026",
        "description": "Melatih pemikiran kritis untuk mengidentifikasi akar permasalahan dan merumuskan solusi yang terukur."
      },
      {
        "title": "Professionalism",
        "image": "/Sertifikat/wadhwani/png/Professionalism.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2026",
        "description": "Memahami etika kerja, tanggung jawab peran, dan konsistensi dalam menyelesaikan tugas profesional."
      },
      {
        "title": "Self-Management",
        "image": "/Sertifikat/wadhwani/png/Self-Management.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2026",
        "description": "Mengatur prioritas pekerjaan, pengelolaan waktu, dan kesiapan belajar mandiri dalam menghadapi target kerja."
      },
      {
        "title": "Self-Presentation",
        "image": "/Sertifikat/wadhwani/png/Self-Presentation.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2026",
        "description": "Menyampaikan profil diri, pengalaman, dan gagasan secara percaya diri dalam wawancara maupun presentasi profesional."
      },
      {
        "title": "Start-up Mindset",
        "image": "/Sertifikat/wadhwani/png/Start-up Mindset.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2026",
        "description": "Mengembangkan pola pikir yang tanggap terhadap perubahan, berorientasi solusi, dan berani mengambil inisiatif."
      },
      {
        "title": "Work Productivity Tools",
        "image": "/Sertifikat/wadhwani/png/Work Productivity Tools.webp",
        "issuer": "Wadhwani Foundation",
        "year": "2026",
        "description": "Menggunakan perangkat lunak perkantoran dan kolaborasi digital untuk menunjang efisiensi kerja sehari-hari."
      }
    ]
  },
  {
    "id": "org-leadership",
    "category": "Kepemimpinan & Organisasi",
    "title": "Kepemimpinan & Organisasi Mahasiswa",
    "issuer": "Universitas Sebelas April & Komunitas",
    "cover": "/Sertifikat/Organisasi/BEM UNSAP 2024-2025.webp",
    "itemsCount": 10,
    "items": [
      {
        "title": "Panitia Acara Dies Natalis UNSAP",
        "image": "/Sertifikat/Organisasi/ACARA DIESNATALIS UNSAP 2023.webp",
        "issuer": "BEM Universitas Sebelas April",
        "year": "2023 - 2025",
        "description": "Terlibat dalam koordinasi dan pelaksanaan rangkaian acara Dies Natalis Universitas Sebelas April."
      },
      {
        "title": "Panitia Acara PKKMB UNSAP 2023",
        "image": "/Sertifikat/Organisasi/ACARA PKKMB 2023.webp",
        "issuer": "Universitas Sebelas April",
        "year": "2023",
        "description": "Berperan dalam divisi acara untuk menyusun alur kegiatan Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB)."
      },
      {
        "title": "Staf Departemen Kemahasiswaan BEM UNSAP",
        "image": "/Sertifikat/Organisasi/BEM UNSAP 2023-2024.webp",
        "issuer": "Badan Eksekutif Mahasiswa UNSAP",
        "year": "2023 - 2024",
        "description": "Mendukung pelaksanaan program kerja kemahasiswaan dan kegiatan advokasi mahasiswa pada periode kepengurusan 2023/2024."
      },
      {
        "title": "Satuan Pengawas Internal BEM UNSAP",
        "image": "/Sertifikat/Organisasi/BEM UNSAP 2024-2025.webp",
        "issuer": "Badan Eksekutif Mahasiswa UNSAP",
        "year": "2024 - 2025",
        "description": "Melakukan pemantauan dan evaluasi pelaksanaan program kerja organisasi pada periode kepengurusan 2024/2025."
      },
      {
        "title": "Kegiatan Kolaborasi Dinas Perhubungan 2023",
        "image": "/Sertifikat/Organisasi/DISHUB 2023.webp",
        "issuer": "Dinas Perhubungan & Mahasiswa",
        "year": "2023",
        "description": "Berpartisipasi dalam kegiatan sosialisasi dan dukungan lapangan bersama Dinas Perhubungan Kabupaten Sumedang."
      },
      {
        "title": "Ketua Kelompok KKN UNSAP 2026",
        "image": "/Sertifikat/Organisasi/KETUA KKN UNSAP 2026.webp",
        "issuer": "Universitas Sebelas April",
        "year": "2026",
        "description": "Mengoordinasikan rekan mahasiswa dalam perencanaan dan pelaksanaan program Kuliah Kerja Nyata (KKN) di masyarakat."
      },
      {
        "title": "Latihan Dasar Kepemimpinan Mahasiswa (LDKM)",
        "image": "/Sertifikat/Organisasi/LDKM 2022.webp",
        "issuer": "Universitas Sebelas April",
        "year": "2022",
        "description": "Mengikuti pelatihan dasar kepemimpinan, manajemen organisasi, dan kerja sama tim bagi mahasiswa."
      },
      {
        "title": "Panitia Pemilihan Raya (PEMIRA) UNSAP 2023",
        "image": "/Sertifikat/Organisasi/PEMIRA UNSAP 2023.webp",
        "issuer": "Universitas Sebelas April",
        "year": "2023",
        "description": "Mendukung penyelenggaraan teknis Pemilihan Raya Mahasiswa Universitas Sebelas April tahun 2023."
      },
      {
        "title": "TAHUAWARD — Pengurus Inti TahuNgoding Terbaik",
        "image": "/Sertifikat/Organisasi/PENGURUS INTI TAHUNGODING TERBAIK 2024.webp",
        "issuer": "UKM TahuNgoding UNSAP",
        "year": "2023 - 2024",
        "description": "Menerima penghargaan TAHUAWARD sebagai Pengurus Inti TahuNgoding Terbaik atas kontribusi aktif selama periode kepengurusan."
      },
      {
        "title": "Ketua Divisi P2M UKM TahuNgoding",
        "image": "/Sertifikat/Organisasi/TAHUNGODING 2023-2024.webp",
        "issuer": "UKM TahuNgoding UNSAP",
        "year": "2023 - 2024",
        "description": "Mengoordinasikan kegiatan Divisi Pengabdian dan Pemberdayaan Masyarakat (P2M) di Unit Kegiatan Mahasiswa TahuNgoding."
      }
    ]
  },
  {
    "id": "org-speaker",
    "category": "Kepanitiaan & Pemateri",
    "title": "Koordinator Acara & Pemateri Pengabdian",
    "issuer": "Mitra Pendidikan & Panitia Pelaksana",
    "cover": "/Sertifikat/Organisasi/Pemateri SMK.webp",
    "itemsCount": 8,
    "items": [
      {
        "title": "Panitia Acara Workshop Personal Branding HIMA",
        "image": "/Sertifikat/Organisasi/ACARA WORKSHOP PERSONAL BRANDING HIMA.webp",
        "issuer": "Himpunan Mahasiswa & Kampus",
        "year": "2023 - 2024",
        "description": "Berperan dalam pengaturan teknis dan susunan acara kegiatan Workshop Personal Branding mahasiswa."
      },
      {
        "title": "Ketua Pelaksana Milangkala Desa Baginda ke-47",
        "image": "/Sertifikat/Organisasi/KETUA MILANGKALA DESA BAGINDA 2024.webp",
        "issuer": "Pemerintah Desa & Karang Taruna Desa Baginda",
        "year": "2024",
        "description": "Memimpin kepanitiaan dan mengoordinasikan pelaksanaan rangkaian acara Milangkala Desa Baginda ke-47 pada tahun 2024."
      },
      {
        "title": "Ketua Pelaksana PKM Bina Desa Baginda",
        "image": "/Sertifikat/Organisasi/KETUA PKM 2023.webp",
        "issuer": "BEM Universitas Sebelas April",
        "year": "2024",
        "description": "Memimpin pelaksanaan program Pengabdian Kepada Masyarakat (PKM) Bina Desa di Desa Baginda bersama rekan pengurus BEM."
      },
      {
        "title": "Ketua Pelaksana NgabuburIT Bertema Kecerdasan Buatan",
        "image": "/Sertifikat/Organisasi/KETUA SEMINAR AI 2023.webp",
        "issuer": "UKM TahuNgoding UNSAP",
        "year": "2023 - 2024",
        "description": "Memimpin kepanitiaan kegiatan NgabuburIT bertema kecerdasan buatan yang diselenggarakan oleh UKM TahuNgoding."
      },
      {
        "title": "Ketua Pelaksana Seminar Digital StartUp",
        "image": "/Sertifikat/Organisasi/KETUA SEMINAR STARTUP 2023.webp",
        "issuer": "UKM TahuNgoding & Research Alliance Ko+Lab Telkom University",
        "year": "2023 - 2024",
        "description": "Memimpin kepanitiaan Seminar Digital StartUp yang melibatkan kolaborasi dengan Research Alliance Ko+Lab Telkom University."
      },
      {
        "title": "Pemateri Literasi Digital tingkat Sekolah Dasar",
        "image": "/Sertifikat/Organisasi/Pemateri SD.webp",
        "issuer": "PKM BEM Universitas Sebelas April",
        "year": "2025",
        "description": "Menjadi pemateri sosialisasi literasi digital dan penggunaan media sosial secara bijak bagi siswa sekolah dasar dalam rangkaian pengabdian BEM."
      },
      {
        "title": "Pemateri AI & Rekayasa Perangkat Lunak di SMK",
        "image": "/Sertifikat/Organisasi/Pemateri SMK.webp",
        "issuer": "PKM BEM Universitas Sebelas April",
        "year": "Februari 2025",
        "description": "Menjadi pemateri dengan tema peran kecerdasan buatan (AI) dan rekayasa perangkat lunak dalam transformasi pendidikan pada pengabdian BEM di Desa Pangadegan."
      },
      {
        "title": "Pemateri Digitalisasi UMKM Desa Pangadegan",
        "image": "/Sertifikat/Organisasi/PemateriUMKM.webp",
        "issuer": "PKM BEM Universitas Sebelas April",
        "year": "2025",
        "description": "Menyampaikan materi pengenalan digitalisasi usaha bagi pelaku UMKM dalam rangkaian kegiatan pengabdian BEM di Desa Pangadegan."
      }
    ]
  }
];
