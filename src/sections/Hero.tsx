import { motion } from 'framer-motion';
import { ChevronRight, FileDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-600/30 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />

            <div className="section-padding text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative inline-block"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-500/30 p-1 glass">
                        <img
                            src="/profile.png"
                            alt="Bintang Ardhian Pratama"
                            className="w-full h-full object-cover rounded-full object-top"
                        />
                    </div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-2 border-2 border-dashed border-primary-500/20 rounded-full pointer-events-none"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                >
                    Bintang Ardhian Pratama
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl text-primary-400 font-medium mb-6"
                >
                    Backend Developer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed"
                >
                    Backend Developer | <span className="text-gray-900 dark:text-white">Laravel</span>, <span className="text-gray-900 dark:text-white">ASP.NET</span> & <span className="text-gray-900 dark:text-white">RESTful API</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all flex items-center gap-2 group"
                    >
                        Hubungi Saya <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="/CV_Bintang Ardhian Pratama.pdf"
                        download="CV_Bintang Ardhian Pratama.pdf"
                        className="px-8 py-3 glass hover:bg-white/10 rounded-full font-semibold transition-all flex items-center gap-2"
                    >
                        Unduh CV <FileDown size={18} />
                    </a>
                </motion.div>
            </div>

            {/* Decorative elements */}

        </section>
    );
};

export default Hero;
