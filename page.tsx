
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Brain,
  Bot,
  BookOpen,
  Code,
  Briefcase,
  Lightbulb,
  TrendingUp,
  Mail,
  Palette,
  Info,
  Users,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado. Pronto nos pondremos en contacto contigo.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 scroll-smooth">
      <header className="max-w-6xl mx-auto mb-12">
        <nav className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">IA para el Día a Día</h1>
          <Button aria-label="Suscríbete al boletín" className="text-sm">Suscríbete</Button>
        </nav>
        <div className="text-center mt-8">
          <h2 className="text-4xl font-extrabold mb-4">Convierte la inteligencia artificial en tu mejor aliada</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Aprende a aplicar herramientas de IA para mejorar tu productividad, creatividad y organización personal y profesional.
          </p>
          <Button className="text-lg" aria-label="Comenzar ahora">Empieza ahora</Button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[{
          icon: <Sparkles className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />,
          title: "Productividad Personal",
          desc: "Organiza tu día a día con herramientas inteligentes.",
        }, {
          icon: <Bot className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />,
          title: "Automatización con IA",
          desc: "Delega tareas repetitivas y gana tiempo.",
        }, {
          icon: <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />,
          title: "Desarrollo y Programación",
          desc: "Potencia tu código con asistentes de IA.",
        }, {
          icon: <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />,
          title: "Educación Inteligente",
          desc: "Aprende más rápido con ayuda de modelos de lenguaje.",
        }, {
          icon: <Palette className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />,
          title: "Diseño y Creatividad",
          desc: "Genera imágenes, música o ideas con IA.",
        }, {
          icon: <Briefcase className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />,
          title: "Negocios y Emprendimiento",
          desc: "Haz crecer tu proyecto usando IA como aliada.",
        }].map(({ icon, title, desc }, i) => (
          <Card key={i}>
            <CardContent className="flex flex-col items-center text-center p-6">
              {icon}
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-20 bg-indigo-50 dark:bg-indigo-900 p-8 text-center rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">¿Listo para transformar tu rutina con IA?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Empieza hoy a usar herramientas que te hacen la vida más fácil.</p>
        <Button className="text-lg" aria-label="Comenzar gratis">Comienza gratis</Button>
      </section>

      <section className="max-w-4xl mx-auto mt-20 text-left">
        <h2 className="text-3xl font-bold mb-6 text-center">❓ Preguntas Frecuentes (FAQ)</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <div><h3 className="font-semibold">¿Necesito saber programar para usar IA?</h3><p>No. Existen muchas herramientas que no requieren conocimientos técnicos.</p></div>
          <div><h3 className="font-semibold">¿Qué herramientas de IA me recomiendan para empezar?</h3><p>ChatGPT, Notion AI, Midjourney, DALL·E, Grammarly y Zapier.</p></div>
          <div><h3 className="font-semibold">¿La IA reemplazará mi trabajo?</h3><p>No necesariamente. La clave es aprender a usarla como aliada.</p></div>
          <div><h3 className="font-semibold">¿Puedo usar IA para ganar dinero?</h3><p>Sí. Desde automatizar tareas hasta ofrecer servicios con IA.</p></div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-20 text-left">
        <h2 className="text-3xl font-bold mb-6 text-center">🚀 Herramientas de IA Recomendadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{ name: "ChatGPT", desc: "Tu asistente para escribir, aprender y resolver problemas." },
            { name: "Midjourney", desc: "Genera imágenes espectaculares con IA." },
            { name: "Notion AI", desc: "Organiza tus ideas, notas y tareas con IA integrada." },
            { name: "Zapier", desc: "Conecta y automatiza aplicaciones fácilmente." },
            { name: "Tome", desc: "Crea presentaciones impactantes usando IA." },
            { name: "ElevenLabs", desc: "Convierte texto en voz realista en múltiples idiomas." },
          ].map(({ name, desc }, i) => (
            <div key={i} className="border p-4 rounded-md shadow-sm dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-1">{name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🌟 Lo que dicen nuestros usuarios</h2>
        <div className="grid gap-6 sm:grid-cols-2 text-left text-gray-700 dark:text-gray-300">
          <div className="border p-4 rounded shadow dark:border-gray-700"><p>"Desde que uso IA cada día, he duplicado mi productividad. Esta página me ayudó mucho a empezar." – Ana M.</p></div>
          <div className="border p-4 rounded shadow dark:border-gray-700"><p>"La automatización con IA me permitió ahorrar horas en tareas repetitivas. ¡Muy recomendado!" – Carlos G.</p></div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">📬 Contacto</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-md shadow">
          <input name="name" type="text" placeholder="Nombre" className="w-full p-2 border rounded" value={formData.name} onChange={handleInputChange} required />
          <input name="email" type="email" placeholder="Correo electrónico" className="w-full p-2 border rounded" value={formData.email} onChange={handleInputChange} required />
          <textarea name="message" placeholder="Escribe tu mensaje..." className="w-full p-2 border rounded h-32" value={formData.message} onChange={handleInputChange} required></textarea>
          <Button type="submit">Enviar</Button>
        </form>
      </section>

      <footer className="mt-20 text-center text-gray-500 dark:text-gray-400 text-sm">
        © 2025 IA para el Día a Día. Todos los derechos reservados. | <a href="/aviso-legal" className="underline">Aviso legal</a> | <a href="/privacidad" className="underline">Política de privacidad</a>
      </footer>
    </main>
  );
}
