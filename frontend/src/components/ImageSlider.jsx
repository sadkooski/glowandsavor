import { Circle, CircleDot } from "lucide-react";
import React, { useEffect, useState } from "react";

function ImageSlider({ imageUrls, interval = 10000 }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
  }

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? imageUrls.length - 1 : index - 1));
  }

  // ⏱ Auto-slide co kilka sekund
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      showNextImage();
    }, interval);

    return () => clearInterval(sliderInterval);
  }, [imageIndex, interval]);

  if (!imageUrls || imageUrls.length === 0) {
    return <p>Brak dostępnych zdjęć</p>;
  }

  return (
    <section className="relative w-full h-full overflow-hidden">
      <div
        className="flex w-full h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${100 * imageIndex}%)` }}
      >
        {imageUrls.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            className="w-full h-full object-cover shrink-0 grow-0"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 py-[0.5vw] left-1/2 -translate-x-1/2 flex gap-1 z-1">
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
              <Circle className="fill-black w-full h-full" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ImageSlider;