import React from "react";

const Contact = () => {
    return (
      <section className="w-full bg-white">
        <div className="flex md:flex-row flex-col-reverse w-full">
          <div className="w-full md:w-1/2 flex py-20 md:py-0">

          <div className="w-full h-fit flex flex-col gap-15 md:gap-0 md:bg-gray-100 text-left md:px-[5vw] md:py-[8vw] md:px-[2vw] md:py-[2vw] md:mt-[5vw] md:mr-[2vw]">
            <div className="flex md:flex-row flex-col md:justify-between items-center gap-5">
              <h3 className="md:text-[1.8vw] text-3xl font-semibold">Bądźmy w kontakcie</h3>
              <p className=" text-gray-600 md:mt-[0.5vw] md:text-[1.5vw] text-2xl">+48 123 456 789</p>
            </div>
            <div className="flex md:flex-row flex-col md:justify-between items-center gap-5">
              <h3 className="md:text-[1.8vw] text-3xl font-semibold md:mt-[5vw]">Masz pytanie?</h3>
              <p className=" text-gray-600 md:mt-[5vw] md:text-[1.5vw] text-2xl">kontakt@mojastrona.pl</p>
            </div>
            <div className="flex md:flex-row flex-col md:justify-between items-center gap-5">
              <h3 className="md:text-[1.8vw] text-3xl font-semibold md:mt-[5vw]">Godziny pracy</h3>
            <p className="text-gray-600 md:mt-[5vw] md:text-[1.5vw] text-2xl">Pon - Pt: 8:00 - 16:00</p>
            </div>
            <div className="flex md:flex-row flex-col md:justify-between items-center md:mt-[5vw] gap-5">
              <h3 className="md:text-[1.8vw] text-3xl font-semibold">Śledź mnie</h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="md:mt-2 text-blue-600 flex items-center"
            >
              <img src="assets/icons/instagram.svg" alt="Instagram" className="md:w-6 md:h-6 md:mr-2" />
            </a>
            </div>
            </div>
          </div>
  
          {/* Prawa kolumna: Zdjęcie */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/img-1.jpg"
              alt="Kontakt"
              className="w-full h-[50vh] md:h-fit object-cover"
            />
          </div>
        </div>
  
        {/* Dolna sekcja: Formularz kontaktowy */}
        <div className="md:mt-[2vw] bg-gray-100 md:px-[18vw] md:py-[4vw] py-15 px-15">
          <form className="flex flex-col ">
            {/* Imię i Email */}
            <div className="flex flex-col md:flex-row md:gap-[8vw] gap-10 pb-10 md:pb-0 md:text-[1.3vw] text-left">
              <div className="w-full">
                <label className="block text-gray-700  font-bold md:text-[1.7vw] text-3xl md:pl-[1vw] md:mb-[0.4vw] pb-3 md:pb-0">Imię</label>
                <input
                  type="text"
                  placeholder="Twoje imię"
                  className="w-full md:px-[1vw] px-5 md:py-[0.8vw] py-2 text-xl md:text-[1.3vw] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-bold md:text-[1.7vw] text-3xl md:px-[1vw] md:mb-[0.4vw] pb-3 md:pb-0">Email</label>
                <input
                  type="email"
                  placeholder="Twój email"
                  className="w-full md:px-[1vw] px-5 md:py-[0.8vw] py-2 text-xl md:text-[1.3vw] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
  
            {/* Wiadomość */}
            <div className="md:mt-[2vw] flex flex-col md:gap-[1vw] gap-10 text-left md:text-[1.3vw]">
              <div>
                <label className="block text-gray-700  font-bold md:text-[1.7vw] text-3xl md:px-[1vw] md:mb-[0.4vw] pb-3 md:pb-0">Tytuł wiadomości</label>
                <input
                  type="email"
                  placeholder="Wpisz tytuł wiadomości..."
                  className="w-full md:px-[1vw] px-5 md:py-[0.8vw] py-2 text-xl md:text-[1.3vw] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
                </div>
              <div>
                <label className="block text-gray-700 font-bold md:text-[1.7vw] text-3xl md:px-[1vw] md:mb-[0.4vw] pb-3 md:pb-0">Twoja wiadomość</label>
              <textarea
                placeholder="Wpisz swoją wiadomość..."
                rows="4"
                className="w-full md:h-[15vw] h-60 md:px-[1vw] px-5 md:py-[0.8vw] py-2 text-xl md:text-[1.3vw] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
              </div>
              <button
              type="submit"
              className="flex justify-center md:justify-normal font-medium md:text-[1.5vw] text-2xl md:px-[4vw] w-full md:w-fit md:py-[0.5vw] py-3 w-fit bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
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
  