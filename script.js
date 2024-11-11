let PointsList = [/*"gasna", "begla", "pesat", "abeti", "sopro", "arsin", "stein", "sasal", "sunis", "gotar", "dimlo", "nekin", "kopry", "vebal",
     "osduk", "bareb", "babit", "tondo", "kerop", "parak", "inved", "mopug", "tegri", "deget", "budop", "megik", "narka", "bador", "karil", "gemto", "lonla", "kenin", "keked",
     "abuli", "pitok", "demop", "edemu", "litku", "amrax", "balap", "patak", "badov", "ergom", "alamu", "xomba", "vamog", "kuvex", "natex", "tekno", "zolku", "ogvun", "subes",
     "sirdu", "gitas", "olati", "nalox", "nohat", "sunor", "nikab", "sogmo", "okora", "pidon", "mavir", "eboro", "verig", "perit", "kusis", "romka", "sag-vor", "kovek", "rigsa",
     "ibliz", "mizol", "boksi", "oslen", "binku", "uvera", "bks-vor", "bug-vor", "svr-vor", "ptb-vor", "gyr-vor", "mnr-vor", "bud-vor", "tps-vor", "gilep", "vajdi", "ulzak",
     "duzla", "fahaz", "gazda", "ebamo", "kezal", "vetik", "beted", "witri", "gelka", "bodza", "torno", "pucog", "vebos", "rakfa", "jozep", "pusta", "epari", "etaro", "balux",
     "ilhak", "dodar", "babox", "erguz", "abony", "zurfa", "norah", "nipur", "lahor"*/ "tekno", "pesat", "natex"];


     const zoomableElement = document.getElementById('zoomable');
     let scale = 1, isDragging = false, startX, startY, originX = 0, originY = 0;
     
     // For panning
     zoomableElement.addEventListener('pointerdown', (e) => {
         isDragging = true;
         startX = e.clientX - originX;
         startY = e.clientY - originY;
         zoomableElement.setPointerCapture(e.pointerId); // Capture pointer for smooth dragging
     });
     
     document.addEventListener('pointermove', (e) => {
         if (!isDragging) return;
         originX = e.clientX - startX;
         originY = e.clientY - startY;
         zoomableElement.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
     });
     
     document.addEventListener('pointerup', (e) => {
         isDragging = false;
         zoomableElement.releasePointerCapture(e.pointerId); // Release pointer capture
     });
     
     // For zooming on mouse wheel
     zoomableElement.addEventListener('wheel', (e) => {
         e.preventDefault();
         scale += e.deltaY * -0.003; // Adjust the zoom sensitivity
         scale = Math.min(Math.max(1, scale), 2.5); // Limit zoom level between 0.5x and 2.5x
         zoomableElement.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
     }, { passive: false });
     
     // Optional middle-click zoom function
     document.addEventListener('mousedown', (e) => {
         if (e.button === 1) { // Middle mouse button click
             if (scale === 1) {
                 zoomIn(e.clientX, e.clientY);
             } else {
                 zoomOut();
             }
         }
     });
     
     function zoomIn(x, y) {
         const rect = zoomableElement.getBoundingClientRect();
         const offsetX = x - rect.left;
         const offsetY = y - rect.top;
         scale = 2.5; // Zoom scale
         zoomableElement.style.transformOrigin = `${offsetX}px ${offsetY}px`;
         zoomableElement.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
     }
     
     function zoomOut() {
         scale = 1;
         zoomableElement.style.transformOrigin = 'center center';
         zoomableElement.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
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