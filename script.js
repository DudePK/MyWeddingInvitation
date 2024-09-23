javascript
// 3D model viewer using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 500);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);

// Load 3D model (assuming .obj format)
const loader = new THREE.OBJLoader();
loader.load('your_model.obj', function (obj) {
    scene.add(obj);
    obj.position.y = -95;  // Adjust position as needed
    animate();
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

camera.position.z = 100;

// QR code generation (manual for now, link it to your Google Drive)
document.getElementById('qr-code').src = 'qr_code.png';  // Replace with the generated QR code linking to your Drive

