import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-6 md:px-[10vw] py-10 md:py-[5vw] text-left bg-white text-gray-800">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Polityka Prywatności</h1>
      <p className="mb-6 text-sm md:text-base text-gray-500">Data aktualizacji: 14 kwietnia 2025</p>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">1. Administrator danych</h2>
        <p>Administratorem danych osobowych jest Glow & Savor, kontakt: glowandsavor@gmail.com.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">2. Zakres zbieranych danych</h2>
        <p>Za pośrednictwem formularza kontaktowego zbierane są:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Imię</li>
          <li>Adres e-mail</li>
          <li>Tytuł wiadomości</li>
          <li>Treść wiadomości</li>
          <li>Zgoda na przetwarzanie danych</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">3. Cel przetwarzania danych</h2>
        <p>Dane przetwarzane są w celu obsługi zapytania oraz prowadzenia korespondencji e-mailowej.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">4. Podstawa prawna</h2>
        <p>Dane są przetwarzane na podstawie zgody (art. 6 ust. 1 lit. a RODO).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">5. Okres przechowywania danych</h2>
        <p>Dane są przechowywane przez okres niezbędny do obsługi zapytania lub do momentu cofnięcia zgody.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">6. Twoje prawa</h2>
        <p>Masz prawo do:</p>
        <ul className="list-disc list-inside pl-4">
          <li>dostępu do danych,</li>
          <li>ich sprostowania,</li>
          <li>usunięcia,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>sprzeciwu,</li>
          <li>cofnięcia zgody.</li>
        </ul>
        <p>Kontakt: glowandsavor@gmail.com</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">7. Udostępnianie danych</h2>
        <p>Nie udostępniamy danych osobowych osobom trzecim bez Twojej zgody, chyba że wymagają tego przepisy prawa.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">8. Pliki cookies</h2>
        <p>
          Strona może korzystać z plików cookies w celach technicznych i analitycznych. Korzystając z niej, wyrażasz zgodę na ich użycie zgodnie z ustawieniami przeglądarki.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">9. Zmiany w Polityce</h2>
        <p>Polityka prywatności może być aktualizowana. Bieżąca wersja będzie zawsze dostępna na tej stronie.</p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-2">10. Kontakt</h2>
        <p>W razie pytań skontaktuj się z nami: glowandsavor@gmail.com</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;