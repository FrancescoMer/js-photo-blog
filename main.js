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
        const imageUrl = item.image     
                       || item.url       
                       || item.src       
                       || item.imageUrl  
                       || item.thumb;   
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


const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

// Mostra overlay (puoi collegare questo a un click su immagine)
function showOverlay(imageSrc) {
  const img = overlay.querySelector('img');
  img.src = imageSrc;
  overlay.classList.remove('hidden');
}

// Chiudi overlay
closeBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

// Esempio: cliccando sulla prima foto si apre l’overlay
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.gallery')?.addEventListener('click', e => {
    const img = e.target.closest('img');
    if (img) {
      showOverlay(img.src);
    }
  });
});
