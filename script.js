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
  { id: "alamu", x: 579, y: 408 },                  { id: "gilep", x: 560, y: 502 },        { id: "vajdi", x: 566, y: 541 },
  { id: "ulzak", x: 634, y: 681 },          { id: "duzla", x: 674, y: 694 },        { id: "fahaz", x: 754, y: 721 },        { id: "gazda", x: 841, y: 752 },
  { id: "ebamo", x: 890, y: 741 },          { id: "kezal", x: 1049, y: 624 },       { id: "vetik", x: 1049, y: 552 },       { id: "beted", x: 1047, y: 288 },
  { id: "gelka", x: 1046, y: 276 },         { id: "witri", x: 1019, y: 261 },       { id: "bodza", x: 603, y: 474 },        { id: "torno", x: 618, y: 481 },
  { id: "pucog", x: 641, y: 527 },          { id: "vebos", x: 652, y: 567 },        { id: "jozep", x: 678, y: 610 },        { id: "rakfa", x: 608, y: 607 },
  { id: "pusta, PTB VOR", x: 678, y: 624 }, { id: "epari", x: 738, y: 429 },        { id: "etaro", x: 743, y: 497 },        { id: "balux", x: 776, y: 555 },
  { id: "dodar", x: 874, y: 602 },          { id: "ilhak", x: 835, y: 691 },        { id: "babox", x: 912, y: 718 },        { id: "erguz", x: 944, y: 662 },
  { id: "abony", x: 986, y: 581 },          { id: "zurfa", x: 952, y: 535 },        { id: "norah", x: 943, y: 455 },        { id: "nipur", x: 993, y: 418 },
  { id: "lahor", x: 923, y: 375 },          { id: "boksi", x: 949, y: 814 },        { id: "oslen", x: 1083, y: 779 },       { id: "binku", x: 1106, y: 707 },
  { id: "uvera", x: 1098, y: 607 }, { id: "BUG VOR", x: 910, y: 800 }, { id: "BUD VOR", x: 805, y: 516 },      { id: "TPS VOR", x: 854, y: 501 },      { id: "MNR VOR", x: 844, y: 558 },  { id: "subes", x: 353, y: 519 },        { id: "sirdu", x: 327, y: 579 },        { id: "ogvun", x: 460, y: 535 },
  { id: "zolku", x: 449, y: 472 },          { id: "nohat", x: 146, y: 735 },        { id: "nalox", x: 195, y: 715 },        { id: "sunor", x: 311, y: 862 },
  { id: "olati", x: 362, y: 677 },          { id: "nikab", x: 375, y: 813 },        { id: "sogmo", x: 409, y: 817 },        { id: "pidon", x: 502, y: 998 },
  { id: "okora", x: 583, y: 764 },          { id: "gitas", x: 536, y: 658 },         { id: "mavir", x: 949, y: 900 },        { id: "eboro", x: 990, y: 916 },        { id: "verig", x: 1421, y: 610 },
  { id: "perit", x: 1390, y: 385 },         { id: "kovek", x: 1114, y: 370 },       { id: "mizol", x: 1048, y: 239 },       { id: "rigsa", x: 1173, y: 253 },
  { id: "ibliz", x: 1185, y: 199 },         { id: "romka", x: 1439, y: 226 },       { id: "kusis", x: 1576, y: 349 },       { id: "GYR VOR", x: 429, y: 434 },
  { id: "SVR VOR", x: 521, y: 740 },        
  { id: "BKS VOR", x: 1261, y: 751 },       { id: "SAG VOR", x: 1234, y: 309 }   
];

function logFunctionCall(functionName) {
  console.log(`${functionName}`);
}


const mapContainer = document.getElementById("map-container");
const map = document.getElementById("map");
const NavBarQuestion = document.getElementById("NavBarQuestion");
const NavBarCounter = document.getElementById("NavBarCounter");
const NavBarErrors = document.getElementById("NavBarErrors");

document.addEventListener('keydown', function (event) {
  if (event.key === 'h'){
    showHint();
  }
});

let scale = 1;
let translateX = 0;
let translateY = 0;
let errorCounter = 0;
let errorCounterList = [];

const initialDesktopSettings = { x: 967, y: 594, scale: 0.8 };
const initialLaptopSettings = { x: 967, y: 580, scale: 0.45 };
const initialMobileSettings = { x: 867, y: 594, scale: 0.2 };

function setInitialView() {
  //logFunctionCall("setInitialView");
  const isMobile = window.innerWidth <= 768;
  const isLaptop = window.innerWidth > 768 && window.innerWidth < 1300;

  let settings;

  if(isMobile){
    settings = initialMobileSettings;
  }
  else if(isLaptop){
    settings = initialLaptopSettings;
  }
  else{
    settings = initialDesktopSettings;
  }

  scale = settings.scale;

  // Számítsuk ki az eltolásokat
  const rect = mapContainer.getBoundingClientRect();
  translateX = rect.width / 2 - settings.x * scale;
  translateY = rect.height / 2 - settings.y * scale;

  updateTransform();
  updateMarkerPositions();
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    setInitialView();
    updateMarkers();
    updateCounters();
    askNextQuestion();
}, 100);
});

let isPanning = false;
let startX, startY;
let currentQuestionIndex = -1;
let questionNumber = 1, errors = 0;
let currentQuestion = "";
let lastMistakeMarker = "";
let lastMistakeIndex = 999;

function findNearestMarker(clickX, clickY) {
  //logFunctionCall("findNearestMarker");
  let nearestMarker = null;
  let minDistance = Infinity;
  const threshold = 15;

  markerPositions.forEach(({ id, x, y }) => {
    const distance = Math.sqrt((clickX - x) ** 2 + (clickY - y) ** 2);
    if (distance < minDistance && distance <= threshold) {
      minDistance = distance;
      nearestMarker = { id, x, y };
    }
  });

  if (nearestMarker) {
    if (nearestMarker.id === currentQuestion.id) {
      return nearestMarker;
    }
    if (!filteredMarkers.some((question) => question.id === nearestMarker.id)) {
      return null;
    }
    else{
      return nearestMarker;
    }
  }
}

// Tooltip elem létrehozása
const tooltip = document.createElement("div");
tooltip.id = "marker-tooltip";
tooltip.style.position = "absolute";
tooltip.style.padding = "5px 10px";
tooltip.style.backgroundColor = "#333";
tooltip.style.color = "#fff";
tooltip.style.borderRadius = "5px";
tooltip.style.fontSize = "12px";
tooltip.style.display = "none"; // Alapból rejtve
tooltip.style.zIndex = "10";
mapContainer.appendChild(tooltip);

// Tooltip megjelenítése adott marker fölött
function showTooltip(markerId, x, y) {
  tooltip.textContent = markerId;
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y - 30}px`; // A marker fölött jelenjen meg
  tooltip.style.display = "block";

  setTimeout(() => {
    tooltip.style.display = "none"; // Egy idő után eltűnik
  }, 2000);
}

mapContainer.addEventListener("click", (e) => {
  const rect = mapContainer.getBoundingClientRect();
  const clickX = (e.clientX - rect.left - translateX) / scale;
  const clickY = (e.clientY - rect.top - translateY) / scale;

  const nearestMarker = findNearestMarker(clickX, clickY);

  if (nearestMarker) {
    const clickedMarker = document.getElementById(nearestMarker.id);
    const correctId = markerPositions[currentQuestionIndex].id;

    function basicMarkerColor() {
      //logFunctionCall("basicMarkerColor");
      clickedMarker.style.borderColor = "#4363d8"; 
      clickedMarker.style.backgroundColor = "#000075";
    }

    if (nearestMarker.id === correctId) {
      errorCounterList.forEach((id) => {
        const markerElement = document.getElementById(id);
        if (markerElement) {
          markerElement.style.borderColor = "#4363d8";
          markerElement.style.backgroundColor = "#000075";
        }
      });
      
      let mistakenMarkerElement = null;

      // Ha az index érvényes, csak akkor próbáljuk meg lekérni az elemet
      if (lastMistakeIndex >= 0 && lastMistakeIndex < markerPositions.length) {
        let mistakenMarkerId = markerPositions[lastMistakeIndex].id;
        mistakenMarkerElement = document.getElementById(mistakenMarkerId);

        if (mistakenMarkerElement) { // Ellenőrzés, hogy az elem létezik
          setTimeout(() => {
            mistakenMarkerElement.style.borderColor = "#4363d8";
            mistakenMarkerElement.style.backgroundColor = "#000075";
            mistakenMarkerElement = null; // Referencia törlése
            lastMistakeIndex = 999;
          }, 800);
        }
      }  

      if (errorCounter === 0) {
        clickedMarker.style.borderColor = "#3cb44b";
        clickedMarker.style.backgroundColor = "#3cb44b";
      } else if (errorCounter === 1) {
        clickedMarker.style.borderColor = "#9eba00";
        clickedMarker.style.backgroundColor = "#ffe119";
      } else {
        clickedMarker.style.backgroundColor = "#c20202";
        clickedMarker.style.borderColor = "#990000";
      }
      questionNumber += 1;
      errorCounter = 0;
      errorCounterList = [];
      askNextQuestion();
      updateCounters();
    } else {
      if(errorCounter == 1){
        showHint();
      }
      if (!errorCounterList.includes(nearestMarker.id) && errorCounter < 2) {
        errors += 1;
        errorCounter += 1;
        lastMistakeIndex = markerPositions.findIndex(marker => marker.id === nearestMarker.id);
        errorCounterList.push(nearestMarker.id);
        updateCounters();

        //tooltip megjelenítése

        const clickedMarkerRect = clickedMarker.getBoundingClientRect();
        const markerCenterX = clickedMarkerRect.left + clickedMarkerRect.width / 2;
        const markerCenterY = clickedMarkerRect.top;

        showTooltip(nearestMarker.id, markerCenterX, markerCenterY);

        //vége

        clickedMarker.style.backgroundColor = "#c20202";
        clickedMarker.style.borderColor = "#990000";
        setTimeout(() => {
          basicMarkerColor();
        }, 330);
        setTimeout(() => {
          clickedMarker.style.backgroundColor = "#c20202";
          clickedMarker.style.borderColor = "#990000";
        }, 650);
        setTimeout(() => {
          clickedMarker.style.backgroundColor = "#000075";
          clickedMarker.style.borderColor = "#990000";
        }, 900);
      }
    }
  }
});

// Pontok hozzáadása a térképhez
markerPositions.forEach(({ id, x, y }) => {
  const marker = document.createElement("div");
  marker.id = id;
  marker.classList.add("marker-button");
  marker.style.left = `${x}px`;
  marker.style.top = `${y}px`;
  marker.style.width = `${20 * scale}px`;
  marker.style.height = `${20 * scale}px`;
  mapContainer.appendChild(marker);

  marker.addEventListener("click", () => {
    const clickedId = marker.id;
    const correctId = markerPositions[currentQuestionIndex].id;
    const clickedMarker = document.getElementById(clickedId);

    function basicMarkerColor(){
      //logFunctionCall("basicMarkerColor");
      clickedMarker.style.borderColor = "#4363d8";
      clickedMarker.style.backgroundColor = "#000075";
    }
  });
});

let remainingQuestions = [...markerPositions];

function showHint(){
  //logFunctionCall("showHint");
  const currentMarkerId = markerPositions[currentQuestionIndex].id;
  const currentMarker = document.getElementById(currentMarkerId);
  currentMarker.style.backgroundColor = "#f032e6";
  currentMarker.style.borderColor = "#911eb4";
}

// Következő kérdés kiválasztása
function askNextQuestion() {
  //logFunctionCall("askNextQuestion");
  if (filteredMarkers.length === 0) {
    filteredMarkers = [...markerPositions];  
    updateMarkers();
    shuffleArray(filteredMarkers);  
    questionNumber = 1;
    errors = 0;

    const markers = document.querySelectorAll(".marker-button");
    markers.forEach((marker) => {
      marker.style.backgroundColor = "#000075";
      marker.style.border = "2px solid #4363d8";
    });
    
    updateCounters();
    alert("Refresh");
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredMarkers.length);
  currentQuestion = filteredMarkers.splice(randomIndex, 1)[0]; 
  currentQuestionIndex = markerPositions.indexOf(currentQuestion);
  NavBarQuestion.textContent = currentQuestion.id.toUpperCase();
}

function shuffleArray(array) {
  //logFunctionCall("shuffleArray");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
}

const borderCheckbox = document.getElementById("Border");
const tmaCheckbox = document.getElementById("TMA");
const elseCheckbox = document.getElementById("Else");
let questionLength = 0;

// Lista a megjelenítendő pontok ID-jainak tárolására
let filteredMarkers = [...markerPositions]; 

function updateMarkers() {
  //logFunctionCall("updateMarkers");

  const borderChecked = borderCheckbox.checked;
  const tmaChecked = tmaCheckbox.checked;
  const elseChecked = elseCheckbox.checked;

  if (borderChecked || tmaChecked || elseChecked) {
    filteredMarkers = [];

    if (borderChecked) {
      filteredMarkers.push(...markerPositions.slice(0, 49));
    }

    if (tmaChecked) {
      filteredMarkers.push(...markerPositions.slice(49, 88));
    }

    if (elseChecked) {
      filteredMarkers.push(...markerPositions.slice(88, 115));
    }
  } else {
    filteredMarkers = [...markerPositions];
  }

  // Frissítsük a térkép megjelenített pontjait
  refreshMarkers();
  updateTransform();
  questionLength = filteredMarkers.length;
  updateCounters();
  askNextQuestion();
}

function refreshMarkers() {
  //logFunctionCall("refreshMarkers");
  document.querySelectorAll(".marker-button").forEach(marker => marker.remove());
  // Hozzáadjuk a szűrt pontokat a térképhez
  filteredMarkers.forEach(({ id, x, y }) => {
    const marker = document.createElement("div");
    marker.id = id;
    marker.classList.add("marker-button");
    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;
    marker.style.width = `${20 * scale}px`;
    marker.style.height = `${20 * scale}px`;
    mapContainer.appendChild(marker);

    marker.addEventListener("click", () => {
      const clickedId = marker.id;
    });
  });
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    updateMarkers();
  });
});

function updateCounters(){
  //logFunctionCall("updateCounters");
  NavBarCounter.innerText = questionNumber + " / " + questionLength;
  NavBarErrors.innerText = "Errors: " + errors;
}

// Pontok pozíciójának és méretének frissítése
function updateMarkerPositions() {
  //logFunctionCall("updateMarkerPositions");
  markerPositions.forEach(({ id, x, y }) => {
    const marker = document.getElementById(id);
    if (marker) {
      marker.style.left = `${x * scale + translateX}px`;
      marker.style.top = `${y * scale + translateY}px`;
      marker.style.width = `${12 * scale}px`;
      marker.style.height = `${12 * scale}px`;
    }
  });
  if (currentQuestion) {
    const currentMarker = document.getElementById(currentQuestion.id);
    if (currentMarker) {
      const { x, y } = currentQuestion;
      currentMarker.style.left = `${x * scale + translateX}px`;
      currentMarker.style.top = `${y * scale + translateY}px`;
      currentMarker.style.width = `${12 * scale}px`;
      currentMarker.style.height = `${12 * scale}px`;
    }
  }
}

// Térkép átalakításának frissítése
function updateTransform() {
  //logFunctionCall("updateTransform");
  map.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  updateMarkerPositions();
}

let mouseX, mouseY;
let addNo = 1;

// Egér mozgatás esemény
mapContainer.addEventListener("mousemove", (e) => {
  // Az egér pozíciójának frissítése a térképhez igazítva
  const rect = mapContainer.getBoundingClientRect();
  mouseX = (e.clientX - rect.left - translateX) / scale;
  mouseY = (e.clientY - rect.top - translateY) / scale;
});

// Koordináták másolása a vágólapra space lenyomására
/*
document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    const roundedMouseX = Math.round(mouseX);
    const roundedMouseY = Math.round(mouseY);
    const markerData = `{ id: "valami${addNo}", x: ${roundedMouseX}, y: ${roundedMouseY} },`;
    addNo += 1;
    navigator.clipboard.writeText(markerData).then(() => {
    }).catch(err => {
      alert("Hiba történt a vágólapra másolás közben.");
      console.error(err);
    });
  }
});
*/

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
    // Egyujjas panning kezdete
    isPanning = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  } else if (e.touches.length === 2) {
    // Kétujjas mozdulat
    isPanning = true; // Engedélyezzük a panninget
    startX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    startY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
  }
});

mapContainer.addEventListener("touchmove", (e) => {
  if (isPanning) {
    if (e.touches.length === 1 || e.touches.length === 2) {
      // Panning frissítése egy vagy két ujjal
      const currentX = e.touches.length === 1 
        ? e.touches[0].clientX 
        : (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const currentY = e.touches.length === 1 
        ? e.touches[0].clientY 
        : (e.touches[0].clientY + e.touches[1].clientY) / 2;

      const deltaX = currentX - startX;
      const deltaY = currentY - startY;

      translateX += deltaX;
      translateY += deltaY;

      startX = currentX;
      startY = currentY;

      updateTransform();
    }
  }
});

mapContainer.addEventListener("touchend", (e) => {
  if (e.touches.length === 0) {
    isPanning = false;
  }
});

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
  updateMarkerPositions();
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

    updateTransform();
    updateMarkerPositions();
  }
});

mapContainer.addEventListener("touchend", (e) => {
  if (e.touches.length < 2) {
    lastDistance = 0; // Reseteljük a távolságot
  }
});

