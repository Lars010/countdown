const fin = new Date("January 29, 2023 00:00:00"); // Fecha y hora final

const actualizarContador = () => {
  const ahora = new Date();

  const diferencia = fin - ahora;

 
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

 
  document.querySelector(" .dia").textContent = dias;
  document.querySelector(" .hora").textContent = horas;
  document.querySelector(".minutos").textContent = minutos;
  document.querySelector(".segundos").textContent = segundos;
};


setInterval(actualizarContador, 1000);