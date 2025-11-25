// ---- MARKER DATA ----
const markers = [
    {
        name: "India – Sari & Colonial Influence",
        lat: 22.0,
        lng: 78.0,
        text: "The sari evolved under colonial rule as fabric production shifted and modesty expectations changed."
    },
    {
        name: "South Korea – Fashion in Media",
        lat: 36.5,
        lng: 127.5,
        text: "K-pop and K-dramas have reshaped global fashion trends and reversed cultural flows."
    },
    {
        name: "Japan – Kimono",
        lat: 36.2,
        lng: 138.2,
        text: "The kimono remains a symbol of national identity and craftsmanship."
    },
    {
        name: "Ghana – Kente Cloth",
        lat: 7.95,
        lng: -1.02,
        text: "A symbol of prestige and cultural identity; colors and patterns each carry meaning."
    },
    {
        name: "South Sudan – Clothing & Missionaries",
        lat: 7.3,
        lng: 30.0,
        text: "Clips from 'We Come as Friends' show Western missionaries dressing children to enforce cultural norms."
    }
];

// ---- INITIALIZE GLOBE ----
const globe = Globe()
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
    .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
    .pointOfView({ lat: 20, lng: 0, altitude: 2.2 })
    .labelsData(markers)
    .labelLat(d => d.lat)
    .labelLng(d => d.lng)
    .labelText(() => '●')
    .labelSize(1.5)
    .labelColor(() => '#ffefd5')
    (document.getElementById('globeViz'));

// ===== Auto Rotate =====
globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = 0.6;

// ===== Popup Elements =====
const popup = document.getElementById("markerPopup");
const popupTitle = document.getElementById("popupTitle");
const popupContent = document.getElementById("popupContent");
const popupClose = document.getElementById("popupClose");

// ===== Marker Click =====
globe.onLabelClick(marker => {
    popupTitle.textContent = marker.name;
    popupContent.textContent = marker.text;

    popup.classList.remove("hidden");

    globe.pointOfView({
        lat: marker.lat,
        lng: marker.lng,
        altitude: 1.4
    }, 2000);
});

// ===== Close Popup =====
popupClose.addEventListener("click", () => {
    popup.classList.add("hidden");
});
