function circle1() {
  const canvas = $('.progress-canvas')[0]; // 获取canvas元素
  const ctx = canvas.getContext('2d');  //获取画图环境，指明为2d
  const centerX = canvas.width / 2;  //Canvas中心点x轴坐标
  const centerY = canvas.height / 2;  //Canvas中心点y轴坐标
  const rad = Math.PI * 2 / 100; //将360度分成100份，那么每一份就是rad度
  let speed = 0; //加载的快慢就靠它了

  /**
   * 绘制运动轨迹的圈
   */
  function locusCircle() {
    ctx.save();
    ctx.beginPath(); // 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
    // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    // context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针false/逆时针true);
    ctx.lineWidth = 16; //设置线宽
    ctx.strokeStyle = "rgba(255,255,255,.6)";
    ctx.arc(centerX, centerY, 80, 0, Math.PI * 2, false);
    ctx.stroke(); // 通过线条来绘制图形轮廓。
    ctx.closePath(); // 闭合路径之后图形绘制命令又重新指向到上下文中。
    ctx.restore();
  }

  /**
   * 绘制运动画圈部分
   */
  function moveCircle(n) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 18;
    ctx.strokeStyle = '#fff';
    ctx.lineCap = 'round';
    ctx.arc(centerX, centerY, 80, Math.PI / 2, Math.PI / 2 + n * rad, false);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }
  /**
   * 绘制文字
   * @param {*} n 
   */
  function text(n){
    ctx.save();
    ctx.strokeStyle = "#fff"; //设置描边样式
    ctx.font = "30px Arial"; //设置字体大小和字体
    //绘制字体，并且指定位置
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.strokeText(n.toFixed(0)+"%", centerX, centerY);
    // ctx.stroke(); //执行绘制
    ctx.restore();
  }

  let timer = null;
  clearInterval(timer);
  timer = setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    locusCircle();
    moveCircle(speed);
    text(speed);
    speed += 1;
    if(speed > 100) {
      speed = 100;
      clearInterval(timer);
    };
  },100)
}


function circle2() {
  const canvas = $('.progress-canvas2')[0];
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const rad = Math.PI * 2 / 100;
  let speed = 0;

  function locusCircle() {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 30;
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.arc(centerX, centerY, 72, 0, Math.PI * 2, false);
    ctx.fillStyle = '#fff'
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  function moveCircle(n) {

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 18;
    ctx.strokeStyle = 'orange';
    ctx.lineCap = 'round';
    ctx.arc(centerX, centerY, 80, Math.PI / 2, Math.PI / 2 + n * rad, false);
    ctx.stroke();

    const lineargradient = ctx.createLinearGradient(centerX,centerY-80,centerX,centerY+80);
    lineargradient.addColorStop(0,'lightgreen');
    lineargradient.addColorStop(1,'yellow');

    ctx.lineWidth = 14;
    ctx.strokeStyle = lineargradient;
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.closePath();
    ctx.restore();
  }

  function text(n) {
    ctx.save();
    ctx.fillStyle = "#000"; //设置描边样式
    ctx.font = "30px Arial"; //设置字体大小和字体
    //绘制字体，并且指定位置
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(n.toFixed(0)+"%", centerX, centerY);
    // ctx.stroke(); //执行绘制
    ctx.restore();
  } 

  let timer = null;
  clearInterval(timer);
  timer = setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    locusCircle();
    moveCircle(speed);
    text(speed);
    speed += 1;
    if(speed > 100) {
      speed = 100;
      clearInterval(timer);
    };
  },100)
}


function circle3() {
  const canvas = $('.progress-canvas3')[0];
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const rad = Math.PI * 2 / 100;
  let speed = 0;

  function locusCircle(n) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 16;
    let bg = "rgba(255,255,255,.6)";
    if (n === 100) {
      bg = '#fff';
    }
    ctx.strokeStyle = bg;
    ctx.arc(centerX, centerY, 80, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  function moveCircle(n) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(centerX, centerY);
    ctx.rotate(n * rad);
    ctx.lineWidth = 18;
    let lineargradient = ctx.createLinearGradient(-80,0,0,0);
    lineargradient.addColorStop(0,'rgba(255,255,255,1)');
    lineargradient.addColorStop(1,'rgba(255,255,255,0)');

    if (n === 100) {
      lineargradient = 'rgba(255,255,255,0)';
    }
    ctx.strokeStyle = lineargradient;
    ctx.lineCap = 'round';
    ctx.arc(0, 0, 80, Math.PI / 2, Math.PI, false);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  function text(n){
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.font = "30px Arial";
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    let loadingTxt = 'loading';
    if (n === 100) {
      loadingTxt = 'completed'
    }
    ctx.fillText(loadingTxt, centerX, centerY);
    ctx.restore();
  }

  let timer = null;
  clearInterval(timer);
  timer = setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    locusCircle(speed);
    moveCircle(speed);
    text(speed);
    speed += 1;
    if(speed > 100) {
      speed = 100;
      clearInterval(timer);
    };
  },100)
}

circle1();
circle2();
circle3();