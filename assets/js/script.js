particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: { enable: true, value_area: 800 }
        },
        shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1 }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false }
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: false, mode: 'repulse' }, // Disable hover interaction
            onclick: { enable: false, mode: 'push' } // Disable click interaction
        }
    },
    retina_detect: true
});


