window.onload = () => {

    const markers = [
        { name: "India – Sari & Colonial Influence", 
            lat: 22.0, 
            lng: 78.0,
            icon: "avatar",
            text: "The sari evolved under colonial rule as the textile exchange grew and modesty expectations changed. Saris originally had little fabric or no blouse, but through Islamic influence in the 13th dynasty and British colonialism in the 1800's, the sari blouse was adopted." },
        { name: "South Korea – Fashion in Media",
             lat: 36.5, 
             lng: 127.5,
             icon: "hanbok",
             text: "K-pop and K-dramas have reshaped global fashion trends and reversed cultural flows, reviving the culture through hanbok-inspired garments in Korean streetwear, reversing the western flow into Korea and making globally influential statements." },
        { name: "Japan – Kimono", 
             lat: 36.2, 
             lng: 138.2,
             icon: "kimono",
             text: "The kimono remains a symbol of national identity and craftsmanship. It is a symbol of gender, status, and national identity, and every pattern and fold has a different social meaning. Modern-day Japan still use kimono in different forms as streetwear, but have shifted to Western suits as formal attire." },
        { name: "Ghana – Kente Cloth",
             lat: 7.95, 
             lng: -1.02,
             icon: "patterns",
             text: "A symbol of prestige and cultural identity; colors and patterns each carry meaning. On the other hand, obroni wawu (death of cloth dyeing) embodies embracing cultural identity through patterning and colors on secondhand US clothes as a form of hybridization. " },
        { name: "South Sudan – Clothing & Missionaries",
             lat: 7.3, 
             lng: 30.0,
             icon: "socks",
             text: "Clips from 'We Come as Friends' show Western missionaries imposing clothing on children from South Sudanese tribes as an act of civilization. If a student came to class in traditional clothing, they were punished and beat. Dress becomes a symbol of colonization and power, reshaping the identity of South Sudan under the premise of soft power. " },
        { name: "Western Tuxedo – Symbol of Modernity", 
             lat: 51.5, 
             lng: -0.12,
             icon: "wedding-suit",
             text: "The Western tuxedo emerged from 19th-century European aristocratic dress codes and became a global symbol of formality, professionalism, and modern identity. Through colonial influence, missionary presence, and global media, the tux spread worldwide as the standard for ceremonies, diplomacy, and elite social events."
        }
        ];

    const container = document.getElementById("globeViz");

    // ---- YOUR DESIRED GLOBE SIZE ----
    const size = Math.min(window.innerWidth * 0.6, 800);
    container.style.width = size + "px";
    container.style.height = size + "px";

    // ---- INITIALIZE GLOBE ----
    const globe = Globe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .pointOfView({ lat: 20, lng: 0, altitude: 1.2 }) 
        (container);
    
    globe.htmlElementsData(markers)
        .htmlElement(d => {
            const el = document.createElement("img");
            el.src = `media/${d.icon}`;
            el.className = "marker-icon";
            return el;
        })
        .onClick(marker => {
            popupTitle.textContent = marker.name;
            popupContent.textContent = marker.text;
            popup.classList.remove("hidden");

            globe.pointOfView({
                lat: marker.lat,
                lng: marker.lng,
                altitude: 0.7
            }, 1500);
    });

    globe.width(size);
    globe.height(size);

    // ---- AUTO ROTATE ----
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.3;

    // ---- POPUP ----
    const popup = document.getElementById("markerPopup");
    const popupTitle = document.getElementById("popupTitle");
    const popupContent = document.getElementById("popupContent");
    const popupClose = document.getElementById("popupClose");

    globe.onHtmlElementClick(marker => {
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
