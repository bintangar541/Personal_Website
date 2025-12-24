import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface Certificate {
    title: string;
    issuer: string;
    date: string;
    description: string;
    image: string;
    link?: string;
    pdfLink?: string;
    skills: string[];
}

interface CertificateModalProps {
    certificate: Certificate | null;
    onClose: () => void;
}

const CertificateModal = ({ certificate, onClose }: CertificateModalProps) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (certificate) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [certificate]);

    return (
        <AnimatePresence>
            {certificate && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        layoutId={`card-${certificate.title}`}
                        className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors z-20 text-gray-800 dark:text-white"
                        >
                            <X size={20} />
                        </button>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-6 md:p-12">
                            <div className="relative w-full aspect-[4/3] shadow-lg rounded-lg overflow-hidden">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full h-full object-contain bg-white"
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
                            <div className="mb-6">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                                    {certificate.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-medium text-primary-600 dark:text-primary-400">
                                        {certificate.issuer}
                                    </span>
                                    <span>•</span>
                                    <span>{certificate.date}</span>
                                </div>
                            </div>

                            <div className="mb-6 prose prose-sm dark:prose-invert">
                                <h4 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-2">Deskripsi</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {certificate.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-3">Skills Verified</h4>
                                <div className="flex flex-wrap gap-2">
                                    {certificate.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-primary-50 dark:bg-primary-900/10 text-primary-600 dark:text-primary-400 text-xs font-semibold rounded-full border border-primary-100 dark:border-primary-500/20"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CertificateModal;
