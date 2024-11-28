document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menuList = document.querySelector('.menu-list');

  menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      menuList.classList.toggle('active');
  });
});
// Función para calcular el tiempo restante
function getTimeRemaining(endtime) {
  const total = endtime - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
      total,
      days,
      hours,
      minutes,
      seconds
  };
}

// Función para actualizar el reloj
function updateClock() {
  const t = getTimeRemaining(blackFriday);

  document.getElementById('days').innerHTML = t.days;
  document.getElementById('hours').innerHTML = ('0' + t.hours).slice(-2);
  document.getElementById('minutes').innerHTML = ('0' + t.minutes).slice(-2);
  document.getElementById('seconds').innerHTML = ('0' + t.seconds).slice(-2);

  if (t.total <= 0) {
      clearInterval(timeinterval);
      document.getElementById('countdown').innerHTML = "¡Black Friday ha llegado!";
  }
}

// Establecer la fecha del Black Friday (último viernes de noviembre)
function getBlackFridayDate() {
  const now = new Date();
  const year = now.getMonth() < 10 ? now.getFullYear() : now.getFullYear() + 1;
  const blackFridayDate = new Date(year, 10, 1); // 1 de noviembre
  blackFridayDate.setDate(blackFridayDate.getDate() + (5 - blackFridayDate.getDay() + 7) % 7 + 21);
  return blackFridayDate;
}

const blackFriday = getBlackFridayDate().getTime();

// Inicializar el reloj
updateClock(); // Ejecutar la función una vez al principio para evitar el retraso
const timeinterval = setInterval(updateClock, 1000);

