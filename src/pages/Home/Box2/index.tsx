import { useLayoutEffect, useRef } from 'react';
import { ReactComponent as Box } from '@/assets/box.svg';

import styles from './index.less';

const Page = () => {
  useLayoutEffect(() => {
    var cc = document.querySelectorAll('.cvs');
    var cctx = [];
    for (var i = 0; i < cc.length; i++) {
      cctx[i] = cc[i].getContext('2d');
      console.log(cctx[i]);
      cc[i].width = 150;
      cc[i].height = 150;
      cctx[i].fillStyle = '#030202';
    }
    var c = document.createElement('canvas');
    var ctx = c.getContext('2d');
    var cw = (c.width = 150);
    var ch = (c.height = 150);
    var cx = cw / 2,
      cy = ch / 2;
    var rad = Math.PI / 180;
    var frames = 0;
    var Ry = [];
    var R = 20;
    var A = 1.5,
      A1;
    var B = 1;
    var K = 3;
    var rotation = 0;
    ctx.lineWidth = 2;

    // 彩色小方框
    function buildRy(rotation, A1) {
      for (var a = 0; a < 360; a += 3) {
        var o = {};
        o.r = A * R + B * R * Math.sin(K * (a + rotation) * rad);
        o.x = cx + o.r * Math.cos(a * rad);
        o.y = cy + o.r * Math.sin(a * rad);
        o.r1 = A1 * R + B * R * Math.cos(K * (a - rotation / 3) * rad);
        o.x1 = cx + o.r1 * Math.cos(a * rad);
        o.y1 = cy + o.r1 * Math.sin(a * rad);
        o.color = 'hsl(' + a + ', 100%,50%)';
        // o.color = '#ffffff';
        Ry.push(o);
      }
    }

    function Draw() {
      Ry.length = 0;
      rotation++;
      A1 = A * Math.sin(rotation * rad);
      buildRy(rotation, A1);
      ctx.clearRect(0, 0, cw, ch);
      for (var i = 0; i < Ry.length; i += 6) {
        var o = Ry[i];
        ctx.strokeStyle = o.color;
        ctx.beginPath();
        ctx.strokeRect(o.x, o.y, 3, 3);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeRect(o.x1, o.y1, 2, 2);
      }
      let requestId = window.requestAnimationFrame(Draw);
      var img = c;
      for (var i = 0; i < cctx.length; i++) {
        cctx[i].fillRect(0, 0, cw, ch);
        cctx[i].drawImage(img, 0, 0);
      }
    }
    let requestId = window.requestAnimationFrame(Draw);
  }, []);
  return (
    <div className={styles.page}>
      <div className="cube">
        <div className="face back">
          <canvas className="cvs"></canvas>
        </div>
        <div className="face left">
          <canvas className="cvs"></canvas>
        </div>
        <div className="face right">
          <canvas className="cvs"></canvas>
        </div>
        <div className="face top">
          <canvas className="cvs"></canvas>
        </div>
        <div className="face bottom">
          <canvas className="cvs"></canvas>
        </div>
        <div className="face front">
          <canvas className="cvs"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Page;
