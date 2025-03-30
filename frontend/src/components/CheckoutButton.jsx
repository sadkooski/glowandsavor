// import React from "react";

// const CheckoutButton = ({ email, phone }) => {
//     const handleCheckout = async () => {
//         // Wysyłamy dane do backendu
//         const response = await fetch("http://localhost:5000/api/payments/create-order", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ email, phone, amount: 5000 }), // 50.00 PLN
//         });

//         // Upewnij się, że odpowiedź zawiera `redirectUrl`
//         const { redirectUrl } = await response.json();
//         if (redirectUrl) {
//             window.location.href = redirectUrl; // Przekierowanie na stronę płatności PayU
//         } else {
//             console.error("Brak URL do przekierowania:", response);
//         }
//     };

//     return (
//         <button
//             onClick={handleCheckout}
//             className="bg-green-500 text-white p-4 rounded-lg mt-5">
//             Kup teraz – 50 PLN
//         </button>
//     );
// };

// export default CheckoutButton;