class Canvas {
  constructor() {
    (this.scrollY = 0),
      (this.mouse = new THREE.Vector2(0, 0)),
      (this.w = window.innerWidth),
      (this.h = window.innerHeight),
      (this.renderer = new THREE.WebGLRenderer({ antialias: !0 })),
      this.renderer.setSize(this.w, this.h),
      this.renderer.setPixelRatio(window.devicePixelRatio),
      this.renderer.setClearColor(0);
    const e = document.getElementById('myCanvas');
    e.appendChild(this.renderer.domElement);
    const t = 50,
      s = (t / 2) * (Math.PI / 180),
      i = this.h / 2 / Math.tan(s);
    (this.camera = new THREE.PerspectiveCamera(t, this.w / this.h, 1, 2 * i)),
      (this.camera.position.z = i),
      (this.scene = new THREE.Scene()),
      (this.uniforms = {
        time: { value: 1 },
        resolution: {
          type: 'v2',
          value: new THREE.Vector2(
            this.renderer.domElement.width,
            this.renderer.domElement.height,
          ),
        },
      }),
      (this.meshList = []);
    for (let n = 0; n < 36; n++)
      (this.mesh = new Donuts(i / 2, this.uniforms)),
        this.mesh.position.set(0, 0, 0),
        this.mesh.position.normalize(),
        this.mesh.rotation.set(
          10 * n * (Math.PI / 180),
          10 * n * (Math.PI / 180),
          45 * n * (Math.PI / 180),
        ),
        this.meshList.push(this.mesh),
        this.scene.add(this.mesh);
    this.renderer.render(this.scene, this.camera), this.render();
  }
  render() {
    requestAnimationFrame(() => {
      this.render();
    });
    performance.now();
    for (let e = 0; e < this.meshList.length; e++) this.mesh = this.meshList[e];
    this.camera.lookAt(this.scene.position),
      (this.camera.position.x +=
        0.01 * (this.mouse.x - this.camera.position.x)),
      (this.camera.position.y +=
        0.01 * (-this.mouse.y - this.camera.position.y)),
      (this.uniforms.time.value += 0.05),
      this.renderer.render(this.scene, this.camera);
  }
  mouseMoved(e, t) {
    (this.mouse.x = e - this.w / 2), (this.mouse.y = -t + this.h / 2);
  }
  scrolled(e) {
    this.scrollY = e;
  }
  resized() {
    (this.w = window.innerWidth),
      (this.h = window.innerHeight),
      this.renderer.setSize(this.w, this.h),
      this.renderer.setPixelRatio(window.devicePixelRatio),
      (this.camera.aspect = this.w / this.h),
      this.camera.updateProjectionMatrix(),
      (this.uniforms.resolution.value.x = this.renderer.domElement.width),
      (this.uniforms.resolution.value.y = this.renderer.domElement.height);
  }
}
class Donuts extends THREE.Mesh {
  constructor(e, t) {
    const s = new THREE.TorusGeometry(e, 10, 32, 100),
      i = new THREE.ShaderMaterial({
        uniforms: t,
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent,
      });
    super(s, i);
  }
}
function getRandom(e, t) {
  return Math.random() * (t - e) + e;
}
window.addEventListener('load', function () {
  const e = new Canvas();
  e.scrolled(window.scrollY),
    window.addEventListener('mousemove', (t) => {
      e.mouseMoved(t.clientX, t.clientY);
    }),
    window.addEventListener('scroll', (t) => {
      e.scrolled(window.scrollY);
    }),
    window.addEventListener('resize', (t) => {
      e.resized();
    });
});
