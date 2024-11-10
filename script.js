let PointsList = [/*"gasna", "begla", "pesat", "abeti", "sopro", "arsin", "stein", "sasal", "sunis", "gotar", "dimlo", "nekin", "kopry", "vebal",
     "osduk", "bareb", "babit", "tondo", "kerop", "parak", "inved", "mopug", "tegri", "deget", "budop", "megik", "narka", "bador", "karil", "gemto", "lonla", "kenin", "keked",
     "abuli", "pitok", "demop", "edemu", "litku", "amrax", "balap", "patak", "badov", "ergom", "alamu", "xomba", "vamog", "kuvex", "natex", "tekno", "zolku", "ogvun", "subes",
     "sirdu", "gitas", "olati", "nalox", "nohat", "sunor", "nikab", "sogmo", "okora", "pidon", "mavir", "eboro", "verig", "perit", "kusis", "romka", "sag-vor", "kovek", "rigsa",
     "ibliz", "mizol", "boksi", "oslen", "binku", "uvera", "bks-vor", "bug-vor", "svr-vor", "ptb-vor", "gyr-vor", "mnr-vor", "bud-vor", "tps-vor", "gilep", "vajdi", "ulzak",
     "duzla", "fahaz", "gazda", "ebamo", "kezal", "vetik", "beted", "witri", "gelka", "bodza", "torno", "pucog", "vebos", "rakfa", "jozep", "pusta", "epari", "etaro", "balux",
     "ilhak", "dodar", "babox", "erguz", "abony", "zurfa", "norah", "nipur", "lahor"*/ "tekno", "pesat", "natex"];


const zoomableElement = document.getElementById('zoomable');
let isZoomed = false;

// Prevent default context menu on right click
//document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('mousedown', (e) => {
    if (e.button === 1) { // Right-click
        if (!isZoomed) {
            zoomIn(e.clientX, e.clientY);
        } else {
            zoomOut();
        }
    }
    else if (e.button === 2) { // Fourth button (usually back button)
        alert(`Position - Top: ${e.clientY - 5}px, Left: ${e.clientX - 5}px`);
    }
});

function zoomIn(x, y) {
    const rect = zoomableElement.getBoundingClientRect();
    const offsetX = x - rect.left;
    const offsetY = y - rect.top;
    const scale = 2.5; // 150% nagyítás

    zoomableElement.style.transformOrigin = `${offsetX}px ${offsetY}px`;
    zoomableElement.style.transform = `scale(${scale})`;
    isZoomed = true;
}

function zoomOut() {
    zoomableElement.style.transform = 'scale(1)';
    isZoomed = false;
}

let currentPointIndex = 0;
let shuffledPointList = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener("DOMContentLoaded", function() {
    shuffledPointList = shuffle(PointsList);
    displayPoint();
})

function displayPoint(){
    navBarContent = document.getElementById("navBar");

    navBarContent.textContent = shuffledPointList[currentPointIndex];
}

function nextPoint(event){
    const clickedPointId = event.target.id;

    if (clickedPointId === shuffledPointList[currentPointIndex]) {
        alert("Jó");
        // Tovább a következő pontra, ha helyes
        currentPointIndex++;
        displayPoint(); // Frissíti a navBar tartalmát az új ponttal
    } else {
        alert("Rossz");
    }
}