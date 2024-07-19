import dotenv from 'dotenv';
import L from 'leaflet';

dotenv.config();
//import dotenv from 'dotenv';
//import L from 'leaflet';

//dotenv.config();

const modals = document.querySelectorAll("[data-modal]");

modals.forEach(trigger => {
  trigger.addEventListener("click", event => {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add("open");

    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(exit => {
      exit.addEventListener("click", event => {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  });
});


const map = L.map('map').setView([-15.8419063, -47.9987725], 13);

L.tileLayer('https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
  attribution: '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  minZoom: 0,
  maxZoom: 22,
  accessToken: process.env.JAWG_ACCESS_TOKEN
}).addTo(map);

L.marker([-15.8419063, -47.9987725]).addTo(map);

