import { motion } from 'framer-motion';
import {
    Code2, Users,
    Lightbulb, ShieldCheck
} from 'lucide-react';
import {
    SiLaravel, SiDotnet, SiReact, SiPhp,
    SiJavascript, SiSharp, SiPython, SiFigma,
    SiPostman, SiPostgresql, SiMysql
} from 'react-icons/si';
import { DiMsqlServer } from "react-icons/di";

const skills = {
    hard: [
        { name: "Laravel", icon: <SiLaravel size={26} />, color: "group-hover:text-[#FF2D20]" },
        { name: "ASP.NET", icon: <SiDotnet size={26} />, color: "group-hover:text-[#512BD4]" },
        { name: "React", icon: <SiReact size={26} />, color: "group-hover:text-[#61DAFB]" },
        { name: "PHP", icon: <SiPhp size={26} />, color: "group-hover:text-[#777BB4]" },
        { name: "JavaScript", icon: <SiJavascript size={26} />, color: "group-hover:text-[#F7DF1E]" },
        { name: "C#", icon: <SiSharp size={26} />, color: "group-hover:text-[#239120]" },
        { name: "Python", icon: <SiPython size={26} />, color: "group-hover:text-[#3776AB]" },
        { name: "Figma", icon: <SiFigma size={26} />, color: "group-hover:text-[#F24E1E]" },
        { name: "Integrasi API", icon: <SiPostman size={26} />, color: "group-hover:text-[#FF6C37]" },
        { name: "PostgreSQL", icon: <SiPostgresql size={26} />, color: "group-hover:text-[#336791]" },
        { name: "MySQL", icon: <SiMysql size={26} />, color: "group-hover:text-[#4479A1]" },
        { name: "SQL Server", icon: <DiMsqlServer size={26} />, color: "group-hover:text-[#CC2927]" },
    ],
    soft: [
        { name: "Kolaborasi Tim", icon: <Users size={20} /> },
        { name: "Kepemimpinan", icon: <ShieldCheck size={20} /> },
        { name: "Berpikir Kreatif", icon: <Lightbulb size={20} /> },
        { name: "Pemecahan Masalah", icon: <Code2 size={20} /> },
    ]
};

const Skills = () => {
    return (
        <section id="skills" className="section-padding">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">Keahlian</h2>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Hard Skills */}
                <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <Code2 className="text-primary-500" /> Technology Stack
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {skills.hard.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="glass-card p-5 flex flex-col items-center justify-center gap-4 hover:border-primary-500/50 transition-all group group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className={`p-4 rounded-2xl bg-primary-500/10 text-primary-500 group-hover:scale-110 transition-all duration-300 ${skill.color}`}>
                                    {skill.icon}
                                </div>
                                <span className={`font-semibold text-center transition-colors ${skill.color}`}>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <Users className="text-purple-500" /> Soft Skills
                    </h3>
                    <div className="space-y-4">
                        {skills.soft.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card flex items-center gap-4 hover:border-purple-500/30 transition-all group"
                            >
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover:rotate-12 transition-transform">
                                    {skill.icon}
                                </div>
                                <span className="font-medium">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
