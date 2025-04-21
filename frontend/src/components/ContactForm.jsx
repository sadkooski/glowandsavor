import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ContactForm = () => {
  // Stan do przechowywania danych formularza
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
    privacy: false, // dodane pole zgody
  });

  // Stan do przechowywania błędów
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
    privacy: "", // dodane pole zgody
  });

  // Funkcja obsługująca zmianę wartości w formularzu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Funkcja obsługująca zmianę stanu checkboxa zgody
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Funkcja do usuwania błędów przy kliknięciu w input
  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Funkcja walidująca formularz
  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    // Walidacja imienia
    if (!formData.name) {
      formErrors.name = "Imię jest wymagane!";
      valid = false;
    }

    // Walidacja e-maila
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      formErrors.email = "Proszę podać prawidłowy adres e-mail!";
      valid = false;
    }

    // Walidacja tytułu wiadomości
    if (!formData.title) {
      formErrors.title = "Tytuł wiadomości jest wymagany!";
      valid = false;
    }

    // Walidacja treści wiadomości
    if (!formData.message) {
      formErrors.message = "Treść wiadomości jest wymagana!";
      valid = false;
    }

    // Walidacja zgody na przetwarzanie danych
    if (!formData.privacy) {
      formErrors.privacy = "Musisz wyrazić zgodę na przetwarzanie danych osobowych.";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  // Funkcja obsługująca wysłanie formularza
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await fetch("https://glowandsavor-backend.onrender.com/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          toast.success("Wiadomość została wysłana pomyślnie!");
          setFormData({ name: "", email: "", title: "", message: "", privacy: false }); // Zresetuj formularz
        } else {
          toast.error("Wystąpił błąd przy wysyłaniu wiadomości.");
        }
      } catch (error) {
        console.error("Błąd przy wysyłaniu wiadomości:", error);
        toast.error("Coś poszło nie tak. Spróbuj ponownie później.");
      }
    }
  };

  return (
    <div className="md:mt-[2vw] bg-gray-100 md:px-[18vw] md:py-[4vw] py-15 px-10">
      <form onSubmit={handleSubmit} className="flex flex-col">
        {/* Imię i Email */}
        <div className="flex flex-col md:flex-row md:gap-[8vw] gap-5 pb-10 md:pb-0 md:text-[1.3vw] text-left">
          <div className="w-full">
            <label className="block text-gray-700 font-bold md:text-[1.7vw] text-3xl md:pl-[1vw] md:mb-[0.4vw] pb-3 md:pb-0">
              Imię
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Twoje imię"
              className="w-full md:px-[1vw] px-5 md:py-[0.8vw] py-2 text-xl md:text-[1.3vw] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="w-full">
            <label className="block text-gray-700 font-bold md:text-[1.7vw] text-3xl md:px-[1vw] md:mb-[0.4vw] pb-3 md:pb-0">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Twój email"
              className="w-full md:px-[1vw] px-5 md:py-[0.8vw] py-2 text-xl md:text-[1.3vw] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
        </div>

        {/* Wiadomość */}
        <div className="md:mt-[2vw] flex flex-col md:gap-[1vw] gap-5 text-left md:text-[1.3vw]">
          <div>
            <label className="block text-gray-700 font-bold md:text-[1.7vw] text-3xl md:px-[1vw] md:mb-[0.4vw] pb-3 md:pb-0">
              Tytuł wiadomości
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Wpisz tytuł wiadomości..."
              className="w-full md:px-[1vw] px-5 md:py-[0.8vw] py-2 text-xl md:text-[1.3vw] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-bold md:text-[1.7vw] text-3xl md:px-[1vw] md:mb-[0.4vw] pb-3 md:pb-0">
              Twoja wiadomość
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Wpisz swoją wiadomość..."
              rows="4"
              className="w-full md:h-[15vw] h-60 md:px-[1vw] px-5 md:py-[0.8vw] py-2 text-xl md:text-[1.3vw] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          {/* Checkbox zgody */}
          <div className="">
            <label className="flex items-start text-gray-600 text-sm md:text-[1vw]">
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleCheckboxChange}
                className="mr-2 mt-[0.3em]"
            />
            <span className="font-[HankenGrotesk]">
              Wyrażam zgodę na przetwarzanie moich danych osobowych przez Glow & Savor w celu obsługi zapytania przesłanego za pomocą formularza kontaktowego, zgodnie z&nbsp;
            <Link to="/privacy-policy" className="text-blue-600 underline inline">
                Polityką Prywatności
            </Link>
            .
            </span>
            </label>
              {errors.privacy && <p className="text-red-500 mt-2">{errors.privacy}</p>}
          </div>

          <button
            type="submit"
            className="flex justify-center md:justify-normal font-medium md:text-[1.5vw] text-2xl md:px-[4vw] w-full md:w-fit md:py-[0.5vw] py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Wyślij
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;