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
];

let isPanning = false;
let startX, startY;
let currentQuestionIndex = -1;

let mouseX, mouseY;  // Az egér koordinátái

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
    const markerData = `{ id: "marker5", x: ${mouseX}, y: ${mouseY} }`;  // Formázott szöveg
    navigator.clipboard.writeText(markerData).then(() => {
      alert("Koordináták másolva a vágólapra!");
    }).catch(err => {
      alert("Hiba történt a vágólapra másolás közben.");
      console.error(err);
    });
  }
});

  

// Pontok hozzáadása a térképhez
markerPositions.forEach(({ id, x, y }) => {
    const marker = document.createElement("div");
    marker.id = id;
    marker.classList.add("marker-button");
    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;
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

// Pontok pozíciójának frissítése
function updateMarkerPositions() {
  markerPositions.forEach(({ id, x, y }) => {
    const marker = document.getElementById(id);
    const scaledX = x * scale + translateX;
    const scaledY = y * scale + translateY;
    marker.style.left = `${scaledX}px`;
    marker.style.top = `${scaledY}px`;
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
  const scaleFactor = 1.1;
  const oldScale = scale;

  if (e.deltaY < 0) {
    scale *= scaleFactor;
  } else {
    scale /= scaleFactor;
  }

  const rect = mapContainer.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  translateX -= mouseX / oldScale - mouseX / scale;
  translateY -= mouseY / oldScale - mouseY / scale;

  updateTransform();
});

// Indítás
askNextQuestion();
updateTransform();
