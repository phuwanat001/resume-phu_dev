const text = "I Am Into Web Developer"; // แก้ Devloper เป็น Developer
const speed = 100;
const eraseSpeed = 50;
const delay = 1000;
let i = 0;
let isDeleting = false;
const target = document.getElementById("typewriter");

function typeLoop() {
  if (!isDeleting) {
    target.innerHTML = text.substring(0, i + 1);
    i++;
    if (i === text.length) {
      isDeleting = true;
      setTimeout(typeLoop, delay);
    } else {
      setTimeout(typeLoop, speed);
    }
  } else {
    target.innerHTML = text.substring(0, i - 1);
    i--;
    if (i === 0) {
      isDeleting = false;
      setTimeout(typeLoop, delay);
    } else {
      setTimeout(typeLoop, eraseSpeed);
    }
  }
}
{
}
typeLoop(); // เริ่มทำงาน
