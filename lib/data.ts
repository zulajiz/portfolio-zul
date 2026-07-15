export const site = {
  name: "Muhamad Zul Ajiz",
  title: "Electrical Technician",
  email: "muhamadzulajiz@gmail.com",
  location: "Bogor, Indonesia",
  whatsapp: "081717759352",
  whatsappIntl: "6281717759352",
  instagram: "https://www.instagram.com/zulproject_",
  tiktok: "https://tiktok.com/@zzlvvvv",
  // Web3Forms access key (gratis) untuk menerima pesan form ke email.
  // Buat di https://web3forms.com lalu tempel key-nya di sini.
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  shortBio:
    "Electrical Technician yang berfokus pada instalasi, inspeksi, troubleshooting, dan pemeliharaan sistem kelistrikan untuk menjaga keandalan, keselamatan, dan efisiensi operasional.",
  longBio:
    "Saya Zul Ajiz, seorang Electrical Technician yang berfokus pada instalasi, inspeksi, troubleshooting, dan pemeliharaan sistem kelistrikan guna menjaga keandalan, keselamatan, dan efisiensi operasional. Memiliki semangat untuk terus belajar, bekerja secara teliti, dan beradaptasi dengan teknologi baru guna memberikan solusi yang efektif terhadap berbagai permasalahan kelistrikan.",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  "Instalasi Listrik",
  "Troubleshooting",
  "Preventive Maintenance",
  "Membaca Wiring Diagram",
  "Panel Listrik",
  "Instalasi Panel",
  "Penggunaan Multimeter",
  "K3 Kelistrikan",
];

export const experiences = [
  {
    role: "Electrical Technician Intern",
    company: "Favehotel Padjajaran Bogor",
    period: "Januari 2026 – Juni 2026",
    location: "Bogor, Indonesia",
    points: [
      "Mempelajari dan membantu instalasi listrik rumah sederhana sesuai standar keselamatan kerja.",
      "Mempelajari dasar pengoperasian dan pemeriksaan sistem motor listrik 3 fasa.",
      "Melaksanakan checklist harian pada instalasi dan peralatan listrik untuk memastikan kondisi operasional tetap aman.",
      "Membantu teknisi dalam kegiatan pemeliharaan dan pemeriksaan sistem kelistrikan di area operasional hotel.",
    ],
    tools: ["Multimeter", "Panel Listrik", "Motor 3 Fasa", "K3 Kelistrikan"],
  },
];

export const projects = [
  {
    title: "Mini Tesla Coil dengan Lampu Filamen 3V",
    description:
      "Merancang dan merakit mini Tesla coil yang mampu menyalakan lampu filamen 3V secara nirkabel melalui induksi elektromagnetik. Proyek ini menjadi media pembelajaran untuk memahami prinsip kerja tegangan tinggi, induksi elektromagnetik, serta perakitan rangkaian elektronika dasar.",
    tech: ["Tesla Coil", "Lampu Filamen 3V", "High Voltage Circuit", "Induksi Elektromagnetik", "Elektronika Dasar", "Soldering & Perakitan PCB"],
    image: "/pro2.jpg",
  },
  {
    title: "Mobil Remote Control Arduino",
    description:
      "Membangun mobil remote control menggunakan Arduino sebagai pengendali utama dengan driver motor DC. Sistem dirancang untuk mengontrol pergerakan maju, mundur, belok kiri, dan kanan menggunakan joystick/controller.",
    tech: ["Arduino Uno", "Motor Driver", "Motor DC", "Embedded System", "C/C++"],
    image: "/pro3.jpg",
  },
  {
    title: "Mini Server Samsung S8",
    description:
      "Mengubah Samsung Galaxy S8 menjadi mini server yang dilengkapi sistem pendingin aktif, monitoring tegangan, dan casing kustom.",
    tech: ["Samsung Galaxy S8", "Linux/Termux", "Web Server", "Monitoring Tegangan", "Pendingin Aktif"],
    image: "/pro1.jpg",
  },
];

export const certificates = [
  { image: "/sert1.jpg", title: "Certificate 01" },
  { image: "/sert2.jpg", title: "Certificate 02" },
  { image: "/sert3.jpg", title: "Certificate 03" },
  { image: "/sert4.jpg", title: "Certificate 04" },
  { image: "/sert5.jpg", title: "Certificate 05" },
  { image: "/sert6.jpg", title: "Certificate 06" },
];
