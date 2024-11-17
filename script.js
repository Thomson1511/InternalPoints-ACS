const mapContainer = document.getElementById("map-container");
const map = document.getElementById("map");
const navbar = document.getElementById("navbar");

let scale = 1;
let translateX = 0;
let translateY = 0;

const markerPositions = [
  { id: "marker1", x: 500, y: 300 },
  { id: "marker2", x: 800, y: 400 },
  { id: "marker3", x: 300, y: 600 },
  { id: "marker4", x: 1000, y: 200 },
  { id: "marker5", x: 1200, y: 700 },
];

let isPanning = false;
let startX, startY;
let currentQuestionIndex = -1;

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

// Következő kérdés kiválasztása
function askNextQuestion() {
  if (markerPositions.length === 0) {
    navbar.textContent = "Minden pontot megválaszoltál!";
    return;
  }

  currentQuestionIndex = Math.floor(Math.random() * markerPositions.length);
  navbar.textContent = `Kérdés: Hol van ${markerPositions[currentQuestionIndex].id}?`;
}

// Pont kattintási esemény kezelése
/*mapContainer.addEventListener("click", (e) => {
    // A legközelebbi `marker-button` osztályú elem keresése
    const clickedMarker = e.target.closest(".marker-button");
    const clickedElement = e.target;
  
    console.log(clickedMarker);
    console.log(clickedElement);
    // Ha nem egy markerre kattintottak, nincs teendő
    //if (!clickedMarker) return;
  
    const clickedId = clickedMarker.id;
    const correctId = markerPositions[currentQuestionIndex].id;
  
    if (clickedId === correctId) {
      alert("Helyes!");
      askNextQuestion();
    } else {
      alert("Helytelen!");
    }
  });*/
  

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
