import { useEffect, useRef} from "react"
import styles from "./MyCanvas.module.css"

function MyCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const c = canvas.getContext("2d");

        var particleCount = 750;
        var mouse = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };

		window.addEventListener("mousemove", function(event) {
			mouse.x = event.clientX - canvas.width / 2;
			mouse.y = event.clientY - canvas.height / 2;
		});

		window.addEventListener("resize", function() {
			canvas.width = window.innerWidth;	
			canvas.height = window.innerHeight;

			lightParticles = [];
			initializeParticles();
		});
        
		// Particle Object - properties, draw function and update
		function LightParticle(x, y, radius, color) {
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.color = color;

			this.update = function() {

				this.draw();
			};

			this.draw = function() {
				c.save();
				c.beginPath();
				c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
				c.shadowColor = this.color;
				c.shadowBlur = 15;
				c.shadowOffsetX = 0;
				c.shadowOffsetY = 0;
				c.fillStyle = this.color;
				c.fill();
				c.closePath();
				c.restore();
			};
		}

		var lightParticles = [];

		var timer = 0;
		var opacity = 1;
		var speed = 0.0005;
		var colors = [
			"#0952BD",
			"#A5BFF0",
			"#118CD6",
			"#1AAEE8",
			"#F2E8C9"
		];

		var initializeParticles;

		// particle creation and location setup
		(initializeParticles = function() {
			for (var i = 0; i < particleCount; i++) {

				var randomColorIndex = Math.floor(Math.random() * 6);
				var randomRadius = Math.random() * 2;

				// Ensure particles are spawned past screen width and height so
				// there will be no missing stars when rotating canvas
				var x = (Math.random() * (canvas.width+200)) - (canvas.width + 200) / 2;
				var y = (Math.random() * (canvas.width + 200)) - (canvas.width + 200) / 2;
				lightParticles.push(new LightParticle(x, y, randomRadius, colors[randomColorIndex]));
			}
		})();

		function animate() {
			window.requestAnimationFrame(animate);

			c.save();
			if (isMouseDown === true) {

				// New opacity step
				var desiredOpacity = 0.01;
				opacity += (desiredOpacity - opacity) * 0.03;
				c.fillStyle = "rgba(18, 18, 18,"+ opacity +")";

				// Ease into the new speed
				var desiredSpeed = 0.012;
				speed += (desiredSpeed - speed) * 0.01;
				timer += speed;

			} else {

				// Old opacity step
				var originalOpacity = 1;
				opacity += (originalOpacity - opacity) * 0.01;
				c.fillStyle = "rgba(18, 18, 18, " + opacity + ")";

				// speed control back to original speed
				var originalSpeed = 0.001;
				speed += (originalSpeed - speed) * 0.01;
				timer += speed;


			}

			c.fillRect(0, 0, canvas.width, canvas.height);
			c.translate(canvas.width / 2, canvas.height/2 );
			c.rotate(timer);

			for (var i = 0; i < lightParticles.length; i++) {
				lightParticles[i].update();
			}

			c.restore();

			
		}

		var isMouseDown = false;

		window.addEventListener("mousedown", function() {
			isMouseDown = true;	
		});
		

		window.addEventListener("mouseup", function() {
			isMouseDown = false;	
		});

		animate();

    }, []);

    return (
	<>
		<canvas id="home" ref={canvasRef} className={styles.canvas}></canvas>
	</>
	)
}

export default MyCanvas;