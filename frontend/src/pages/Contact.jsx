import React from "react";

const Contact = () => {
    return (
      <section className="w-full px-6 py-12 bg-gray-100">
        {/* Górna sekcja: Dane kontaktowe + Zdjęcie */}
        <div className="flex flex-col md:flex-row w-full items-stretch">
          {/* Lewa kolumna: Dane kontaktowe */}
          <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold">Bądźmy w kontakcie</h3>
            <p className="text-gray-600 mt-1">+48 123 456 789</p>
  
            <h3 className="text-xl font-semibold mt-6">Masz pytanie?</h3>
            <p className="text-gray-600 mt-1">kontakt@mojastrona.pl</p>
  
            <h3 className="text-xl font-semibold mt-6">Godziny pracy</h3>
            <p className="text-gray-600 mt-1">Pon - Pt: 8:00 - 16:00</p>
  
            <h3 className="text-xl font-semibold mt-6">Śledź nas:</h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 flex items-center"
            >
              <img src="/images/instagram-icon.png" alt="Instagram" className="w-6 h-6 mr-2" />
              Instagram
            </a>
          </div>
  
          {/* Prawa kolumna: Zdjęcie */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/contact-image.jpg"
              alt="Kontakt"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
  
        {/* Dolna sekcja: Formularz kontaktowy */}
        <div className="mt-12 bg-white p-8 shadow-md">
          <form className="flex flex-col">
            {/* Imię i Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">Imię</label>
                <input
                  type="text"
                  placeholder="Twoje imię"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Twój email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
  
            {/* Wiadomość */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Twoja wiadomość</label>
              <textarea
                placeholder="Wpisz swoją wiadomość..."
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            {/* Przycisk Wyślij */}
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Wyślij
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  