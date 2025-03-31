import React from "react";

const EbookPage = () => {
    return (
        <div className=" bg-gray-100 flex flex-col items-center justify-center py-[4vw]">
            <div className="w-[80vw] mx-auto bg-white shadow-lg rounded-lg p-[2vw]">
                {/* Nagłówek */}
                <h1 className="text-[3.5vw] font-bold text-center text-gray-800 mb-[2vw]">
                    Koktajle białkowo-kolagenowe
                </h1>

                {/* Zdjęcia */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-[2vw] mb-6">
                    <div>
                        <img
                            src="/glowandsavor/assets/img-1.jpg"
                            alt="Ebook - Kolagen"
                            className="w-full h-[30vw] object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="/glowandsavor/assets/img-2.jpg"
                            alt="Koktajl"
                            className="w-full h-[30vw] object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="/glowandsavor/assets/img-3.jpg"
                            alt="Ebook - Kolagen"
                            className="w-full h-[30vw] object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="/glowandsavor/assets/img-4.jpg"
                            alt="Koktajl"
                            className="w-full h-[30vw] object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Opis */}
                <p className="text-[2vw] text-gray-700 text-center my-[3vw] mx-[3vw]">
                    Dowiedz się, jak w prosty sposób przygotować pyszne koktajle z kolagenem, które
                    poprawią kondycję Twojej skóry i zdrowia. Mój ebook to zbiór przepisów na zdrowe
                    napoje, które możesz łatwo wprowadzić do swojej codziennej diety.
                </p>

                {/* Przycisk Kup Teraz */}
                <div className="flex justify-center">
                    <a
                        href="https://allegro.pl/aukcja/your-ebook-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-[3vw] py-[1vw] rounded-md text-[2vw] hover:bg-blue-700 transition"
                    >
                        Kup Teraz
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EbookPage;