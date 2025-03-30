import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import axios from "axios";
import nodemailer from "nodemailer";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Testowe API
app.get("/", (req, res) => {
    res.send("Serwer działa!");
});

app.use("/api/blog", blogRoutes);

// Konfiguracja transportera dla nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail", // Możesz użyć innego serwisu, np. SendGrid, Mailgun, jeśli wolisz
    auth: {
      user: process.env.EMAIL_USER, // Twoja skrzynka e-mail (np. Gmail)
      pass: process.env.EMAIL_PASS, // Hasło do tej skrzynki (lub hasło aplikacyjne)
    },
});

// Endpoint do obsługi wysyłania e-maila
app.post("/api/send-email", (req, res) => {
    const { name, email, title, message } = req.body;

      // Walidacja danych
    if (!name || !email || !title || !message) {
        return res.status(400).send("Wszystkie pola są wymagane!");
    }

    // Ustawienia wiadomości e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER, // E-mail nadawcy
      to: process.env.EMAIL_USER, // E-mail odbiorcy (możesz podać swój adres e-mail)
      subject: `Nowa wiadomość od ${name}: ${title}`, // Temat e-maila
      text: `Wiadomość od: ${name} (${email})\n\n${message}`, // Treść e-maila
    };

    // Wysłanie e-maila
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("Błąd podczas wysyłania e-maila:", error);
        return res.status(500).send(error.toString()); // W przypadku błędu
    }
      res.status(200).send("Wiadomość została wysłana!"); // Jeśli wszystko jest OK
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serwer działa na http://localhost:${PORT}`));






// Połączenie z MongoDB
// mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => console.log("✅ Połączono z MongoDB"))
//     .catch((err) => console.error("❌ Błąd połączenia z MongoDB", err));

// // 🔹 PayU - API CONFIG
// const PAYU_API_URL = "https://secure.snd.payu.com/api/v2_1/orders";
// const PAYU_CLIENT_ID = process.env.PAYU_CLIENT_ID;
// const PAYU_CLIENT_SECRET = process.env.PAYU_CLIENT_SECRET;
// const PAYU_POS_ID = process.env.PAYU_POS_ID;
// const PAYU_SECOND_KEY = process.env.PAYU_SECOND_KEY;
// const PAYU_NOTIFY_URL = "http://localhost:5000/payment-notify"; // webhook

// 🔹 Pobieranie tokena autoryzacyjnego
// async function getAuthToken() {
//     try {
//         const response = await axios.post(
//             "https://secure.snd.payu.com/pl/standard/user/oauth/authorize",
//             new URLSearchParams({
//                 grant_type: "client_credentials",
//                 client_id: PAYU_CLIENT_ID,
//                 client_secret: PAYU_CLIENT_SECRET,
//             }),
//             { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
//         );

//         return response.data.access_token;
//     } catch (error) {
//         console.error("❌ Błąd autoryzacji PayU", error);
//         throw error;
//     }
// }

// app.post("/api/payments/create-order", async (req, res) => {
//     try {
//         const token = await getAuthToken();
//         const order = {
//             notifyUrl: PAYU_NOTIFY_URL,
//             customerIp: req.ip || "127.0.0.1",
//             merchantPosId: PAYU_POS_ID,
//             description: "E-book: Jak stworzyć stronę w React",
//             currencyCode: "PLN",
//             totalAmount: req.body.amount * 100, // PayU wymaga kwoty w groszach!
//             buyer: {
//                 email: req.body.email,
//                 phone: req.body.phone || "123456789",
//                 firstName: req.body.firstName,
//                 lastName: req.body.lastName || "",
//                 language: "pl",
//             },
//             products: [
//                 {
//                     name: "E-book: Jak stworzyć stronę w React",
//                     unitPrice: req.body.amount * 100,
//                     quantity: 1,
//                 },
//             ],
//         };

//         const response = await axios.post(PAYU_API_URL, order, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 "Content-Type": "application/json",
//             },
//         });

//         // Sprawdź, co zwraca odpowiedź
//         console.log(response.data); // sprawdź, czy jest `redirectUri`

//         // Upewnij się, że odpowiedź zawiera `redirectUri`
//         if (response.data && response.data.redirectUri) {
//             res.json({ redirectUrl: response.data.redirectUri });
//         } else {
//             res.status(500).json({ error: "Nie udało się uzyskać adresu URL do płatności" });
//         }
//     } catch (error) {
//         console.error("❌ Błąd podczas tworzenia zamówienia", error);
//         res.status(500).json({ error: error.message });
//     }
// });

// 🔹 Webhook do obsługi potwierdzeń płatności
// app.post("/payment-notify", (req, res) => {
//     console.log("🔔 Webhook PayU:", req.body);
//     res.sendStatus(200);
// });



