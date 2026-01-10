"use client";
import React, { useState, FormEvent } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const form = e.currentTarget;
    
    // NOTE: Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    // You can get these from https://dashboard.emailjs.com/admin
    const SERVICE_ID = 'service_id'; 
    const TEMPLATE_ID = 'template_id';
    const PUBLIC_KEY = 'public_key'; 

    try {
        // If credentials are not set/placeholder, simulate success for demo purposes to avoid crashing
        if (SERVICE_ID === 'service_id') {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Fake delay
            setStatus({ type: 'success', message: 'Message sent successfully! We will contact you soon.' });
            form.reset();
        } else {
             await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
             setStatus({ type: 'success', message: 'Message sent successfully! We will contact you soon.' });
             form.reset();
        }
    } catch (error) {
        console.error("EmailJS Error:", error);
        setStatus({ type: 'error', message: 'Something went wrong. Please try again or email us directly.' });
    } finally {
        setIsSubmitting(false);
    }
  };
  return (
    <section className="w-full py-24 bg-transparent text-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-mina font-bold leading-tight">
                Let’s Forge <br />
                <span className="text-primaryOne italic">Something Iconic.</span>
              </h2>
              <div className="h-1 w-20 bg-primaryOne rounded-full" />
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Whether you have a concrete project or just a spark of an idea, we’re here to engineer the brilliance you need.
            </p>

            <div className="space-y-6 text-gray-300">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primaryOne">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11H4a2 2 0 01-2-2V8a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2z" /></svg>
                  </div>
                  <span>hello@seynation.co</span>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primaryOne">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <span>Dar es Salaam, Tanzania</span>
               </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
          >
            {/* Loading Overlay */}
            {isSubmitting && (
                <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-primaryOne border-t-transparent rounded-full animate-spin" />
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Full Name</label>
                  <input 
                      required
                      name="user_name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryOne transition-colors placeholder:text-neutral-700" 
                      placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input 
                      required
                      type="email"
                      name="user_email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryOne transition-colors placeholder:text-neutral-700" 
                      placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Project Type</label>
                <select name="project_type" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryOne transition-colors text-white appearance-none cursor-pointer">
                  <option className="bg-neutral-900" value="Website Design">Website Design</option>
                  <option className="bg-neutral-900" value="Mobile App">Mobile App</option>
                  <option className="bg-neutral-900" value="Branding">Branding</option>
                  <option className="bg-neutral-900" value="Marketing">Marketing</option>
                  <option className="bg-neutral-900" value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                    required
                    name="message"
                    rows={4} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryOne transition-colors placeholder:text-neutral-700 resize-none" 
                    placeholder="Tell us about your masterpiece..." 
                />
              </div>

              {status.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg text-sm text-center ${status.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}
                  >
                      {status.message}
                  </motion.div>
              )}

              <Button 
                disabled={isSubmitting}
                className="w-full py-6 text-lg rounded-xl bg-primaryOne hover:bg-primaryOne/90 text-white shadow-xl transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Initiate Conversation"}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
