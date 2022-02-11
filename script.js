let img_src = [
    "images/wizard.png",
    "images/apple.png",
    "images/pear.png",
    
  ];
  i = 0;
  function next() {
    i++;
    if (i >= img_src.length) i = 0;
    addeffect();
    setTimeout(change, 1000);
  }
  function back() {
    i--;
    if (i < 0) i = img_src.length - 1;
    addeffect();
    setTimeout(change, 1000);
  }
  let timer;
  let effect = "go";
  function start() {
    stop();
    timer = setInterval(function () {
      next();
    }, 3000);
  }
  function stop() {
    clearInterval(timer);
  }
  let j = 0;
  window.onload = function () {
    let miniimages = document.getElementsByClassName("mini");
    for (let j = 0; j < miniimages.length; j++) {
      miniimages[j].onclick = show;
    }
  };
  function show(event) {
    i = j;
    let image = event.target;
    slider.src = image.src;
  
  }
  function addeffect() {
    slider.classList.add(effect);
  }
  function change() {
    slider.src = img_src[i];
    slider.classList.remove(effect);
  }
  function getEffect() {
    let ef = document.forms["effects"];
    for (let y = 0; y < ef.length; y++) {
      if (ef[y].checked) {
        effect = ef[y].value;
      }
    }
  }