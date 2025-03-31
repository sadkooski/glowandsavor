import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
      <section className="w-full bg-white">
        <div className="flex md:flex-row flex-col-reverse w-full">
          <div className="w-full md:w-1/2 flex py-20 md:py-0">

          <div className="w-full h-fit flex flex-col gap-15 md:gap-0 md:bg-gray-100 text-left md:px-[5vw] md:py-[8vw] md:mt-[5vw] md:mr-[2vw]">
            <div className="flex md:flex-row flex-col md:justify-between items-center gap-5">
              <h3 className="md:text-[1.8vw] text-3xl font-semibold">Bądźmy w kontakcie</h3>
              <p className=" text-gray-600 md:mt-[0.5vw] md:text-[1.5vw] text-2xl">+48 733 981 239</p>
            </div>
            <div className="flex md:flex-row flex-col md:justify-between items-center gap-5">
              <h3 className="md:text-[1.8vw] text-3xl font-semibold md:mt-[5vw]">Masz pytanie?</h3>
              <p className=" text-gray-600 md:mt-[5vw] md:text-[1.5vw] text-2xl">glowandsavor@gmail.com</p>
            </div>
            <div className="flex md:flex-row flex-col md:justify-between items-center gap-5">
              <h3 className="md:text-[1.8vw] text-3xl font-semibold md:mt-[5vw]">Godziny pracy</h3>
            <p className="text-gray-600 md:mt-[5vw] md:text-[1.5vw] text-2xl">Pon - Pt: 8:00 - 16:00</p>
            </div>
            <div className="flex md:flex-row flex-col md:justify-between items-center md:mt-[5vw] gap-5">
              <h3 className="md:text-[1.8vw] text-3xl font-semibold">Śledź mnie</h3>
              <Link to="https://www.instagram.com/glowandsavor" target="_blank" className="flex gap-[0.5vw] hover:text-blue-400 text-gray-600 ">
                  <img src="/glowandsavor/assets/icons/instagram.svg" alt="Instagram" className="w-12 md:w-[2vw] hover:opacity-70 hover:fill-blue-400 fill-gray-600" />
                  <span className="md:text-[1.5vw] text-2xl font-thin font-[HankenGrotesk]">glowandsavor</span>
              </Link>
            </div>
            </div>
          </div>
  
          {/* Prawa kolumna: Zdjęcie */}
          <div className="w-full md:w-1/2">
            <img
              src="/glowandsavor/assets/img-1.jpg"
              alt="Kontakt"
              className="w-full h-[50vh] md:h-fit object-cover"
            />
          </div>
        </div>
          <ContactForm />
      </section>
    );
  };
  
  export default Contact;
  