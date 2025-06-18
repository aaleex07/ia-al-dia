"use client";

import { useState, useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensaje enviado. Pronto nos pondremos en contacto contigo.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main>
      <h1>IA para el Día a Día</h1>
      <p>Descubre cómo la inteligencia artificial puede mejorar tu vida personal y profesional.</p>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Nombre" required />
        <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Correo electrónico" required />
        <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Mensaje" required />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}