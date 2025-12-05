window.onload = () => {

    const markers = [
        { 
            name: "India – Sari & Colonial Influence", 
            lat: 22.0, 
            lng: 78.0,
            text: "The sari evolved under colonial rule as the textile exchange grew and modesty expectations changed. Saris originally had little fabric or no blouse, but through Islamic influence and British colonialism, the sari blouse was adopted.", 
            img: "media/avatar.png"
        },
        { 
            name: "South Korea – Fashion in Media",
            lat: 36.5, 
            lng: 127.5,
            text: "K-pop and K-dramas have reshaped global fashion and reversed cultural flows, bringing hanbok silhouettes into modern streetwear.", 
            img: "media/hanbok.png"
        },
        { 
            name: "Japan – Kimono", 
            lat: 36.2, 
            lng: 138.2,
            text: "The kimono remains a symbol of national identity and craftsmanship. Every fold, color, and pattern carries cultural meaning.", 
            img: "media/kimono.png"
        },
        { 
            name: "Ghana – Kente Cloth",
            lat: 7.95, 
            lng: -1.02,
            text: "Kente cloth symbolizes prestige and identity through color and pattern. Obroni wawu transforms secondhand clothing into new cultural forms.", 
            img: "media/patterns.png"
        },
        { 
            name: "South Sudan – Clothing & Missionaries",
            lat: 7.3, 
            lng: 30.0,
            text: "In 'We Come as Friends', missionaries enforce Western dress on children, using clothing as soft power to reshape identity.", 
            img: "media/socks.png"
        },
        { 
            name: "Western Tuxedo – Symbol of Modernity", 
            lat: 51.5, 
            lng: -0.12,
            text: "The tuxedo spread globally through colonial and cultural influence, becoming a universal symbol of professionalism and modernity.", 
            img: "media/wedding-suit.png"
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
        .htmlElementsData(markers)
        .htmlElement(d => {
          const el = document.createElement("div");
          el.className = "marker";
          el.style.pointerEvents = "auto";   // <-- allow clicks
          el.style.cursor = "pointer";       // <-- show cursor

          const img = document.createElement("img");
          img.src = d.img;
          img.style.width = "20px";
          img.style.height = "20px";


          el.appendChild(img);
          return el;
        })
        (container);

    globe.width(size);
    globe.height(size);

    // Auto rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.4;

    // Popup
    const popup = document.getElementById("markerPopup");
    const popupTitle = document.getElementById("popupTitle");
    const popupImage = document.getElementById("popupImage");
    const popupContent = document.getElementById("popupContent");
    const popupClose = document.getElementById("popupClose");

    globe.onHtmlElementClick(marker => {
    popupTitle.textContent = marker.name;
    popupContent.textContent = marker.text;

    if (marker.img) {
        popupImage.src = marker.img;
        popupImage.classList.remove("hidden");
    }

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
