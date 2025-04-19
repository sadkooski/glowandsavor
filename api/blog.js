export default async function handler(req, res) {
    if (req.method === "GET") {
      // Tutaj możesz podłączyć MongoDB, np. MongoDB Atlas, i pobierać artykuły
      return res.status(200).json([{ title: "Przykładowy artykuł" }]);
    }
  
    if (req.method === "POST") {
      const { title, content } = req.body;
  
      if (!title || !content) {
        return res.status(400).json({ message: "Brakuje tytułu lub treści" });
      }
  
      // Tutaj np. zapisz do MongoDB (jeśli chcesz używać bazy)
      return res.status(201).json({ message: "Artykuł zapisany!" });
    }
  
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Metoda ${req.method} niedozwolona`);
  }