import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
return (
    <div >
      {/* Hero Section */}
      <div
        className="h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <h1 className="text-white text-5xl font-extrabold text-center">
          Witaj na Mojej Stronie
        </h1>
      </div>

      {/* Sekcja 1 */}
      <div className="mx-auto py-12 px-6">
        <section className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="/images/section1.jpg"
              alt="Sekcja 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Sekcja 1</h2>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia purus quis turpis tristique, nec consequat mauris feugiat.
            </p>
          </div>
        </section>
      </div>

      {/* Sekcja 2 */}
      <div className="mx-auto py-12 px-6 bg-gray-50">
        <section className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Sekcja 2</h2>
            <p className="text-lg text-gray-700">
              Curabitur consequat lorem nec magna venenatis, nec auctor ante
              suscipit. Donec ac velit sit amet urna gravida cursus. Aliquam
              euismod justo at augue sollicitudin maximus.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/section2.jpg"
              alt="Sekcja 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>
      </div>

      {/* Call-to-action */}
      <div className="mx-auto py-12 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Chcesz się dowiedzieć więcej?</h2>
        <p className="text-lg mb-6">
          Sprawdź nasze usługi i dowiedz się, jak możemy Ci pomóc w Twoim
          projekcie.
        </p>
        <Link to="/contact" className="bg-white text-blue-600 py-2 px-6 rounded-lg font-semibold">
          Skontaktuj się z nami
        </Link>
      </div>
    </div>
  );
};

export default Home;