import React from "react";
import { Link } from "react-router-dom";

const EbookPurchaseSection = () => {
  return (
    <section className="md:w-[80vw] w-full mx-auto bg-white shadow-lg md:rounded-lg p-[4vw]">
      <h2 className="md:text-[2.5vw] text-2xl font-semibold mb-[4vw] text-center">
        Jak kupić e-booka?
      </h2>

      <div className="flex flex-col md:flex-row gap-[4vw]">
        {/* Lewa strona: instrukcje */}
        <div className="md:w-1/2 flex flex-col gap-[3vw] md:text-[1.8vw] text-gray-800 leading-relaxed text-left">
          {/* Przelew tradycyjny */}
          <div>
            <p className="mb-[1vw]">
              Aby zakupić eBooka, wykonaj przelew na poniższe dane:
            </p>
            <ul className="list-inside list-none mb-[1vw]">
              <li>
                <strong>Kwota:</strong> 50zł
              </li>
              <li>
                <strong>Numer konta:</strong> 26 1240 2845 1111 0011 0162 9057
              </li>
              <li>
                <strong>Odbiorca:</strong> Katarzyna Sadkowska
              </li>
              <li>
                <p>
                  <strong>Tytuł przelewu:</strong>
                  <br />
                  EBOOK – Twój e-mail – Twój numer telefonu
                  <br />
                  <span className="text-gray-600">
                    (np. EBOOK – anna.nowak@gmail.com – 123456789)
                  </span>
                </p>
              </li>
            </ul>
          </div>

          {/* BLIK */}
          <div>
            <p className="mb-[1vw]">
              Możesz też zapłacić <strong>BLIKIEM</strong>:
            </p>
            <ul className="list-inside list-none mb-[1vw]">
              <li>
                <strong>Kwota:</strong> 50zł
              </li>
              <li>
                <strong>Odbiorca:</strong> Katarzyna Sadkowska
              </li>
              <li>
                <strong>Nr telefonu:</strong> 733 981 239
              </li>
              <li>
                <p>
                  <strong>Tytuł przelewu:</strong>
                  <br />
                  EBOOK – Twój e-mail – Twój numer telefonu
                  <br />
                  <span className="text-gray-600">
                    (np. EBOOK – anna.nowak@gmail.com – 123456789)
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Prawa strona: ilustracje */}
        <div className="md:w-1/2 flex flex-col gap-[2vw] justify-center">
          <img
            src="/assets/ebook-3.jpg"
            alt="Ilustracja ebook"
            className="w-full md:h-[30vw] h-[70vw] object-cover rounded-lg"
          />
          <img
            src="/assets/ebook-4.jpg"
            alt="Ilustracja ebook"
            className="w-full md:h-[30vw] h-[70vw] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Info o wysyłce i regulamin */}
      <div className="md:text-[1.8vw] text-gray-800 leading-relaxed mt-[4vw] text-left">
        <p className="mb-[1vw]">
          Po dokonaniu płatności otrzymasz eBooka na podany adres e-mail w
          ciągu 24 godzin. Przed zakupem zapoznaj się z{" "}
          <Link
            to="/ebook-terms"
            className="text-blue-600 underline hover:text-blue-800"
          >
            regulaminem sprzedaży
          </Link>
          .
        </p>
        <p className="mb-[1vw]">W razie pytań – napisz śmiało!</p>
        <p className="mb-[2vw]">
            Mój ebook jest też dostępny na platformie Empik oraz Gumroad. Zapraszam do lektury!
            </p>
        {/* Sekcja przycisków Empik + Gumroad */}
        <div className="flex justify-between mt-[4vw] ">
          {/* Empik */}
          <div>
            <a
              href="https://www.empik.com/koktajle-bialkowo-kolagenowe-sadkowska-katarzyna,p1610220330,ebooki-i-mp3-p"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-[4vw] py-[1.5vw] rounded-md md:text-[2vw] hover:bg-blue-700 transition"
            >
              Przejdź do strony Empik
            </a>
          </div>
          {/* Gumroad */}
          <div>
            <a
              href="https://glowsavor.gumroad.com/l/ylpry?_gl=1*1lip11v*_ga*MTYxMjU4MjM2Mi4xNzQ4MjM5Njg0*_ga_6LJN6D94N6*czE3NDgyMzk2ODMkbzEkZzEkdDE3NDgyNDE5OTAkajAkbDAkaDA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-[4vw] py-[1.5vw] rounded-md md:text-[2vw] hover:bg-blue-700 transition"
            >
              Przejdź do strony Gumroad
            </a>
          </div>
        </div>

     {/* Sekcja próbki ebooka */}
        <div className="mt-[4vw] md:text-[1.8vw] text-gray-800">
          <p className="mb-[1vw]">
            Jeśli nie jesteś pewny co do zakupu ebooka - kliknij w przycisk poniżej i pobierz próbkę, w której znajdziesz kilka informacji na temat kolagenu oraz jeden przepis na pyszny koktajl białkowo-kolagenowy :)
          </p>
          <div className="flex justify-center mt-[2vw]">
            <a
              href="/assets/Koktajle-białkowo-kolagenowe-sample.pdf"
              download
              className="bg-green-600 text-white px-[4vw] py-[1.5vw] rounded-md md:text-[2vw] hover:bg-green-700 transition"
            >
              Pobierz próbkę ebooka
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookPurchaseSection;