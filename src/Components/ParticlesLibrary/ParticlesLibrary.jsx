import { useEffect } from "react";

const particleConfig = {
  background: {
    color: "#0b0b0b",
  },
  particles: {
    number: {
      value: 700,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: ["#FFD700", "#FFF8DC", "#ffffff", "#FFA500"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 0.6,
        opacity_min: 0.3,
        sync: false,
      },
    },
    size: {
      value: 3.5,
      random: true,
      anim: {
        enable: true,
        speed: 2.5,
        size_min: 0.5,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: true,
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: ["bubble", "repulse"],
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 200,
        size: 10,
        duration: 2,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 120,
        duration: 0.5,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
};

const ParticlesBackground = (props) => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", particleConfig);
    } else {
      console.error("ParticlesJS Is Not Loaded Yet!");
    }
  }, []);

  return (
    <div id="particles-js" className={`inset-0 ${props.className || ""}`}></div>
  );
};

export default ParticlesBackground;
