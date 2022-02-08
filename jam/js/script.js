const jam = document.querySelector(`.jamm`);
const menit = document.querySelector(`.menit`);
const detik = document.querySelector(`.detik`);

function waktu() {
  const sekarang = new Date();

  const detikk = sekarang.getSeconds();
  const degratanDetik = (detikk / 60) * 360 + 90;
  detik.style.transform = `rotate(${degratanDetik}deg)`;

  const menitt = sekarang.getMinutes();
  const degratanMenit = (menitt / 60) * 360 + (detikk / 60) * 6 + 90;
  menit.style.transform = `rotate(${degratanMenit}deg)`;

  const jamm = sekarang.getHours();
  const degratanJam = (jamm / 12) * 360 + (menitt / 60) * 30 + 90;
  jam.style.transform = `rotate(${degratanJam}deg)`;
}
setInterval(waktu, 1000);

waktu();
