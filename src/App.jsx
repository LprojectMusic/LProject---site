import { useState } from "react";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import "./App.css";

function App() {
  const [concerts] = useState([
    { date: "2025-11-10", location: "Bordeaux, Rock School Barbey" },
    { date: "2025-12-05", location: "Toulouse, Le Bikini" },
    { date: "2026-01-15", location: "Paris, La Maroquinerie" },
  ]);

  const today = new Date();
  const upcoming = concerts.filter(c => new Date(c.date) >= today)
                           .sort((a, b) => new Date(a.date) - new Date(b.date));
  const [nextConcert, ...otherConcerts] = upcoming;

  return (
    <main className="min-h-screen text-white bg-black">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">L PROJECT</h1>
        <p className="text-sm mt-2">Hip Hop Minded Music</p>
      </header>

      <section className="text-center py-6">
        <h2 className="text-2xl font-semibold mb-2">Écouter & Regarder</h2>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://www.youtube.com/@LProjectmusic" target="_blank" rel="noreferrer">
            <FaYoutube className="hover:text-red-500" />
          </a>
          <a href="https://www.instagram.com/lproject33" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-500" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61550240981778" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-blue-500" />
          </a>
        </div>
      </section>

      <section className="text-center py-6">
        <h2 className="text-2xl font-semibold mb-2">Prochain concert</h2>
        {nextConcert && <p>{new Date(nextConcert.date).toLocaleDateString()} – {nextConcert.location}</p>}
        {otherConcerts.length > 0 && (
          <>
            <h3 className="mt-4 font-bold">Autres dates</h3>
            <ul>
              {otherConcerts.map((c, i) => (
                <li key={i}>{new Date(c.date).toLocaleDateString()} – {c.location}</li>
              ))}
            </ul>
          </>
        )}
      </section>

      <footer className="text-center py-4 text-sm">
        <p>&copy; {new Date().getFullYear()} L Project</p>
      </footer>
    </main>
  );
}

export default App;