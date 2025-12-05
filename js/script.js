window.onload = () => {

    const markers = [
        { 
            name: "India – Sari & Colonial Influence", 
            lat: 22.0, 
            lng: 78.0,
            text: "The sari evolved under colonial rule as the textile exchange grew and modesty expectations changed. Saris originally had little fabric or no blouse, but through Islamic influence and British colonialism, the sari blouse was adopted."
        },
        { 
            name: "South Korea – Fashion in Media",
            lat: 36.5, 
            lng: 127.5,
            text: "K-pop and K-dramas have reshaped global fashion and reversed cultural flows, bringing hanbok into modern streetwear."
        },
        { 
            name: "Japan – Kimono", 
            lat: 36.2, 
            lng: 138.2,
            text: "The kimono remains a symbol of national identity and craftsmanship. Every fold, color, and pattern carries cultural meaning."
        },
        { 
            name: "Ghana – Kente Cloth",
            lat: 7.95, 
            lng: -1.02,
            text: "Kente cloth symbolizes prestige and identity through color and pattern. Obroni wawu transforms secondhand clothing into new cultural forms."
        },
        { 
            name: "South Sudan – Clothing & Missionaries",
            lat: 7.3, 
            lng: 30.0,
            text: "In 'We Come as Friends', missionaries enforce Western dress on children, using clothing as soft power to reshape identity."
        },
        { 
            name: "Western Tuxedo – Symbol of Modernity", 
            lat: 51.5, 
            lng: -0.12,
            text: "The tuxedo spread globally through colonial and cultural influence, becoming a universal symbol of professionalism and modernity."
        }
    ];

    const container = document.getElementById("globeViz");

    // Globe size
    const size = Math.min(window.innerWidth * 0.6, 800);
    container.style.width = size + "px";
    container.style.height = size + "px";

    // ---- WORKING GLOBE VERSION ----
    const globe = Globe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .pointOfView({ lat: 20, lng: 0, altitude: 1.2 })
        .labelsData(markers)
        .labelLat(d => d.lat)
        .labelLng(d => d.lng)
        .labelText(() => "●")
        .labelColor(() => "#ffefd5")
        .labelSize(1.5)
        (container);

    globe.width(size);
    globe.height(size);

    // Auto rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.4;

    // Popup
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
            altitude: 0.7
        }, 1500);
    });

    popupClose.addEventListener("click", () => {
        popup.classList.add("hidden");
    });
};
