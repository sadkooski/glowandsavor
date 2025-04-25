import React from "react";
import EbookPurchaseSection from "../components/EbookPurchaseSection";

const EbookPage = () => {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center py-[4vw]">
            <div className="md:w-[80vw] mx-auto bg-white md:shadow-lg md:rounded-lg p-[4vw] mb-[4vw]">
                {/* Nagłówek */}
                <h2 className="md:text-[3.5vw] text-2xl font-bold text-center text-gray-800 mb-[4vw]">
                    Koktajle białkowo-kolagenowe
                </h2>

                {/* Zdjęcia (tylko 2 pierwsze) */}
                <div className="grid md:grid-cols-2 gap-[2vw] pb-[4vw]">
                    {["ebook-1", "ebook-2"].map((img, idx) => (
                        <div key={idx}>
                            <img
                                src={`/assets/${img}.jpg`}
                                alt={`Ebook - ${idx + 1}`}
                                loading="lazy"
                                className="w-full md:h-[30vw] h-[70vw] object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                {/* Opis */}
                <p className="md:text-[2vw] text-gray-700 text-center my-[3vw] md:my-0 mx-[3vw]">
                    Dowiedz się, jak w prosty sposób przygotować pyszne koktajle z kolagenem, które
                    poprawią kondycję Twojej skóry i zdrowia. Mój ebook to zbiór przepisów na zdrowe
                    napoje, które możesz łatwo wprowadzić do swojej codziennej diety.
                </p>
            </div>

            {/* Komponent z zakupem e-booka */}
            <EbookPurchaseSection />
        </div>
    );
};

export default EbookPage;