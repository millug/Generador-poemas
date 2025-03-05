import React, { useState, useEffect } from "react";
import "./styles.css"; // Importamos los estilos

const API_KEY = "AIzaSyB9N0QrJCagGjrYOm6lcAILEFtvkErFJ_E";

const PoemGenerator = () => {
    const [word, setWord] = useState("");  // Maneja múltiples palabras
    const [genre, setGenre] = useState("");
    const [customGenre, setCustomGenre] = useState("");  // Estado para el género personalizado
    const [poem, setPoem] = useState("");
    const [error, setError] = useState("");


    const generatePoem = async () => {
        const finalGenre = genre === "otro" ? customGenre : genre; // Usamos el género personalizado si corresponde

        if (!word || !finalGenre) {
            setError("Por favor, ingresa palabras y elige un género.");
            return;
        }

        // Validar que el número de palabras no sea mayor a 10
        const wordsArray = word.trim().split(" ");
        if (wordsArray.length > 10) {
            setError("Solo se permiten un máximo de 10 palabras.");
            return;
        }


        // Validar que el número de palabras no sea mayor a 5 para 'customGenre'
        const customGenreArray = customGenre.trim().split(" ");
        if (customGenreArray.length > 5) {
            setError("El género personalizado no puede tener más de 5 palabras.");
            return;
        }


        setError("");

        const requestBody = {
            contents: [{ parts: [{ text: `Escribe un poema ${finalGenre} basado en las palabras '${word}'.` }] }]
        };

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(requestBody),
                }
            );
            const data = await response.json();
            setPoem(data.candidates?.[0]?.content?.parts?.[0]?.text || "No se pudo generar el poema.");
        } catch (error) {
            setPoem("Error al generar el poema. Inténtalo de nuevo.");
        }
    };

    useEffect(() => {
        const createHearts = () => {
            for (let i = 0; i < 15; i++) {
                let heart = document.createElement("div");
                heart.classList.add("heart");
                document.body.appendChild(heart);
                heart.style.left = Math.random() * 100 + "vw";
                heart.style.animationDuration = Math.random() * 2 + 3 + "s";
                setTimeout(() => heart.remove(), 5000);
            }
        };
        const interval = setInterval(createHearts, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <h1>GENERADOR DE POEMAS</h1>
            <input
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Escribe hasta diez palabras clave..."
                maxLength="100" // Puedes ajustarlo para permitir más caracteres si es necesario
            />
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="" disabled>Elige el género...</option>
                <option value="triste">Triste</option>
                <option value="alegre">Alegre</option>
                <option value="amor">Amor</option>
                <option value="desamor">Desamor</option>
                <option value="reflexiva">Reflexivo</option>
                <option value="comica">Cómico</option>
                <option value="odio">Odio</option>
                <option value="otro">Otro...</option> {/* Opción para ingresar un género personalizado */}
            </select>
            {genre === "otro" && (
                <input
                    type="text"
                    value={customGenre}
                    onChange={(e) => setCustomGenre(e.target.value)}
                    placeholder="Escribe el género... (máx. cinco palabras)"
                />
            )}
            <button onClick={generatePoem}>GENERAR POEMA</button>
            {error && <p className="error">{error}</p>}
            <div className="poem-box">{poem}</div>
        </div>
    );
};

export default PoemGenerator;