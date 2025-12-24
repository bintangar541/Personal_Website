import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Fullstack Developer – Project Work",
        company: "MOI Beauty Clinic",
        period: "Jan 2025 – Apr 2025",
        description: [
            "Mengembangkan aplikasi kasir dengan manajemen transaksi yang efisien",
            "Membangun aplikasi Moi Beauty Clinic untuk penjadwalan janji temu dan manajemen pelanggan"
        ]
    },
    {
        role: "Backend Developer",
        company: "PT. Nigmagrid Indonesia (Magang)",
        period: "Jul 2024 – Des 2024",
        description: [
            "Mengembangkan fitur dashboard kamera (CRUD & pencarian data)",
            "Membangun sistem check-in berbasis website dengan barcode",
            "Berkontribusi dalam pengembangan WikaGPT",
            "Mengembangkan fitur Knowledge Management: CRUD, Export Excel, Autocomplete, On-change interaction"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Pengalaman Kerja</h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-purple-500/50 to-transparent" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Dot */}
                            <div className="absolute left-0 md:left-1/2 -translate-x-[9px] md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary-600 border-4 border-dark-bg z-10" />

                            <div className="md:w-1/2 pl-8 md:pl-0">
                                <div className={`glass-card ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                    <div className="flex items-center gap-2 text-primary-400 mb-2">
                                        <Briefcase size={16} />
                                        <span className="text-sm font-semibold">{exp.period}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                    <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-400 text-sm flex gap-2">
                                                <span className="text-primary-500">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
