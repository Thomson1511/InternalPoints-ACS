const zoomableElement = document.getElementById('zoomable');
let isZoomed = false;

// Prevent default context menu on right click
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('mousedown', (e) => {
    if (e.button === 2) { // Right-click
        if (!isZoomed) {
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
    const scale = 2.5; // 150% nagyítás

    zoomableElement.style.transformOrigin = `${offsetX}px ${offsetY}px`;
    zoomableElement.style.transform = `scale(${scale})`;
    isZoomed = true;
}

function zoomOut() {
    zoomableElement.style.transform = 'scale(1)';
    isZoomed = false;
}