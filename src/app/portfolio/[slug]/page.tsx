"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { portfolioData } from "../../../data/portfolioData";

export default function ProjectDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const project = portfolioData.find((p) => p.slug === slug);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/portfolio" className="text-primaryOne hover:underline">
                        Back to Portfolio
                    </Link>
                </div>
            </div>
        );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle form submission (e.g., send via email)
        console.log("Requesting similar project:", project.name, formData);
        alert("Request sent! We will get back to you shortly.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white overflow-hidden pb-20">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primaryOne/10 rounded-full blur-[150px] opacity-40" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-primaryThree/10 rounded-full blur-[180px] opacity-30" />
            </div>

            <div className="relative z-10 pt-32 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <Link href="/portfolio" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                    <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Portfolio
                </Link>

                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="inline-block px-3 py-1 bg-primaryOne/20 text-primaryOne border border-primaryOne/20 rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
                                {project.projectType || project.category}
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-mina font-bold leading-tight mb-4">
                                {project.name}
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl font-light">
                                {project.description}
                            </p>
                        </div>

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shrink-0"
                            >
                                Visit Live Site
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        )}
                    </div>
                </div>

                {/* Main Image */}
                <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl mb-16 group">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    {/* Left Column: Stats */}
                    <div className="space-y-8 lg:border-r lg:border-white/10 pr-8">
                        {project.client && (
                            <div>
                                <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-2">Client</h3>
                                <p className="text-xl font-semibold">{project.client}</p>
                            </div>
                        )}
                        {project.timeline && (
                            <div>
                                <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-2">Timeline</h3>
                                <p className="text-xl font-semibold">{project.timeline}</p>
                            </div>
                        )}
                        {project.technologies && (
                            <div>
                                <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-3">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Middle/Right Column: Content */}
                    <div className="lg:col-span-2 space-y-10">
                        <div>
                            <h3 className="text-2xl font-mina font-bold mb-4 text-white">Overview</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {project.description}
                            </p>
                        </div>

                        {project.challenges && (
                            <div>
                                <h3 className="text-2xl font-mina font-bold mb-4 text-white">The Challenge</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {project.challenges}
                                </p>
                            </div>
                        )}

                        {/* Gallery */}
                        {project.images && project.images.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-mina font-bold mb-6 text-white">Gallery</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.images.map((img, idx) => (
                                        <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-primaryOne/50 transition-colors">
                                            <Image src={img} alt={`${project.name} gallery ${idx}`} fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Request Similar Project Form */}
                <div className="bg-[#111] rounded-[2.5rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primaryOne/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto text-center mb-12">
                        <h2 className="text-3xl lg:text-5xl font-mina font-bold mb-6">Inspired by this project?</h2>
                        <p className="text-gray-400 text-lg">
                            Tell us about your idea and we'll help you build something similar.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="relative z-10 max-w-xl mx-auto space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-primaryOne transition-colors text-white"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-primaryOne transition-colors text-white"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-primaryOne transition-colors text-white resize-none"
                                placeholder={`I'd like to build something specifically like ${project.name}...`}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-5 bg-primaryOne text-white font-bold rounded-xl hover:bg-primaryOne/90 transition-all shadow-lg shadow-primaryOne/20 text-lg"
                        >
                            Request Similar Project
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
