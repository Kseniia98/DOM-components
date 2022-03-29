const mainElem = document.querySelector('main');

const blocks = [
  { time: '0:00', img: 'assets/js/components/image/sun.png', temperature: '+25'},
  { time: '3:00', img: 'assets/js/components/image/rain.png', temperature: '+10'},
  { time: '6:00', img: 'assets/js/components/image/snow.png', temperature: '-1'},
  { time: '9:00', img: 'assets/js/components/image/rain.png', temperature: '+15'},
  { time: '12:00', img: 'assets/js/components/image/sun.png', temperature: '+21'},
]

mainElem.innerHTML = List({ blocks: blocks})
