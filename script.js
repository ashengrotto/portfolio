const aboutPic = document.getElementById('about-pic');
let hoverCount = 0;

aboutPic.addEventListener('mouseenter', function() {
  hoverCount++;
  switch(hoverCount) {
    case 1:
      this.src = "./assets/about-pic-2.JPEG";
      break;
    case 2:
      this.src = "./assets/about-pic-3.JPEG";
      break;
    case 3:
      this.src = "./assets/about-pic-1.JPEG";
      hoverCount = 0;
      break;
    default:
      break;
  }
});

