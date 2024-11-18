const mapContainer = document.getElementById("map-container");
const map = document.getElementById("map");
const navbar = document.getElementById("navbar");

let scale = 1;
let translateX = 0;
let translateY = 0;

const markerPositions = [
  { id: "natex", x: 374, y: 400 },
  { id: "tekno", x: 351, y: 444 },
  { id: "kuvex", x: 360, y: 342 },
  { id: "vamog", x: 414, y: 387 },
  { id: "xomba", x: 512, y: 401 },
  { id: "gasna", x: 285, y: 342 },
  { id: "begla", x: 279, y: 367 },
  { id: "pesat", x: 264, y: 408 },
  { id: "abeti", x: 253, y: 422 },
  { id: "sopro", x: 201, y: 454 },
  { id: "arsin", x: 189, y: 461 },
  { id: "stein", x: 149, y: 510 },
  { id: "sasal", x: 116, y: 561 },
  { id: "sunis", x: 81, y: 611 },
  { id: "gotar", x: 48, y: 663 },
  { id: "dimlo", x: 93, y: 781 },
  { id: "nekin", x: 160, y: 883 },
  { id: "kopry", x: 223, y: 945 },
  { id: "vebal", x: 305, y: 1041 },
  { id: "osduk", x: 517, y: 1118 },
  { id: "bareb", x: 588, y: 1137 },
  { id: "babit", x: 720, y: 1071 },
  { id: "tondo", x: 829, y: 1029 },
  { id: "kerop", x: 916, y: 978 },
  { id: "parak", x: 1017, y: 985 },
  { id: "inved", x: 1095, y: 988 },
  { id: "mopug", x: 1173, y: 985 },
  { id: "tegri", x: 1274, y: 946 },
  { id: "deget", x: 1312, y: 862 },
  { id: "budop", x: 1368, y: 789 },
  { id: "megik", x: 1454, y: 597 },
  { id: "narka", x: 1453, y: 581 },
  { id: "bador", x: 1512, y: 462 },
  { id: "karil", x: 1591, y: 377 },
  { id: "gemto", x: 1623, y: 254 },
  { id: "lonla", x: 1554, y: 181 },
  { id: "kenin", x: 1460, y: 175 },
  { id: "keked", x: 1302, y: 121 },
  { id: "abuli", x: 1108, y: 136 },
  { id: "pitok", x: 1080, y: 196 },
  { id: "demop", x: 1003, y: 251 },
  { id: "edemu", x: 942, y: 249 },
  { id: "litku", x: 892, y: 229 },
  { id: "amrax", x: 834, y: 281 },
  { id: "balap", x: 806, y: 290 },
  { id: "patak", x: 776, y: 288 },
  { id: "badov", x: 701, y: 307 },
  { id: "ergom", x: 679, y: 385 },
  { id: "alamu", x: 579, y: 408 },



];

// Kezdeti pozíció és zoom értékek
const initialDesktopSettings = { x: 967, y: 594, scale: 0.8 };
const initialMobileSettings = { x: 967, y: 594, scale: 0.3 };

function setInitialView() {
  const isMobile = window.innerWidth <= 768; // Mobilnak tekintjük, ha a szélesség 768px vagy kisebb

  const settings = isMobile ? initialMobileSettings : initialDesktopSettings;
  scale = settings.scale;

  // Számítsuk ki az eltolásokat
  const rect = mapContainer.getBoundingClientRect();
  translateX = rect.width / 2 - settings.x * scale;
  translateY = rect.height / 2 - settings.y * scale;

  updateTransform(); // Frissítjük a térképet
  updateMarkerPositions(); // Markerek pozíciójának frissítése
}

// Betöltéskor beállítjuk a kezdeti nézetet
document.addEventListener("DOMContentLoaded", () => {
  // Várjuk meg, hogy minden stílus alkalmazva legyen
  setTimeout(setInitialView, 100); // Kis késleltetés a CSS betöltésére
});

let isPanning = false;
let startX, startY;
let currentQuestionIndex = -1;

//Koordináták szerzése

let mouseX, mouseY;  // Az egér koordinátái
let addNo = 1;

// Egér mozgatás esemény
mapContainer.addEventListener("mousemove", (e) => {
  // Az egér pozíciójának frissítése a térképhez igazítva
  const rect = mapContainer.getBoundingClientRect();
  mouseX = (e.clientX - rect.left - translateX) / scale;
  mouseY = (e.clientY - rect.top - translateY) / scale;
});

// Koordináták másolása a vágólapra space lenyomására
document.addEventListener("keydown", (e) => {
  if (e.key === " ") {  // Ha a space billentyűt lenyomják
    const markerData = `{ id: "valami${addNo}", x: ${mouseX}, y: ${mouseY} },`;  // Formázott szöveg
    addNo += 1;
    navigator.clipboard.writeText(markerData).then(() => {
    }).catch(err => {
      alert("Hiba történt a vágólapra másolás közben.");
      console.error(err);
    });
  }
});

//Koordináták szerzésének vége

// Pontok hozzáadása a térképhez
markerPositions.forEach(({ id, x, y }) => {
  const marker = document.createElement("div");
  marker.id = id;
  marker.classList.add("marker-button");
  marker.style.left = `${x}px`;
  marker.style.top = `${y}px`;
  marker.style.width = `${20 * scale}px`; // Marker méretének beállítása a zoom alapján
  marker.style.height = `${20 * scale}px`; // Marker méretének beállítása a zoom alapján
  mapContainer.appendChild(marker);

  // OnClick esemény hozzáadása
  marker.addEventListener("click", () => {
    const clickedId = marker.id;
    console.log(clickedId);
    const correctId = markerPositions[currentQuestionIndex].id;

    if (clickedId === correctId) {
      alert("Helyes!");
      askNextQuestion();
    } else {
      alert("Helytelen!");
    }
  });
});


// Pontok pozíciójának és méretének frissítése
function updateMarkerPositions() {
  markerPositions.forEach(({ id, x, y }) => {
    const marker = document.getElementById(id);
    const scaledX = x * scale + translateX;
    const scaledY = y * scale + translateY;
    marker.style.left = `${scaledX}px`;
    marker.style.top = `${scaledY}px`;
    marker.style.width = `${12 * scale}px`; // Marker méretének frissítése
    marker.style.height = `${12 * scale}px`; // Marker méretének frissítése
  });
}


// Térkép átalakításának frissítése
function updateTransform() {
  map.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  updateMarkerPositions();
}

let remainingQuestions = [...markerPositions];  // A kérdések másolata

// Következő kérdés kiválasztása
function askNextQuestion() {
  if (remainingQuestions.length === 0) {
    // Ha már nincs több kérdés, keverjük össze újra
    remainingQuestions = [...markerPositions];  // Visszaállítjuk az eredeti kérdéseket
    shuffleArray(remainingQuestions);  // Keverjük össze
    alert("Újra kezdjük a kérdéseket!");
  }

  // Válasszunk egy véletlenszerű kérdést a maradék kérdések közül
  const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
  const currentQuestion = remainingQuestions.splice(randomIndex, 1)[0];  // Eltávolítjuk a választott kérdést
  currentQuestionIndex = markerPositions.indexOf(currentQuestion);
  navbar.textContent = `Kérdés: Hol van ${currentQuestion.id}?`;
}

// Keverés függvény
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];  // Elemek csere
  }
}

// Egér mozgatás eseményei
mapContainer.addEventListener("mousedown", (e) => {
  if (e.button === 1) {
    isPanning = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    e.preventDefault();
  }
});

mapContainer.addEventListener("mousemove", (e) => {
  if (!isPanning) return;
  translateX = e.clientX - startX;
  translateY = e.clientY - startY;
  updateTransform();
});

mapContainer.addEventListener("mouseup", (e) => {
  if (e.button === 1) {
    isPanning = false;
  }
});

mapContainer.addEventListener("mouseleave", () => (isPanning = false));

// Érintéses események
mapContainer.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) {
    isPanning = true;
    startX = e.touches[0].clientX - translateX;
    startY = e.touches[0].clientY - translateY;
  }
});

mapContainer.addEventListener("touchmove", (e) => {
  if (!isPanning || e.touches.length !== 1) return;
  translateX = e.touches[0].clientX - startX;
  translateY = e.touches[0].clientY - startY;
  updateTransform();
});

mapContainer.addEventListener("touchend", () => (isPanning = false));

// Zoomolás
mapContainer.addEventListener("wheel", (e) => {
  e.preventDefault();

  const scaleFactor = 1.1; // Zoom faktor
  const rect = mapContainer.getBoundingClientRect();

  // Egér pozíciója a térkép konténeréhez képest
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  // Egér pozíciója az aktuális skálázáshoz igazítva
  const worldX = (mouseX - translateX) / scale;
  const worldY = (mouseY - translateY) / scale;

  // Frissítjük a skálát
  if (e.deltaY < 0) {
    scale *= scaleFactor; // Zoom in
  } else {
    scale /= scaleFactor; // Zoom out
  }

  // Új hely kiszámítása az egér pozíciójához igazítva
  translateX = mouseX - worldX * scale;
  translateY = mouseY - worldY * scale;

  updateTransform();
  updateMarkerPositions(); // Markerek helyének frissítése
});



//Zoomolás telefonon
let lastTouchCenterX = 0;
let lastTouchCenterY = 0;
let lastScale = scale;

mapContainer.addEventListener("touchstart", (e) => {
  if (e.touches.length === 2) {
    // Kezdeti két ujj középpontjának meghatározása
    const x1 = e.touches[0].clientX;
    const y1 = e.touches[0].clientY;
    const x2 = e.touches[1].clientX;
    const y2 = e.touches[1].clientY;

    lastTouchCenterX = (x1 + x2) / 2;
    lastTouchCenterY = (y1 + y2) / 2;

    // Kezdeti távolság
    lastDistance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
});

mapContainer.addEventListener("touchmove", (e) => {
  if (e.touches.length === 2) {
    e.preventDefault();

    const x1 = e.touches[0].clientX;
    const y1 = e.touches[0].clientY;
    const x2 = e.touches[1].clientX;
    const y2 = e.touches[1].clientY;

    // Új két ujj közötti távolság
    const currentDistance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    // Új két ujj középpontjának meghatározása
    const touchCenterX = (x1 + x2) / 2;
    const touchCenterY = (y1 + y2) / 2;

    // Középpont világkoordinátái
    const rect = mapContainer.getBoundingClientRect();
    const worldCenterX = (touchCenterX - rect.left - translateX) / scale;
    const worldCenterY = (touchCenterY - rect.top - translateY) / scale;

    // Zoom mértékének kiszámítása
    const scaleFactor = currentDistance / lastDistance;
    scale *= scaleFactor;

    // Új eltolás kiszámítása
    translateX = touchCenterX - worldCenterX * scale;
    translateY = touchCenterY - worldCenterY * scale;

    lastDistance = currentDistance; // Frissítsük a távolságot
    lastTouchCenterX = touchCenterX;
    lastTouchCenterY = touchCenterY;

    updateTransform(); // Frissítsük a térképet
    updateMarkerPositions(); // Markerek frissítése
  }
});

mapContainer.addEventListener("touchend", (e) => {
  if (e.touches.length < 2) {
    lastDistance = 0; // Reseteljük a távolságot
  }
});



// Indítás
askNextQuestion();
updateTransform();
