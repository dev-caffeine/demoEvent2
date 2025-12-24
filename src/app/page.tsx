"use client";
import  { useState, useEffect } from 'react';
import { 
  Phone, MessageCircle,  Heart, 
  Music, Briefcase, Star,  Menu, X, 
  MapPin, Mail, Globe, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Language Content ---
const translations = {
  mr: {
    nav: { home: 'मुख्यपृष्ठ', about: 'आमच्याबद्दल', services: 'सेवा', gallery: 'गॅलरी', contact: 'संपर्क' },
    hero: { title: 'तुमचा कार्यक्रम, आमची जबाबदारी', sub: 'लग्न • कॉर्पोरेट • वाढदिवस • सांस्कृतिक सोहळे', cta1: 'आजच संपर्क करा', cta2: 'आमच्या सेवा' },
    gallery: {
      title: 'आमचे यशस्वी सोहळे',
      all: 'सर्व',
      wedding: 'लग्न',
      corporate: 'प्री-वेडिंग',
      birthday: 'वाढदिवस',
      cultural: 'सांस्कृतिक'
    },
    services: {
      title: 'आमच्या प्रीमियम सेवा',
      s1: { t: 'विवाह सोहळा', d: 'शाही थाटात लग्नाचे संपूर्ण नियोजन.' },
      s2: { t: 'कॉर्पोरेट इव्हेंट्स', d: 'व्यावसायिक सेमिनार आणि ऑफिस पार्ट्या.' },
      s3: { t: 'वाढदिवस सेलिब्रेशन', d: 'आकर्षक थीम आणि डेकोरेशनसह वाढदिवस.' },
      s4: { t: 'सांस्कृतिक रजनी', d: 'महोत्सव आणि संगीतमय कार्यक्रमांचे आयोजन.' }
    },
    contact: { title: 'चौकशी करा', name: 'पूर्ण नाव', phone: 'मोबाईल नंबर', type: 'कार्यक्रमाचा प्रकार', msg: 'तुमचा संदेश', submit: 'चौकशी पाठवा' }
  },
  en: {
    nav: { home: 'Home', about: 'About Us', services: 'Services', gallery: 'Gallery', contact: 'Contact' },
    hero: { title: 'Your Event, Our Responsibility', sub: 'Weddings • Corporate • Birthdays • Cultural Events', cta1: 'Contact Us', cta2: 'Our Services' },
    gallery: {
      title: 'Our Successful Events',
      all: 'All',
      wedding: 'Wedding',
      corporate: 'Pre-Wedding',
      birthday: 'Birthday',
      cultural: 'Cultural'
    },
    services: {
      title: 'Our Premium Services',
      s1: { t: 'Wedding Planning', d: 'Complete royal wedding management.' },
      s2: { t: 'Corporate Events', d: 'Professional seminars and office parties.' },
      s3: { t: 'Birthday Parties', d: 'Birthdays with creative themes & decor.' },
      s4: { t: 'Cultural Shows', d: 'Festivals and musical night organization.' }
    },
    contact: { title: 'Enquire Now', name: 'Full Name', phone: 'Mobile Number', type: 'Event Type', msg: 'Your Message', submit: 'Send Inquiry' }
  }
};

// --- Gallery Data ---
const galleryItems = [
  { id: 1, category: 'wedding', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800', title: 'Royal Wedding Pune' },
  { id: 2, category: 'corporate', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800', title: 'Tech Summit 2024' },
  { id: 3, category: 'birthday', img: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=800', title: 'Dreamy 1st Birthday' },
  { id: 4, category: 'cultural', img: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?q=80&w=800', title: 'Musical Night' },
  { id: 5, category: 'wedding', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800', title: 'Traditional Vivah' },
  { id: 6, category: 'corporate', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800', title: 'Award Ceremony' },
];

export default function App() {
  const [lang, setLang] = useState<'mr' | 'en'>('mr');
  const [filter, setFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredGallery = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className={`min-h-screen bg-[#0a0a0a] text-white selection:bg-orange-500/30 ${lang === 'mr' ? 'font-["Hind"]' : 'font-sans'}`}>
      
      {/* --- Navbar --- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <span className="bg-orange-600 p-1 rounded">Bhavya</span>
            <span className="text-white">Events</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, value]) => (
              <a key={key} href={`#${key}`} className="text-sm font-medium hover:text-orange-500 transition-colors uppercase tracking-widest">{value}</a>
            ))}
            <button onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all">
              <Globe size={16} className="text-orange-500" />
              <span className="text-xs font-bold">{lang === 'mr' ? 'English' : 'मराठी'}</span>
            </button>
          </div>

          <button className="lg:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000" className="w-full h-full object-cover" alt="Hero" />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 mt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-orange-600/20 border border-orange-600 text-orange-500 font-bold text-xs uppercase tracking-widest mb-6">Premium Events</span>
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl">{t.hero.sub}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-orange-600 hover:bg-orange-700 px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center gap-2">
                {t.hero.cta1} <ArrowRight size={20} />
              </a>
              <a href="#services" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-10 py-5 rounded-full font-bold text-lg transition-all">
                {t.hero.cta2}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 bg-[#0d0d0d]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">{t.services.title}</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { ...t.services.s1, icon: <Heart size={32} /> },
              { ...t.services.s2, icon: <Briefcase size={32} /> },
              { ...t.services.s3, icon: <Star size={32} /> },
              { ...t.services.s4, icon: <Music size={32} /> }
            ].map((s, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-orange-500/50 transition-all">
                <div className="text-orange-500 mb-6">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{s.t}</h3>
                <p className="text-gray-400">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-8">{t.gallery.title}</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['all', 'wedding', 'corporate', 'birthday', 'cultural'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full border transition-all text-sm font-bold uppercase tracking-widest ${filter === cat ? 'bg-orange-600 border-orange-600 text-white' : 'border-white/20 text-gray-400 hover:border-white'}`}
                >
                  {t.gallery[cat as keyof typeof t.gallery]}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode='popLayout'>
              {filteredGallery.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={item.id}
                  className="relative group h-80 rounded-3xl overflow-hidden cursor-pointer"
                >
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <p className="text-orange-500 font-bold uppercase text-xs tracking-widest mb-2">{item.category}</p>
                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-orange-600 p-12 text-white">
              <h2 className="text-4xl font-bold mb-8">{lang === 'mr' ? 'संपर्क साधा' : 'Contact Us'}</h2>
              <div className="space-y-8">
                <div className="flex gap-4"><Phone /> <div><p className="text-orange-200 text-sm">Call</p><p className="font-bold text-xl">+91 12345 67890</p></div></div>
                <div className="flex gap-4"><Mail /> <div><p className="text-orange-200 text-sm">Email</p><p className="font-bold text-xl">hello@bhavya.com</p></div></div>
                <div className="flex gap-4"><MapPin /> <div><p className="text-orange-200 text-sm">Location</p><p className="font-bold text-lg">Pune, MH</p></div></div>
              </div>
            </div>
            <div className="lg:w-2/3 p-12">
              <h3 className="text-3xl font-bold mb-8">{t.contact.title}</h3>
              <form className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder={t.contact.name} className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-orange-500 transition-all col-span-2 md:col-span-1" />
                <input type="text" placeholder={t.contact.phone} className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-orange-500 transition-all col-span-2 md:col-span-1" />
                <select className="bg-[#1a1a1a] border border-white/10 p-4 rounded-xl outline-none focus:border-orange-500 transition-all col-span-2 text-gray-400">
                  <option>{t.contact.type}</option>
                  <option>Wedding</option><option>Corporate</option><option>Birthday</option>
                </select>
                <textarea placeholder={t.contact.msg} rows={4} className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-orange-500 transition-all col-span-2"></textarea>
                <button className="bg-orange-600 hover:bg-orange-700 py-5 rounded-xl font-bold text-lg transition-all col-span-2 uppercase tracking-widest">{t.contact.submit}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 bg-black border-t border-white/10 text-center">
        <div className="container mx-auto px-6">
          <div className="text-2xl font-black mb-6 tracking-widest uppercase">Bhavya Events</div>
          <p className="text-gray-600">© 2025 Bhavya Events. {lang === 'mr' ? 'सर्व हक्क राखीव.' : 'All rights reserved.'}</p>
        </div>
      </footer>

      {/* --- WhatsApp --- */}
      <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50">
        <MessageCircle size={28} />
      </a>
    </div>
  );
}