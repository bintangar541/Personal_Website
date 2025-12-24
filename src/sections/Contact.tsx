import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');
        setErrorMessage('');

        // Using environment variables for security and configuration
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setStatus('error');
            setErrorMessage('Konfigurasi EmailJS belum lengkap. Hubungi developer.');
            setIsLoading(false);
            return;
        }

        if (!formRef.current) return;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setIsLoading(false);
                if (formRef.current) formRef.current.reset();
            }, (error) => {
                console.error("EmailJS Error:", error);
                setStatus('error');
                // Show more detailed error if available to help debugging
                setErrorMessage(`Gagal: ${error.text || error.message || 'Periksa koneksi atau API Key Anda.'}`);
                setIsLoading(false);
            });
    };

    return (
        <section id="contact" className="section-padding">
            <div className="glass-card max-w-5xl mx-auto overflow-hidden">
                <div className="grid md:grid-cols-5">
                    {/* Info Side */}
                    <div className="md:col-span-2 bg-primary-600 p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Ayo Berkolaborasi</h2>
                            <p className="text-primary-100 mb-10">
                                Tertarik untuk bekerja sama? Hubungi saya melalui saluran di bawah ini atau kirimkan pesan langsung.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-primary-200">Telepon / WA</p>
                                        <p className="font-semibold">+62 838-7714-4599</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-primary-200">Email</p>
                                        <p className="font-semibold">ardhianbintang30@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl">
                                        <Linkedin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-primary-200">LinkedIn</p>
                                        <p className="font-semibold">bintang-ardhian-pratama</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decoration */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    </div>

                    {/* Form Side */}
                    <div className="md:col-span-3 p-8 md:p-12">
                        <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full glass bg-white/5 border-white/10 rounded-xl px-4 py-3 focus:border-primary-500 outline-none transition-all"
                                        placeholder=""
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="w-full glass bg-white/5 border-white/10 rounded-xl px-4 py-3 focus:border-primary-500 outline-none transition-all"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Subjek</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className="w-full glass bg-white/5 border-white/10 rounded-xl px-4 py-3 focus:border-primary-500 outline-none transition-all"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Pesan</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full glass bg-white/5 border-white/10 rounded-xl px-4 py-3 focus:border-primary-500 outline-none transition-all resize-none"
                                    placeholder=""
                                />
                            </div>

                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-500 text-sm font-medium"
                                >
                                    <CheckCircle size={18} />
                                    Pesan berhasil dikirim! Saya akan segera membalasnya.
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-500 text-sm font-medium"
                                >
                                    <AlertCircle size={18} />
                                    {errorMessage}
                                </motion.div>
                            )}

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                disabled={isLoading}
                                className={`w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-500/20 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" /> Mengirim...
                                    </>
                                ) : (
                                    <>
                                        Kirim Pesan <Send size={18} />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
