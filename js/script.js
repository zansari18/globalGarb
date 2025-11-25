window.onload = () => {

    const markers = [
        { name: "India – Sari & Colonial Influence", lat: 22.0, lng: 78.0,
          text: "The sari evolved under colonial rule as fabric production shifted and modesty expectations changed." },
        { name: "South Korea – Fashion in Media", lat: 36.5, lng: 127.5,
          text: "K-pop and K-dramas have reshaped global fashion trends and reversed cultural flows." },
        { name: "Japan – Kimono", lat: 36.2, lng: 138.2,
          text: "The kimono remains a symbol of national identity and craftsmanship." },
        { name: "Ghana – Kente Cloth", lat: 7.95, lng: -1.02,
          text: "A symbol of prestige and cultural identity; colors and patterns each carry meaning." },
        { name: "South Sudan – Clothing & Missionaries", lat: 7.3, lng: 30.0,
          text: "Clips from 'We Come as Friends' show Western missionaries dressing children to enforce cultural norms." }
    ];

    const container = document.getElementById("globeViz");

    // ---- YOUR DESIRED GLOBE SIZE ----
    const size = Math.min(window.innerWidth * 0.6, 600);
    container.style.width = size + "px";
    container.style.height = size + "px";

    // ---- INITIALIZE GLOBE ----
    const globe = Globe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .labelLat(d => d.lat)
        .labelLng(d => d.lng)
        .labelsData(markers)
        .labelText(() => "●")
        .labelSize(1.5)
        (container);

    // ---- FIX: After Globe.gl builds the scene, resize its canvas ----
    setTimeout(() => {
        const sceneContainer = container.querySelector(".scene-container");
        if (sceneContainer) {
            sceneContainer.style.width = size + "px";
            sceneContainer.style.height = size + "px";

            const canvas = sceneContainer.querySelector("canvas");
            if (canvas) {
                canvas.width = size;
                canvas.height = size;
                canvas.style.width = size + "px";
                canvas.style.height = size + "px";
            }
        }
    }, 50);

    // ---- AUTO ROTATE ----
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.6;

    // ---- POPUP ----
    const popup = document.getElementById("markerPopup");
    const popupTitle = document.getElementById("popupTitle");
    const popupContent = document.getElementById("popupContent");
    const popupClose = document.getElementById("popupClose");

    globe.onLabelClick(marker => {
        popupTitle.textContent = marker.name;
        popupContent.textContent = marker.text;
        popup.classList.remove("hidden");

        globe.pointOfView({
            lat: marker.lat,
            lng: marker.lng,
            altitude: 1.4
        }, 1500);
    });

    popupClose.addEventListener("click", () => {
        popup.classList.add("hidden");
    });
};
