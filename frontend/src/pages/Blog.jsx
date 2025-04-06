import React from "react";

const Blog = () => {
    return (
        <section className="w-full bg-white md:px-[7vw] md:pt-[3vw]">
            <div className="hidden md:flex justify-center items-center bg-[url('/assets/blog-1.jpg')] bg-cover bg-center h-[24vw]">
                <div className="flex flex-col text-gray-300 leading-none px-[20vw] gap-[0.8vw]">
                    <span className="text-[0.8vw] font-medium tracking-wider">BLOG</span>
                    <h3 className="text-[2.5vw]">Koktajle białkowo-kolagenowe jako dobry sposób przemycania składników odżywczych</h3>
                    <span className="text-[0.8vw] font-medium tracking-wider">31 MARCH 2025</span>
                </div>
            </div>

            <div className="flex flex-col md:hidden">
                <img className="" src="/glowandsavor/assets/blog-1.jpg" alt="" />
                <div className="flex flex-col leading-tight px-25 gap-4 pt-8 pb-18">
                    <span className="text-base text-gray-400 font-medium tracking-wider">BLOG</span>
                    <h3 className="text-5xl leading-tight">Koktajle białkowo-kolagenowe jako dobry sposób przemycania składników odżywczych</h3>
                    <span className="text-base text-gray-400 font-medium tracking-wider">31 MARCH 2025</span>
                </div>
            </div>

            <div className="flex flex-col px-[8vw] md:py-[8vw] text-gray-700">
                <div className="flex flex-col md:gap-[1vw] gap-8 text-left">
                <p className="md:text-[1.2vw] text-2xl leading-loose">W dzisiejszym zabieganym świecie trudno znaleźć czas na pełnowartościowe posiłki. Często sięgamy po szybkie przekąski, które niestety nie zawsze dostarczają nam wszystkich niezbędnych składników odżywczych. Rozwiązaniem tego problemu mogą być koktajle białkowo-kolagenowe, które łączą wygodę z wartościowym składem. To nie tylko sposób na uzupełnienie białka i kolagenu, ale także świetna metoda na “przemycenie” witamin, minerałów i zdrowych tłuszczów do codziennej diety.</p>
                <h3 className="md:text-[2.5vw] text-5xl leading-tight md:py-[0.5vw]">Dlaczego warto pić koktajle białkowo-kolagenowe?</h3>
                <p className="md:text-[1.2vw] text-2xl leading-loose">Koktajle na bazie białka i kolagenu mają wiele zalet:</p>
                <p className="md:text-[1.2vw] text-2xl leading-loose">• Wspierają regenerację mięśni – białko jest kluczowe dla odbudowy tkanek, co jest istotne zarówno dla osób aktywnych fizycznie, jak i tych, które chcą zadbać o jędrność ciała.</p>
                <p className="md:text-[1.2vw] text-2xl leading-loose">• Poprawiają kondycję skóry, włosów i paznokci – kolagen to główne białko strukturalne w organizmie, które odpowiada za elastyczność skóry i zdrowy wygląd włosów.</p>
                <p className="md:text-[1.2vw] text-2xl leading-loose">• Wzmacniają stawy i kości – regularne spożywanie kolagenu wspomaga zdrowie stawów i zapobiega problemom związanym z ich sztywnością czy bólem.</p>
                <p className="md:text-[1.2vw] text-2xl leading-loose">• Są szybkie i łatwe w przygotowaniu – wystarczy kilka minut, aby stworzyć pełnowartościowy posiłek, który można zabrać do pracy, na siłownię czy w podróż.</p>
                <p className="md:text-[1.2vw] text-2xl leading-loose">• Można do nich dodać wartościowe składniki – to idealna baza do wzbogacania diety o zdrowe tłuszcze, owoce, warzywa czy superfoods.</p>
                <div className="flex justify-center">
                <img src="/glowandsavor/assets/blog-2.jpg" alt="" className="md:w-[40vw] py-[1vw]"/>
                </div>
                <h3 className="md:text-[2.5vw] text-5xl leading-tight md:py-[0.5vw]">Jakie składniki można „przemycić” w koktajlach?</h3>

                <ol className="flex flex-col md:gap-[1vw] gap-7">
                    <li className="">
                        <strong className="md:text-[1.6vw] text-3xl leading-loose">1. Zdrowe tłuszcze:</strong>
                        <p className="md:text-[1.2vw] text-2xl leading-loose">• Awokado – działa przeciwstarzeniowo, wspiera kondycję włosów oraz skóry.</p>
                        <p className="md:text-[1.2vw] text-2xl leading-loose">• Orzechy – wspomagają pracę mózgu i są świetnym źródłem białka.</p>
                        <p className="md:text-[1.2vw] text-2xl leading-loose">• Olej kokosowy – wspomaga pracę jelit i działa przeciwzapalnie.</p>
                    </li>
                    <li className="">
                        <strong className="md:text-[1.4vw] text-3xl leading-loose">2. Błonnik i składniki wspierające trawienie:</strong>
                        <p className="md:text-[1.2vw] text-2xl leading-loose">• Nasiona chia i siemię lniane – są bogate w błonnik i regulują wypróżnienia. </p>
                        <p className="md:text-[1.2vw] text-2xl leading-loose">• Płatki owsiane – dają uczucie sytości na dłużej.</p>
                        <p className="md:text-[1.2vw] text-2xl leading-loose">• Warzywa liściaste (np. szpinak, jarmuż) – dostarczają chlorofilu i wspomagają trawienie.</p>
                    </li>
                    <li className="">
                        <strong className="md:text-[1.4vw] text-3xl leading-loose">3. Witaminy, minerały i antyoksydanty:</strong>
                        <p className="md:text-[1.2vw] text-2xl leading-loose">• Owoce jagodowe – maliny, borówki, truskawki to bomba antyoksydantów, działają mocno przeciwzapalnie i pozytywnie wpływają na pracę jelit.</p>
                        <p className="md:text-[1.2vw] text-2xl leading-loose">• Przyprawy – cynamon, kurkuma czy imbir mają właściwości przeciwzapalne i wspomagają metabolizm.</p>
                        <p className="md:text-[1.2vw] text-2xl leading-loose">• Witaminy, minerały, elektrolity, wyciągi roślinne - dla dodatkowego zwiększenia witamin, minerałów czy antyoksydantów możesz dodać je w formie suplementów, np. witaminę C czy inozytol. </p>
                    </li>
                </ol>
                <h3 className="md:text-[2.5vw] text-5xl leading-tight md:py-[0.5vw]">Podsumowanie</h3>
                <p className="md:text-[1.2vw] text-2xl leading-loose">Koktajle białkowo-kolagenowe to nie tylko szybki i smaczny posiłek, ale także sposób na uzupełnienie diety w cenne składniki odżywcze. Można je dowolnie komponować, wzbogacając o zdrowe tłuszcze, białko, witaminy itd. To idealne rozwiązanie dla osób, które chcą zadbać o swoją sylwetkę, skórę i zdrowie w prosty i smaczny sposób</p>
                <p className="md:text-[1.2vw] text-2xl leading-loose">Czy masz swój ulubiony przepis na koktajl białkowo-kolagenowy?</p>
                </div>
            </div>
        </section>
    )
}

export default Blog
