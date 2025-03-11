import React from "react";

const Home = () => {
return (
    <div className="">
      {/* Sekcja 1 */}
      <div className="py-[2vw] px-[8vw] my-[3vw]">
      <section className="flex flex-row  gap-[1vw] px-[2vw] py-[3vw] bg-gray-100">
      <p className="w-[33%] pt-[7vw] text-[1.5vw] text-right">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, eveniet fugiat unde molestiae, ab dolore aliquid sint enim ipsum, facere voluptates omnis. Enim corporis non, error ad nemo unde adipisci?e
      </p>
      <img src="/assets/hero-img.jpeg" alt="" className="w-[34%] flex-shrink-0" />
      <p className="w-[33%] pt-[7vw] text-[1.3vw] text-left">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nemo earum at delectus, quod aliquam eveniet voluptas saepe ratione? Doloremque impedit necessitatibus tenetur vero. Ab sed nostrum saepe error quibusdam.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit excepturi quae non asperiores, aperiam eos vitae placeat nulla minima? Voluptatum deleniti distinctio recusandae sunt veritatis quibusdam obcaecati in doloremque aut.
      </p>
      </section>
      </div>
      <div className= "border-b border-black mx-[8vw]"></div>
      {/* Sekcja 2 */}
      <div className="my-[3vw] py-[2vw] px-[8vw] ">
      <section className="flex flex-row px-[2vw] bg-white relative">
      <p className="w-[25%] pt-[5vw] text-[1.5vw] font-normal absolute left-[8vw] z-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, eveniet fugiat unde molestiae, abs non, error ad nemo unde adipisc i?edasdas afdf sfgegwe rewrgwerg ewrgewrgerwg
      </p>
      <img src="/assets/my-name-img.jpeg" alt="" className="w-[45%] z-0 ml-auto"/>
      <div className="w-[30%] flex flex-col pt-[5vw] pl-[3vw] text-[1vw] text-left">
      <h3 className="pb-[1vw] text-[1.3vw]">Cześć jestem Kasia</h3>
      <p className="">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nemo earum at delectus, quod aliquam eveniet voluptas saepe ratione? Doloremque impedit necessitatibus tenetur vero. Ab sed nostrum saepe error quibusdam.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit excepturi quae non asperiores, aperiam eos vitae placeat nulla minima? Voluptatum deleniti distinctio recusandae sunt veritatis quibusdam obcaecati in doloremque aut.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit excepturi quae non asperiores, aperiam eos vitae placeat nulla minima? Voluptatum deleniti distinctio recusandae sunt veritatis quibusdam obcaecati in doloremque aut.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit excepturie ti distdae sunt veritatis quibusdam obcaecati in doloremque aut.
      </p>
      </div>
        </section>
      </div>

      {/* sEkcja 3 */}
      <div className="px-[8vw] pt-[2vw] pb-[5vw] text-center bg-gray-100 text-black">
      <h3 className="text-[4vw] ">Follow our feed</h3>
      <a
        href="https://www.instagram.com/glowandsavor"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black text-[2vw] font-medium mt-[4vw]"
        >
        @glowandsavor
      </a>
      <ul className="w-full mt-[1vw] grid grid-cols-3 grid-rows-3">
      <li className="w-full"><img src="/assets/img-1.jpg" alt="Image 1" className="w-full aspect-square object-cover" /></li>
      <li className="w-full"><img src="/assets/img-2.jpg" alt="Image 2" className="w-full aspect-square object-cover" /></li>
      <li className="w-full"><img src="/assets/img-3.jpg" alt="Image 3" className="w-full aspect-square object-cover" /></li>
      <li className="w-full"><img src="/assets/img-4.jpg" alt="Image 1" className="w-full aspect-square object-cover" /></li>
      <li className="w-full"><img src="/assets/img-11.jpg" alt="Image 2" className="w-full aspect-square object-cover" /></li>
      <li className="w-full"><img src="/assets/img-14.jpg" alt="Image 3" className="w-full aspect-square object-cover" /></li>
      <li className="w-full"><img src="/assets/img-7.jpg" alt="Image 1" className="w-full aspect-square object-cover" /></li>
      <li className="w-full"><img src="/assets/img-8.jpg" alt="Image 2" className="w-full aspect-square object-cover" /></li>
      <li className="w-full"><img src="/assets/img-12.jpg" alt="Image 3" className="w-full aspect-square object-cover" /></li>
      </ul>
</div>
</div>
  );
};

<div className="w-full border-b border-black my-2"></div>

export default Home;