import React from "react";

const Contact = () => {
    return (
      <section className="w-full pb-[5vw] bg-white">
        <div className="flex flex-row w-full">
          <div className="w-full md:w-1/2 bg-white flex justify-center items-center">
          <div className="w-fit flex flex-col text-left">
            <h3 className="text-[2vw] font-semibold">Bądźmy w kontakcie</h3>
            <p className="text-gray-600 mt-[0.5vw] text-[1.5vw]">+48 123 456 789</p>
            <h3 className="text-[2vw] font-semibold mt-[5vw]">Masz pytanie?</h3>
            <p className="text-gray-600 mt-[0.5vw] text-[1.5vw]">kontakt@mojastrona.pl</p>
            <h3 className="text-[2vw] font-semibold mt-[5vw]">Godziny pracy</h3>
            <p className="text-gray-600 mt-[0.5vw] text-[1.5vw]">Pon - Pt: 8:00 - 16:00</p>
            <div className="flex flex-row justify-left items-center mt-[5vw]">
              <h3 className="text-[2vw] font-semibold">Śledź nas:</h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 flex items-center"
            >
              <img src="/assets/header-bg.jpeg" alt="Instagram" className="w-6 h-6 mr-2" />
            </a>
            </div>
            </div>
          </div>
  
          {/* Prawa kolumna: Zdjęcie */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/img-1.jpg"
              alt="Kontakt"
              className="w-full object-cover"
            />
          </div>
        </div>
  
        {/* Dolna sekcja: Formularz kontaktowy */}
        <div className="mt-[5vw] bg-white px-[10vw] ">
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
  