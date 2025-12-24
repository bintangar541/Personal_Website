import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import CertificateModal from '../components/CertificateModal';

const certificates = [
    {
        title: "Front-end Development with Vue.js",
        issuer: "WANTEKNOLOGI",
        date: "2023",
        description: "SSertifikat pencapaian dalam pelatihan pengembangan sisi depan (front-end) menggunakan framework JavaScript.",
        image: "/Bintang Ardhian Pratama (1).jpg", // Attempting to use path user had
        link: "#",
        skills: ["Vue.js, Front-end Development, JavaScript Framework."],
        pdfLink: "#"
    },
    {
        title: "Introduction to Data Science with Python",
        issuer: "DQLab (bersama Xeratic & UMN)",
        date: "2024",
        description: "Sertifikat penyelesaian kursus pengenalan dasar-dasar sains data.",
        image: "/certificate-DQLABINTP1DLTKVB_page-0001.jpg",
        link: "https://www.dicoding.com/",
        skills: ["Python, Data Science Basics, Data Analysis."],
        pdfLink: "#"
    },
    {
        title: "Sertifikat Kompetensi: Pemrogram Junior (Junior Coder)",
        issuer: "BNSP (Badan Nasional Sertifikasi Profesi) melalui LSP SMK Wikrama Bogor",
        date: "2025",
        description: "Sertifikat penyelesaian modul pembelajaran Python yang diintegrasikan dengan teknologi AI.",
        image: "/sertifikat.jpeg",
        link: "#",
        skills: ["Software Development, Coding Standards, Junior Programming."],
        pdfLink: "#"
    },
    {
        title: "Guide to Learn Python with AI at DQLab",
        issuer: "DQLab (bersama Xeratic & UMN)",
        date: "2025",
        description: "Sertifikat penyelesaian modul pembelajaran Python yang diintegrasikan dengan teknologi AI.",
        image: "/certificate-DQLABINTP1DLTKVB_page-0001.jpg", // Placeholder
        link: "#",
        skills: ["Python, Artificial Intelligence (AI) Literacy, Automation."],
        pdfLink: "#"
    },
    {
        title: "Sertifikat Apresiasi Praktik Kerja Lapangan (PKL)",
        issuer: "PT. Nigmagrid Indo Nesia",
        date: "2024",
        description: "Sertifikat penghargaan atas kontribusi dan dedikasi luar biasa selama menjalani program magang/PKL di perusahaan.",
        image: "/pkl.png", // Placeholder
        link: "#",
        skills: ["PHP", "Laravel", "ASP.NET", "C#", "Collaboration", "PgSQL", "SQL Server", "Web Development", "Professionalism, Work Ethics, Team Collaboration, Real-world Project Experience."],
        pdfLink: "#"
    },
    {
        title: "Backend Development with JavaScript Framework",
        issuer: "CyberLabs (PT. Laskar Teknologi Mulia)",
        date: "2023",
        description: "Sertifikat pelatihan intensif dalam membangun arsitektur sisi belakang (back-end) aplikasi.",
        image: "/Bintang Ardhian Pratama-TTD (2).png", // Placeholder
        link: "#",
        skills: ["Backend Development, Node.js/JavaScript Framework, Server-side logic."],
        pdfLink: "#"
    },
    {
        title: "Sertifikat Kompetensi Kelulusan",
        issuer: "Dicoding Indonesia",
        date: "2025",
        description: "Sertifikat yang diberikan atas kelulusan pada kelas dasar pemrograman menggunakan bahasa Java.",
        image: "/sertifikat_course_60_3135110_220425120252_page-0001.jpg", // Placeholder
        link: "#",
        skills: ["Pemrograman Java, Object-Oriented Programming (OOP) dasar, Logika Pemrograman."],
        pdfLink: "#"
    },
    {
        title: "Certificate of Participation",
        issuer: "Google Developer Group (GDG) on Campus Universitas Gunadarma 2025",
        date: "20225",
        description: "Sertifikat partisipasi dalam sesi informasi bertajuk Unite & Ignite: Powering Up the GDGoC UG Community",
        image: "/IFSN11222025PT136_page-0001.jpg", // Placeholder
        link: "#",
        skills: ["Networking, Komunitas Teknologi, Google Developer Technologies."],
        pdfLink: "#"
    }
];

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

    return (
        <section id="certificates" className="section-padding bg-gray-50/50 dark:bg-black/20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Sertifikasi</h2>
                <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full mb-4"></div>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                    Sertifikasi dan pengakuan kompetensi yang telah saya peroleh.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        layoutId={`card-${cert.title}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedCertificate(cert)}
                        className="group bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 hover:border-primary-500/50 hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 cursor-pointer flex flex-col h-full"
                    >
                        {/* Card Thumbnail */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/vite.svg'; // Fallback
                                }}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 font-medium">
                                    <Eye size={18} />
                                    Lihat Detail
                                </span>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold mb-2 line-clamp-2 leading-tight group-hover:text-primary-500 transition-colors">
                                {cert.title}
                            </h3>
                            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-medium truncate max-w-[60%]">{cert.issuer}</span>
                                <span>{cert.date}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <CertificateModal
                certificate={selectedCertificate}
                onClose={() => setSelectedCertificate(null)}
            />
        </section>
    );
};

export default Certificates;
