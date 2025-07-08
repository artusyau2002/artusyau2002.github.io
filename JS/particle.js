const bg = document.getElementById("particles-js");
bg.style.height = `${document.body.scrollHeight}px`;
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80
        },
        "color": {
            "value": "#ffffff"
        },
        "size": {
            "value": 3
        },
        "move": {
            "speed": 1
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
});