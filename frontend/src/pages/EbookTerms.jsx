import React from "react";

const EbookTerms = () => {
  return (
    <div className="px-6 md:px-[10vw] py-10 md:py-[5vw] text-left bg-white text-gray-800">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Regulamin sprzedaży e-booka</h1>
      <p className="mb-6 text-sm md:text-base text-gray-500">Data obowiązywania: 25 kwietnia 2025</p>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">1. Dane sprzedawcy</h2>
        <p>
          Sprzedawcą e-booka jest Katarzyna Sadkowska, prowadząca działalność nierejestrowaną
          zgodnie z art. 5 ust. 1 ustawy Prawo przedsiębiorców.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">2. Przedmiot sprzedaży</h2>
        <p>Przedmiotem sprzedaży jest produkt cyfrowy w postaci e-booka.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">3. Cena i forma płatności</h2>
        <p>Cena e-booka wynosi 50 zł.</p>
        <p className="mt-2">Zakupu można dokonać poprzez:</p>
        <ul className="list-disc list-inside pl-4 mt-2">
          <li>przelew tradycyjny na konto: <strong>26 1240 2845 1111 0011 0162 9057</strong></li>
          <li>płatność BLIK na numer telefonu: <strong>733 981 239</strong></li>
        </ul>
        <p className="mt-4">
          W tytule przelewu należy wpisać:
          <br />
          <strong>EBOOK – adres e-mail – numer telefonu</strong>
          <br />
          <span className="text-gray-600">(np. EBOOK – anna.nowak@gmail.com – 123456789)</span>
        </p>
        <p className="mt-4">
          Zakupu można również dokonać przez stronę Empik Selfpublishing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">4. Realizacja zamówienia</h2>
        <p>
          Po dokonaniu płatności e-book zostanie wysłany na adres e-mail podany w tytule przelewu w
          ciągu 24 godzin.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">5. Produkt cyfrowy – brak możliwości zwrotu</h2>
        <p>
          Zgodnie z art. 38 pkt 13 ustawy o prawach konsumenta, konsumentowi nie przysługuje prawo
          odstąpienia od umowy w przypadku dostarczania treści cyfrowych, które nie są zapisane na
          nośniku materialnym, jeżeli spełnianie świadczenia rozpoczęło się za wyraźną zgodą
          konsumenta i po poinformowaniu go o utracie prawa do odstąpienia od umowy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">6. Reklamacje</h2>
        <p>
          W przypadku problemów z dostępem do e-booka, należy niezwłocznie skontaktować się ze
          sprzedawcą na adres e-mail lub przez wiadomość prywatną.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-2">7. Postanowienia końcowe</h2>
        <p>
          Regulamin obowiązuje od dnia 25.04.2025 r. Sprzedawca zastrzega sobie prawo do jego zmiany.
        </p>
      </section>
    </div>
  );
};

export default EbookTerms;