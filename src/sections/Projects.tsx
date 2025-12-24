import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Web Quiz Pembelajaran",
        description: "Aplikasi web quiz berbasis React.js yang digunakan untuk latihan dan persiapan UTS di kampus, dilengkapi dengan sistem soal interaktif dan penilaian otomatis.",
        tech: ["React.js", "JavaScript", "CSS"],
        link: "https://web-quiz-two.vercel.app/",
        github: "https://github.com/bintangar541/web_quiz.git",
        image: "/SiTampan.jpeg"
    },
    {
        title: "Kasir App",
        description: "Kasir App adalah sistem kasir berbasis Laravel untuk mengelola transaksi penjualan, produk, pengguna, dan laporan. Sistem ini memiliki dua peran: Admin dengan akses penuh ke manajemen data dan laporan, serta Employee dengan akses terbatas untuk melihat produk dan melakukan transaksi.",
        tech: ["Laravel", "PHP", "PostgreSQL"],
        link: "#",
        github: "https://github.com/bintangar541/kasir_app.git",
        image: "/kasir.jpeg"
    },
    {
        title: "BintangKu - Modern Game Top-Up Platform",
        description: "BintangKu adalah platform top-up game digital yang dirancang untuk portofolio teknis, mendemonstrasikan integrasi antara Backend Laravel dan Frontend React dengan arsitektur yang terpisah (Decoupled)..",
        tech: ["Laravel", "React 19 + Vite", "Tailwind CSS 4", "PostgreSQL"],
        link: "#",
        github: "https://github.com/bintangar541/BintangKu.git",
        image: "/529996772-206fe3c3-eacd-4f69-b03b-c2aed3247471.png"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Proyek Unggulan</h2>
            <p className="text-gray-400 text-center mb-12">Beberapa proyek yang pernah saya kerjakan baru-baru ini.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card group flex flex-col h-full"
                    >
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href={project.link} className="p-3 bg-white text-primary-600 rounded-full hover:scale-110 transition-transform">
                                    <ExternalLink size={20} />
                                </a>
                                <a href={project.github} className="p-3 bg-white text-primary-600 rounded-full hover:scale-110 transition-transform">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-semibold rounded-full border border-primary-500/20">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
