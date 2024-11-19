const markerPositions = [
  { id: "natex", x: 374, y: 400 },          { id: "tekno", x: 351, y: 444 },        { id: "kuvex", x: 360, y: 342 },        { id: "vamog", x: 414, y: 387 },
  { id: "xomba", x: 512, y: 401 },          { id: "gasna", x: 285, y: 342 },        { id: "begla", x: 279, y: 367 },        { id: "pesat", x: 264, y: 408 },
  { id: "abeti", x: 253, y: 422 },          { id: "sopro", x: 201, y: 454 },        { id: "arsin", x: 189, y: 461 },        { id: "stein", x: 149, y: 510 },
  { id: "sasal", x: 116, y: 561 },          { id: "sunis", x: 81, y: 611 },         { id: "gotar", x: 48, y: 663 },         { id: "dimlo", x: 93, y: 781 },
  { id: "nekin", x: 160, y: 883 },          { id: "kopry", x: 223, y: 945 },        { id: "vebal", x: 305, y: 1041 },       { id: "osduk", x: 517, y: 1118 },
  { id: "bareb", x: 588, y: 1137 },         { id: "babit", x: 720, y: 1071 },       { id: "tondo", x: 829, y: 1029 },       { id: "kerop", x: 916, y: 978 },
  { id: "parak", x: 1017, y: 985 },         { id: "inved", x: 1095, y: 988 },       { id: "mopug", x: 1173, y: 985 },       { id: "tegri", x: 1274, y: 946 },
  { id: "deget", x: 1312, y: 862 },         { id: "budop", x: 1368, y: 789 },       { id: "megik", x: 1454, y: 597 },       { id: "narka", x: 1453, y: 581 },
  { id: "bador", x: 1512, y: 462 },         { id: "karil", x: 1591, y: 377 },       { id: "gemto", x: 1623, y: 254 },       { id: "lonla", x: 1554, y: 181 },
  { id: "kenin", x: 1460, y: 175 },         { id: "keked", x: 1302, y: 121 },       { id: "abuli", x: 1108, y: 136 },       { id: "pitok", x: 1080, y: 196 },
  { id: "demop", x: 1003, y: 251 },         { id: "edemu", x: 942, y: 249 },        { id: "litku", x: 892, y: 229 },        { id: "amrax", x: 834, y: 281 },
  { id: "balap", x: 806, y: 290 },          { id: "patak", x: 776, y: 288 },        { id: "badov", x: 701, y: 307 },        { id: "ergom", x: 679, y: 385 },
  { id: "alamu", x: 579, y: 408 },          { id: "subes", x: 353, y: 519 },        { id: "sirdu", x: 327, y: 579 },        { id: "ogvun", x: 460, y: 535 },
  { id: "zolku", x: 449, y: 472 },          { id: "nohat", x: 146, y: 735 },        { id: "nalox", x: 195, y: 715 },        { id: "sunor", x: 311, y: 862 },
  { id: "olati", x: 362, y: 677 },          { id: "nikab", x: 375, y: 813 },        { id: "sogmo", x: 409, y: 817 },        { id: "pidon", x: 502, y: 998 },
  { id: "okora", x: 583, y: 764 },          { id: "gitas", x: 536, y: 658 },        { id: "gilep", x: 560, y: 502 },        { id: "vajdi", x: 566, y: 541 },
  { id: "ulzak", x: 634, y: 681 },          { id: "duzla", x: 674, y: 694 },        { id: "fahaz", x: 754, y: 721 },        { id: "gazda", x: 841, y: 752 },
  { id: "ebamo", x: 890, y: 741 },          { id: "kezal", x: 1049, y: 624 },       { id: "vetik", x: 1049, y: 552 },       { id: "beted", x: 1047, y: 288 },
  { id: "gelka", x: 1046, y: 276 },         { id: "witri", x: 1019, y: 261 },       { id: "bodza", x: 603, y: 474 },        { id: "torno", x: 618, y: 481 },
  { id: "pucog", x: 641, y: 527 },          { id: "vebos", x: 652, y: 567 },        { id: "jozep", x: 678, y: 610 },        { id: "rakfa", x: 608, y: 607 },
  { id: "pusta, PTB VOR", x: 678, y: 624 }, { id: "epari", x: 738, y: 429 },        { id: "etaro", x: 743, y: 497 },        { id: "balux", x: 776, y: 555 },
  { id: "dodar", x: 874, y: 602 },          { id: "ilhak", x: 835, y: 691 },        { id: "babox", x: 912, y: 718 },        { id: "erguz", x: 944, y: 662 },
  { id: "abony", x: 986, y: 581 },          { id: "zurfa", x: 952, y: 535 },        { id: "norah", x: 943, y: 455 },        { id: "nipur", x: 993, y: 418 },
  { id: "lahor", x: 923, y: 375 },          { id: "boksi", x: 949, y: 814 },        { id: "oslen", x: 1083, y: 779 },       { id: "binku", x: 1106, y: 707 },
  { id: "uvera", x: 1098, y: 607 },         { id: "mavir", x: 949, y: 900 },        { id: "eboro", x: 990, y: 916 },        { id: "verig", x: 1421, y: 610 },
  { id: "perit", x: 1390, y: 385 },         { id: "kovek", x: 1114, y: 370 },       { id: "mizol", x: 1048, y: 239 },       { id: "rigsa", x: 1173, y: 253 },
  { id: "ibliz", x: 1185, y: 199 },         { id: "romka", x: 1439, y: 226 },       { id: "kusis", x: 1576, y: 349 },       { id: "GYR VOR", x: 429, y: 434 },
  { id: "SVR VOR", x: 521, y: 740 },        { id: "BUD VOR", x: 805, y: 516 },      { id: "TPS VOR", x: 854, y: 501 },      { id: "MNR VOR", x: 844, y: 558 },
  { id: "BKS VOR", x: 1261, y: 751 },       { id: "SAG VOR", x: 1234, y: 309 },     { id: "BUG VOR", x: 910, y: 800 }
];

const mapContainer = document.getElementById("map-container");
const map = document.getElementById("map");
const NavBarQuestion = document.getElementById("NavBarQuestion");
const NavBarCounter = document.getElementById("NavBarCounter");
const NavBarErrors = document.getElementById("NavBarErrors");

let scale = 1;
let translateX = 0;
let translateY = 0;
let errorCounter = 0;
let errorCounterList = [];

// Kezdeti pozíció és zoom értékek
const initialDesktopSettings = { x: 967, y: 594, scale: 0.8 };
const initialMobileSettings = { x: 867, y: 594, scale: 0.2 };

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
  updateCounters();
});

let isPanning = false;
let startX, startY;
let currentQuestionIndex = -1;
let questionNumber = 1, errors = 0;

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
      questionNumber += 1;
      askNextQuestion();
      updateCounters();
    } else {
      if (!errorCounterList.includes(clickedId) && errorCounter < 2) {
        errors += 1;
        errorCounter += 1;
        errorCounterList.push(clickedId);
        updateCounters();

        //ide kell a villogás
        const clickedMarker = document.getElementById(clickedId);
        clickedMarker.style.backgroundColor = "#c20202";
        clickedMarker.style.borderColor = "#990000";
        setTimeout(() => {
          clickedMarker.style.borderColor = "#01702a";
          clickedMarker.style.backgroundColor = "#00bd46";
        }, 330);
        setTimeout(() => {
          clickedMarker.style.backgroundColor = "#c20202";
          clickedMarker.style.borderColor = "#990000";
        }, 650);
        setTimeout(() => {
          clickedMarker.style.borderColor = "#990000";
          clickedMarker.style.backgroundColor = "#00bd46";
        }, 900);
        //----
      } else {
        console.log("Ez a pont már szerepel az errorCounterList-ben, vagy az errorCounter meghaladta a limitet.");
      }
    }
  });
});

let remainingQuestions = [...markerPositions];  // A kérdések másolata

// Következő kérdés kiválasztása
function askNextQuestion() {
  if (remainingQuestions.length === 0) {
    // Ha már nincs több kérdés, keverjük össze újra
    remainingQuestions = [...markerPositions];  // Visszaállítjuk az eredeti kérdéseket
    shuffleArray(remainingQuestions);  // Keverjük össze
    questionNumber = 1;
    errors = 0;
    updateCounters();
    alert("Újra kezdjük a kérdéseket!");
  }

  // Válasszunk egy véletlenszerű kérdést a maradék kérdések közül
  const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
  const currentQuestion = remainingQuestions.splice(randomIndex, 1)[0];  // Eltávolítjuk a választott kérdést
  currentQuestionIndex = markerPositions.indexOf(currentQuestion);
  NavBarQuestion.textContent = currentQuestion.id.toUpperCase();
}

// Keverés függvény
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];  // Elemek csere
  }
}

function updateCounters(){
  NavBarCounter.innerText = questionNumber + " / " + markerPositions.length;
  NavBarErrors.innerText = "Errors: " + errors;
}

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
    // Egérpozíció kerekítése
    const roundedMouseX = Math.round(mouseX);
    const roundedMouseY = Math.round(mouseY);
    const markerData = `{ id: "valami${addNo}", x: ${roundedMouseX}, y: ${roundedMouseY} },`;  // Formázott szöveg
    addNo += 1;
    navigator.clipboard.writeText(markerData).then(() => {
    }).catch(err => {
      alert("Hiba történt a vágólapra másolás közben.");
      console.error(err);
    });
  }
});

//Koordináták szerzésének vége

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
