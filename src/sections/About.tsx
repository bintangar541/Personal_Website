import { motion } from 'framer-motion';

const About = () => {
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
                    <div className="absolute -bottom-6 -right-6 glass-card p-4 hidden sm:block">
                        <span className="text-3xl font-bold text-primary-500">2+</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Tahun Pengalaman</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Tentang Saya</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                        Saya adalah <span className="text-gray-900 dark:text-white font-medium">Backend Developer</span> yang berfokus membangun sistem web yang <span className="text-gray-900 dark:text-white">aman, efisien, dan scalable</span>.
                        Keahlian utama saya meliputi perancangan <span className="text-gray-900 dark:text-white">Arsitektur Database</span> (SQL Server, PostgreSQL), pengembangan <span className="text-gray-900 dark:text-white">RESTful API</span> yang kompleks, serta integrasi mulus dengan frontend modern.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                        Saya juga berpengalaman mengimplementasikan fitur teknis seperti <span className="text-gray-900 dark:text-white">sistem check-in berbasis barcode</span>, serta selalu berkomitmen untuk menulis kode yang rapi, efisien, dan mudah dipahami.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-2">Lokasi</h4>
                            <p className="text-gray-700 dark:text-gray-300">Indonesia</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-2">Status</h4>
                            <p className="text-gray-700 dark:text-gray-300">Tersedia untuk Proyek</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
