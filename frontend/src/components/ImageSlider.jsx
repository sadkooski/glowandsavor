import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import React, { useState } from "react";
import "../image-slider.css";


export function ImageSlider({ imageUrls }) { // Zmieniono na `imageUrls`
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
  }

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? imageUrls.length - 1 : index - 1));
  }

  // Upewniamy się, że imageUrls nie jest undefined przed wywołaniem map()
  if (!imageUrls || imageUrls.length === 0) {
    return <p>Brak dostępnych zdjęć</p>; // Możesz zwrócić komunikat, jeśli brak zdjęć
  }

  return (
    <section className="relative w-full h-full overflow-hidden">
      <div className="flex w-full h-full transition-transform duration-300 ease-in-out"
           style={{ transform: `translateX(-${100 * imageIndex}%)` }}>
        {imageUrls.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            className="w-full h-full object-cover shrink-0 grow-0"
          />
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={showPrevImage}
        aria-label="Poprzednie zdjęcie"
        className="absolute left-0 top-0 bottom-0 px-4 hover:bg-black/20 focus-visible:outline outline-white"
      >
        <ArrowBigLeft className="w-8 h-8 stroke-white fill-black" />
      </button>
      <button
        onClick={showNextImage}
        aria-label="Następne zdjęcie"
        className="absolute right-0 top-0 bottom-0 px-4 hover:bg-black/20 focus-visible:outline outline-white"
      >
        <ArrowBigRight className="w-8 h-8 stroke-white fill-black" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            aria-label={`Zobacz obraz ${index + 1}`}
            onClick={() => setImageIndex(index)}
            className="w-4 h-4 hover:scale-125 transition-transform"
          >
            {index === imageIndex ? (
              <CircleDot className="stroke-white fill-black w-full h-full" />
            ) : (
              <Circle className="stroke-white fill-black w-full h-full" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
