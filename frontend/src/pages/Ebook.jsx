// import React, { useState } from "react";
// import CheckoutButton from "../components/CheckoutButton";

// const Ebook = () => {
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");

//     return (
//     <div className="w-full min-h-screen flex flex-col items-center justify-center p-5">
//         <h2 className="text-5vw font-bold">Kup E-booka</h2>
//         <img src="/assets/img-9.jpg" alt="E-book" className="w-1/3 my-5" />
//         <p className="text-2vw text-center max-w-2xl">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum id sapiente error fugiat voluptates excepturi molestiae dolore cupiditate consectetur molestias voluptas maiores, harum itaque. Iste unde dolore assumenda a.
//         </p>

//         {/* Formularz z danymi użytkownika */}
//         <input
//             type="email"
//             placeholder="Podaj email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mb-4 p-2"
//         />
//         <input
//             type="tel"
//             placeholder="Podaj numer telefonu"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="mb-4 p-2"
//         />
        
//         <CheckoutButton email={email} phone={phone} />
//     </div>
//     );
// };

// export default Ebook;