var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 60,
});

typewriter
  .typeString('Meri pyaari Behan ❤️')
  .pauseFor(1500)
  .deleteAll()
  .typeString('Tere bina sab suna lagta hai...')
  .pauseFor(1500)
  .deleteAll()
  .typeString('Teri muskaan meri duniya hai 🌍')
  .pauseFor(1500)
  .deleteAll()
  .typeString('Tu sirf behen nahi, meri jaan hai 💖')
  .pauseFor(2000)
  .start();
