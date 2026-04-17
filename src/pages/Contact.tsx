import { motion } from "framer-motion";
import { Mail, MapPin, Twitter, Github, Linkedin, Send, Sparkles, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Header />

      {/* Unified Page Hero */}
      <section className="relative pt-24 pb-12 px-2 sm:px-4 bg-background overflow-hidden">
        <div className="container-main relative z-10">
          <div className="relative w-full rounded-[2.5rem] md:rounded-[3.5rem] border-[3px] border-black bg-white overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col items-center text-center">
            
            {/* Background Illustration / Elements */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border-2 border-black text-black text-[10px] font-black uppercase tracking-widest mb-6"
            >
              <Sparkles size={14} className="text-black" />
              Support & Inquiries
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative z-10 text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6"
            >
              Get in <span className="text-accent">Touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body font-medium"
            >
              Have questions about AurexonAI? Our team is here to help you navigate 
              the future of AI-powered commerce.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="pb-24 px-4 bg-background relative overflow-hidden">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-white border-2 border-black rounded-[3rem] p-8 md:p-14 shadow-[12px_12px_0px_#759563]"
            >
              <h3 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-8 tracking-tighter">
                Send us a <span className="text-accent">message.</span>
              </h3>
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-heading font-bold text-foreground/70 uppercase tracking-widest ml-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-black bg-white text-base font-bold font-heading focus:outline-none focus:bg-accent/5 transition-all placeholder:text-muted-foreground/30"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-heading font-bold text-foreground/70 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="jane@aurexon.ai"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-black bg-white text-base font-bold font-heading focus:outline-none focus:bg-accent/5 transition-all placeholder:text-muted-foreground/30"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-heading font-bold text-foreground/70 uppercase tracking-widest ml-1">Subject</label>
                  <input
                    type="text"
                    placeholder="General Inquiry"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-black bg-white text-base font-bold font-heading focus:outline-none focus:bg-accent/5 transition-all placeholder:text-muted-foreground/30"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-heading font-bold text-foreground/70 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-6 py-4 rounded-2xl border-2 border-black bg-white text-base font-bold font-heading focus:outline-none focus:bg-accent/5 transition-all resize-none placeholder:text-muted-foreground/30"
                  />
                </div>

                <button className="w-full group bg-black text-white p-6 rounded-2xl flex items-center justify-center gap-3 font-heading font-black text-lg hover:bg-accent hover:text-black transition-all duration-500 shadow-[6px_6px_0px_#759563] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  Send Your Message
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {[
                  { icon: Mail, title: "Email", detail: "hello@aurexonai.com", sub: "Replies within 24 hours" },
                  { icon: Phone, title: "Phone", detail: "+1 (415) 555-0123", sub: "Mon–Fri, 9am–6pm PST" },
                  { icon: MapPin, title: "Office", detail: "San Francisco, CA", sub: "123 AI Boulevard, Suite 400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-3xl border-2 border-black bg-white">
                    <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shrink-0 border-2 border-black">
                      <item.icon size={24} className="text-black" />
                    </div>
                    <div>
                      <p className="text-xs font-heading font-black text-muted-foreground uppercase tracking-widest mb-1">{item.title}</p>
                      <p className="text-lg font-heading font-black text-foreground">{item.detail}</p>
                      <p className="text-[10px] font-heading font-bold text-muted-foreground opacity-60">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Map Section */}
              <div className="relative group">
                <div className="absolute inset-0 bg-accent rounded-[2.5rem] translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                <div className="w-full h-[300px] rounded-[2.5rem] border-2 border-black overflow-hidden bg-white relative z-10">
                  <iframe 
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.2730611417!2d-122.5076401!3d37.757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1713070000000!5m2!1sen!2sus"
                    className="w-full h-full grayscale-[0.8] contrast-[1.2] hover:grayscale-0 transition-all duration-700 border-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Contact;
;


