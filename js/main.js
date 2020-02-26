let animFirst = anime({
    targets: '.circle',
    translateX: 800,
    backgroundColor: '#0034EB',
    borderRadius: ['50%', 0],
    easing: 'linear',
    rotate: 45,
    autoplay: false
  })
  let firstClick = document.getElementById('firstClick')
  firstClick.onclick = animFirst.play


//For top blue triangle
  let animSecond = anime({
    targets: '.triangle',
    rotate: 45,
    scale: 0.5,
    autoplay: false
  })
  let secondClick = document.getElementById('secondClick')
  secondClick.onclick = animSecond.play

  //for small blue triangle
let animThird = anime({
  targets: '.triangle__small',
  rotate: ['86.74deg',  360],
  duration: 1500,
  direction: 'alternate',
  autoplay: false
})
let thirdClick = document.getElementById('thirdClick')
thirdClick.onclick = animThird.play


  //for red rec__red
  let animFourth = anime({
  targets: '.rec__red',
  width: '400',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  autoplay: false
});
let fourthClick = document.getElementById('fourthClick')
fourthClick.onclick = animFourth.play


//for two blue rect
var animFifth  = anime.timeline({
  easing: 'easeOutExpo',
  direction: 'alternate',
  duration: 1500
});

animFifth
.add({
  targets: '.rec__blue',
  delay: 1000,
  rotate: [45, 270],
  duration: 2000,
  autoplay: true
})
.add({
  targets: '.rec__blue__two',
  rotate: [45, 360],
  autoplay: true
})

//for rigth black square and small blue rec
let animSix  = anime({
  targets: '.rec__blue__small',
  keyframes: [
    {translateY: -40},
    {translateX: -600},
    {backgroundColor: '#000'},
    {scale: 2},
    {translateY: 40},
    {scale: 1},
    {backgroundColor: '#0034EB'},
    {translateX: 0},
    {translateY: 0},
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  delay: 7000,
  duration: 5000
});


let eightAnim = anime({
  targets: '.circle__down',
  duration: 1000,
  easing: 'easeOutElastic(4, 1.3)',
  translateX: -700,
  scale: .5,
  autoplay: false
})
let eightClick = document.getElementById('eigthtClick')
eigthtClick.onclick = eightAnim.play


//Подключаю библиотеку прокрутки
let controller = new ScrollMagic.Controller()

let square = document.querySelector('.yellow__square__one')
let squareOneAnim = anime({
  targets: square
})
