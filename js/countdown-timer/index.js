const targetDate = new Date('2024-09-07T16:00:00'); // Substitua pela data alvo desejada

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('days').innerHTML = `${days}<rt>Dias</rt>`;
      document.getElementById('hours').innerHTML = `${hours}<rt>Horas</rt>`;
      document.getElementById('minutes').innerHTML = `${minutes}<rt>Minutos</rt>`;
      document.getElementById('seconds').innerHTML = `${seconds}<rt>Segundos</rt>`;

      if (distance < 0) {
        clearInterval(interval);
        document.getElementById('days').innerHTML = `0<rt>Dias</rt>`;
        document.getElementById('hours').innerHTML = `0<rt>Horas</rt>`;
        document.getElementById('minutes').innerHTML = `0<rt>Minutos</rt>`;
        document.getElementById('seconds').innerHTML = `0<rt>Segundos</rt>`;
      }
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Atualize imediatamente ao carregar a página