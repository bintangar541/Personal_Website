import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const education = [
    {
        school: "Universitas Gunadarma",
        major: "Informatika – Fakultas Teknologi Industri",
        period: "September 2025 – Sekarang",
        majorEn: "Informatics – Faculty of Industrial Technology",
        periodEn: "September 2025 – Present",
        icon: <GraduationCap className="text-primary-500" />
    },
    {
        school: "SMK Wikrama Bogor",
        major: "Pengembangan Perangkat Lunak dan Game (PPLG)",
        period: "Juni 2022 – Mei 2025",
        majorEn: "Software and Game Development",
        periodEn: "June 2022 – May 2025",
        icon: <GraduationCap className="text-purple-500" />
    }
];

const Education = () => {
    const { language } = useLanguage();
    const isEnglish = language === 'en';
    return (
        <section id="education" className="section-padding">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{isEnglish ? 'Education' : 'Pendidikan'}</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="glass-card flex items-start gap-6 border-l-4 border-l-primary-500"
                    >
                        <div className="p-3 rounded-2xl glass shrink-0">
                            {edu.icon}
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-primary-400">{isEnglish ? edu.periodEn : edu.period}</span>
                            <h3 className="text-xl font-bold mt-1 mb-1">{edu.school}</h3>
                            <p className="text-gray-400">{isEnglish ? edu.majorEn : edu.major}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
