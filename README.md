# Generador de poemas 🩷

Este es un proyecto de React que permite crear poemas únicos a partir de palabras clave y un género seleccionado por el usuario. Utiliza la API de Google Gemini para generar contenido con inteligencia artificial.

## 🌸 Características

- 📝 Generación de poemas inspiradores basados en palabras clave.
- 💗 Animación de corazones flotantes para una experiencia encantadora.
- 🎀 Opción de elegir entre varios géneros o agregar un género personalizado.
- 🚀 Límite de palabras clave a 10 para evitar textos excesivos.
- 🔥 Validación para que los géneros personalizados no superen 5 palabras.
- 📡 Comunicación con la API de Google Gemini para obtener contenido generado dinámicamente.
- 🎭 Diferentes emociones reflejadas en los poemas según el género elegido.

## 🛠️ Tecnologías utilizadas

- 💻 React.js
- 🔄 React Router
- 🤖 API de Google Gemini
- 🎨 HTML5, CSS3

## 📂 Estructura del proyecto

```
📦 Generador-poemas
 ┣ 📂 src
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.js
 ┃ ┣ 📜 PoemGenerator.js
 ┃ ┣ 📜 styles.css
 ┣ 📂 public
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 favicon.png
```

## ⭐ Instalación y uso

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/generador-de-poemas.git
cd generador-de-poemas
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar API Key
Reemplaza la clave de API en `PoemGenerator.js` por tu propia clave de Google Gemini:
```js
const API_KEY = "TU_API_KEY";
```

### 4️⃣ Ejecutar la aplicación
```bash
npm start
```

La aplicación se ejecutará en `http://localhost:3000/`.

## 📜 Código destacado

### 📝 Generación del poema con la API de Google Gemini
```js
const requestBody = {
    contents: [{ parts: [{ text: `Escribe un poema ${finalGenre} basado en las palabras '${word}'.` }] }]
};

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
```

### 💕 Animación de corazones flotantes
```js
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
```

## 🌷 Despliegue en GitHub Pages
La aplicación está disponible en el siguiente enlace:
[Generador de Poemas en GitHub Pages](https://millug.github.io/Generador-poemas/) 💌

## ✨ Capturas de pantalla del proyecto en uso

![image](https://github.com/user-attachments/assets/a09998dd-abbe-4d2a-ab33-a35862fa1c1a)
![image](https://github.com/user-attachments/assets/4e46191c-a9ac-41f8-a3eb-3f61a0af42de)
![image](https://github.com/user-attachments/assets/ecd2620a-ff23-4aed-b209-fcd2d6191ab4)




