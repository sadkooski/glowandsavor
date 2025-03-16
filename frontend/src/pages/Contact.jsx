import React from "react";

const Contact = () => {
    return (
      <section className="w-full bg-white">
        <div className="flex flex-row w-full">
          <div className="w-full md:w-1/2 flex">
          <div className="w-fit h-fit flex flex-col bg-gray-100 text-left pl-[24.7vw] pb-max px-[4vw] py-[2vw] mt-[5vw] mr-[2vw]">
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
        <div className="mt-[2vw] bg-gray-100 px-[18vw] py-[4vw]">
          <form className="flex flex-col">
            {/* Imię i Email */}
            <div className="flex flex-col md:flex-row gap-[8vw] text-[1.3vw] text-left">
              <div className="w-full">
                <label className="block text-gray-700 font-bold text-[1.7vw] pl-[1vw] mb-[0.4vw]">Imię</label>
                <input
                  type="text"
                  placeholder="Twoje imię"
                  className="w-full px-[1vw] py-[0.8vw] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-bold text-[1.7vw] px-[1vw] mb-[0.4vw]">Email</label>
                <input
                  type="email"
                  placeholder="Twój email"
                  className="w-full px-[1vw] py-[0.8vw] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
  
            {/* Wiadomość */}
            <div className="mt-[2vw] flex flex-col gap-[1vw] text-left text-[1.3vw]">
              <div>
                <label className="block text-gray-700  font-bold text-[1.7vw] px-[1vw] mb-[0.4vw]">Tytuł wiadomości</label>
                <input
                  type="email"
                  placeholder="Wpisz tytuł wiadomości..."
                  className="w-full px-[1vw] py-[0.8vw] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
                </div>
              <div>
                <label className="block text-gray-700 font-bold text-[1.7vw] px-[1vw] mb-[0.4vw]">Twoja wiadomość</label>
              <textarea
                placeholder="Wpisz swoją wiadomość..."
                rows="4"
                className="w-full h-[15vw] px-[1vw] py-[0.8vw] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
              </div>
              <button
              type="submit"
              className="flex font-medium text-[1.5vw] px-[4vw] py-[0.5vw] w-fit bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
              Wyślij
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  