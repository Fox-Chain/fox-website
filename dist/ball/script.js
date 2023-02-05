// このクラス内に three.js のコードを書いていきます
class Canvas {
  constructor() {
    /************************/
    /*インタラクション用*/
    /************************/

    //スクロール量
    this.scrollY = 0;
    //マウス座標
    this.mouse = new THREE.Vector2(0, 0);
    //ウィンドウサイズ
    this.w = window.innerWidth;
    this.h = window.innerHeight;

    /************************/
    /*シーン設定*/
    /************************/

    // レンダラー
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.renderer.setSize(this.w, this.h); // 描画サイズ
    this.renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比
    this.renderer.setClearColor(0x000000);

    //#myCanvasにレンダラーのcanvasを追加
    const container = document.getElementById('myCanvas');
    container.appendChild(this.renderer.domElement);

    // カメラ
    /*js上の数値をpixelに変換する処理*/
    const fov = 50;
    const fovRad = (fov / 2) * (Math.PI / 180); // 視野角をラジアンに変換
    const dist = this.h / 2 / Math.tan(fovRad); // ウィンドウぴったりのカメラ距離
    /* */
    this.camera = new THREE.PerspectiveCamera(
      fov,
      this.w / this.h,
      1,
      dist * 2,
    );
    this.camera.position.z = dist; // カメラを遠ざける

    // シーン
    this.scene = new THREE.Scene();

    //uniform
    this.uniforms = {
      time: { value: 1.0 },
      resolution: {
        type: 'v2',
        value: new THREE.Vector2(
          this.renderer.domElement.width,
          this.renderer.domElement.height,
        ),
      },
    };

    /************************/
    /*オブジェクト*/
    /************************/

    this.meshList = [];
    for (let i = 0; i < 36; i++) {
      this.mesh = new Donuts(dist / 2, this.uniforms); //引数:size,uniforms
      this.mesh.position.set(0, 0, 0);
      this.mesh.position.normalize();

      this.mesh.rotation.set(
        i * 10 * (Math.PI / 180),
        i * 10 * (Math.PI / 180),
        i * 45 * (Math.PI / 180),
      );

      this.meshList.push(this.mesh);
      this.scene.add(this.mesh);
    }

    /************************/
    /*画面更新*/
    /************************/

    this.renderer.render(this.scene, this.camera);
    this.render();
  }

  render() {
    requestAnimationFrame(() => {
      this.render();
    });
    // ミリ秒から秒に変換
    const sec = performance.now() / 1000;

    for (let i = 0; i < this.meshList.length; i++) {
      this.mesh = this.meshList[i];
    }

    this.camera.lookAt(this.scene.position); // 画面に表示
    this.camera.position.x += (this.mouse.x - this.camera.position.x) * 0.01;
    this.camera.position.y += (-this.mouse.y - this.camera.position.y) * 0.01;

    this.uniforms.time.value += 0.05;

    // 画面に表示
    this.renderer.render(this.scene, this.camera);
  }

  mouseMoved(x, y) {
    this.mouse.x = x - this.w / 2; // 原点を中心に持ってくる
    this.mouse.y = -y + this.h / 2; // 軸を反転して原点を中心に持ってくる
  }

  scrolled(y) {
    this.scrollY = y;
  }

  resized() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.renderer.setSize(this.w, this.h);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.camera.aspect = this.w / this.h;
    this.camera.updateProjectionMatrix();
    this.uniforms.resolution.value.x = this.renderer.domElement.width;
    this.uniforms.resolution.value.y = this.renderer.domElement.height;
  }
}

/** メッシュを継承したドーナツクラスです。 */
class Donuts extends THREE.Mesh {
  /** コンストラクターです。 */
  constructor(size, uniform) {
    // ジオメトリを作成
    const geometry = new THREE.TorusGeometry(size, 10, 32, 100);
    const material = new THREE.ShaderMaterial({
      uniforms: uniform,
      vertexShader: document.getElementById('vertexShader').textContent,
      fragmentShader: document.getElementById('fragmentShader').textContent,
    });
    //const material = new THREE.MeshBasicMaterial({color: 0x6699FF});

    // 継承元のコンストラクターを実行
    super(geometry, material);
  }
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

//このクラス内に ページごとのcanvas外の処理を書いていきます
window.addEventListener('load', function () {
  const canvas = new Canvas();
  canvas.scrolled(window.scrollY);

  /************************/
  /*addEventListener*/
  /************************/

  window.addEventListener('mousemove', (e) => {
    canvas.mouseMoved(e.clientX, e.clientY);
  });

  window.addEventListener('scroll', (e) => {
    canvas.scrolled(window.scrollY);
  });

  window.addEventListener('resize', (e) => {
    canvas.resized();
  });
});
