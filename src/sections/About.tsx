import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { language } = useLanguage();
    const isEnglish = language === 'en';
    return (
        <section id="about" className="section-padding">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
                        <img
                            src="/about.png"
                            alt="Coding Activity"
                            className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                        />

                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{isEnglish ? 'About Me' : 'Tentang Saya'}</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                        {isEnglish ? <>Junior Full-Stack Web Developer with hands-on experience building web applications through internship, academic, and project-based work. Skilled in developing backend functionality with Laravel and ASP.NET, and frontend interfaces with React and Vue.js.</> : <>Junior Full-Stack Web Developer dengan pengalaman langsung membangun aplikasi web melalui kegiatan magang, akademik, dan proyek. Terampil mengembangkan fungsionalitas backend menggunakan Laravel dan ASP.NET, serta antarmuka frontend menggunakan React dan Vue.js.</>}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                        {isEnglish ? <>Experienced in building CRUD functionality, REST APIs, database-driven applications, barcode-based check-in systems, search functionality, Excel data export, and third-party API integrations. Familiar with Git/GitHub and experienced in troubleshooting and improving existing web applications.</> : <>Berpengalaman membangun fungsionalitas CRUD, REST API, aplikasi berbasis database, sistem check-in berbasis barcode, fitur pencarian, ekspor data ke Excel, dan integrasi API pihak ketiga. Terbiasa menggunakan Git/GitHub serta berpengalaman melakukan troubleshooting dan meningkatkan aplikasi web yang sudah ada.</>}
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-2">{isEnglish ? 'Location' : 'Lokasi'}</h4>
                            <p className="text-gray-700 dark:text-gray-300">Indonesia</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-2">{isEnglish ? 'Status' : 'Status'}</h4>
                            <p className="text-gray-700 dark:text-gray-300">{isEnglish ? 'Available for Projects' : 'Tersedia untuk Proyek'}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
