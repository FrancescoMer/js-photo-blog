// main.js
const ENDPOINT = "https://lanciweb.github.io/demo/api/pictures/";

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  if (!gallery) return console.error(".gallery non trovata");

  fetch(ENDPOINT)
    .then(res => res.json())
    .then(data => {
      console.log("Dati completi dall'API:", data);
      console.log("Primo elemento:", data[0]);
      console.log("Chiavi disponibili:", Object.keys(data[0]));

      data.forEach(item => {
        // Sostituisci 'image' con la chiave corretta dopo averla vista in console
        const imageUrl = item.image     // se la tua chiave si chiama 'image'
                       || item.url       // oppure 'url'
                       || item.src       // oppure 'src'
                       || item.imageUrl  // oppure 'imageUrl'
                       || item.thumb;    // oppure 'thumb'
        gallery.innerHTML += `
          <div class="photo-card">
            <div class="pin"></div>
            <img src="${imageUrl}" alt="${item.title}">
            <div class="caption">${item.title}</div>
          </div>
        `;
      });
    })
    .catch(err => console.error("Errore nel caricamento delle immagini:", err));
});
