import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Replace with your email service endpoint
      const response = await fetch('https://formspree.io/f/mgvvdzkr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16 font-space animate-fade-in">
        Contacto
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8 animate-slide-in-left">
          <h3 className="text-2xl font-semibold mb-6 font-space">¡Hablemos!</h3>
          <div className="space-y-6">
            <ContactInfo 
              icon={<Mail />}
              title="Email"
              detail="Zenencontreras1@email.com"
              href="mailto:Zenencontreras1@email.com"
            />
            <ContactInfo 
              icon={<Phone />}
              title="Teléfono"
              detail="+57 3044971198"
              href="tel:+57 3044971198"
            />
            <ContactInfo 
              icon={<MapPin />}
              title="Ubicacion"
              detail="Bogota, Colombia"
            />
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-right">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <span>Enviar Mensaje</span>
                <Send className="h-5 w-5" />
              </>
            )}
          </button>
          
          {submitStatus === 'success' && (
            <div className="text-green-500 text-center animate-fade-in">
              ¡Mensaje enviado con éxito!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="text-red-500 text-center animate-fade-in">
              Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  detail, 
  href 
}: { 
  icon: React.ReactNode; 
  title: string; 
  detail: string; 
  href?: string;
}) => (
  <div className="flex items-start space-x-4 hover:transform hover:translate-x-2 transition-all duration-300">
    <div className="p-3 bg-gray-800/50 rounded-lg group-hover:bg-purple-500/20">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-lg mb-1">{title}</h4>
      {href ? (
        <a 
          href={href} 
          className="text-gray-400 hover:text-purple-500 transition-colors"
        >
          {detail}
        </a>
      ) : (
        <p className="text-gray-400">{detail}</p>
      )}
    </div>
  </div>
);

export default Contact;