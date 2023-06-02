import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {

    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    }

        return (
            <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              "fullScreen": {
                  "enable": true,
                  "zIndex": -1
              },
              "particles": {
                  "number": {
                      "value": 10,
                      "density": {
                          "enable": false,
                          "value_area": 800
                      }
                  },
                  "color": {
                      "value": "#fff"
                  },
                  "shape": {
                      "type": "circle",
                      "options": {
                          "sides": 12
                      }
                  },
                  "opacity": {
                      "value": 0.33,
                      "random": false,
                      "anim": {
                          "enable": false,
                          "speed": 1,
                          "opacity_min": 0.1,
                          "sync": false
                      }
                  },
                  "size": {
                      "value": 4,
                      "random": false,
                      "anim": {
                          "enable": false,
                          "speed": 40,
                          "size_min": 0.1,
                          "sync": false
                      }
                  },
                  "rotate": {
                      "value": 0,
                      "random": true,
                      "direction": "clockwise",
                      "animation": {
                          "enable": true,
                          "speed": 5,
                          "sync": false
                      }
                  },
                  "move": {
                      "enable": true,
                      "speed": 2,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                      }
                  }
              },
              "retina_detect": false
          }}
          />
        );
    };

export default ParticlesBackground