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


//поворот для первого квадрата
let squareOne = document.querySelector('.yellow__square__one') 
let squareOneAnim = anime({
  targets: squareOne,
  translateY: 200,
  rotate: '+= 2turn',
  easing: 'linear',
  autoplay: false
})

//Акцивация анимации при скролле для первого квадрата
let mainSecond = document.querySelector('.main__sec')
new ScrollMagic.Scene({
  triggerElement: mainSecond,
  duration: mainSecond.getBoundingClientRect().height
})
.addTo(controller)
.setPin(squareOne)
.on('progress', e => {
  squareOneAnim.seek(squareOneAnim.duration * e.progress) 
})


//поворот для второго квадрата
let squareSec = document.querySelector('.yellow__square__sec') 
let squareSecAnim = anime({
  targets: squareSec,
  translateY: 150,
  scale: 5,
  rotate: '+= 2turn',
  easing: 'linear',
  autoplay: false
})

//Акцивация анимации при скролле для первого квадрата
new ScrollMagic.Scene({
  triggerElement: mainSecond,
  duration: mainSecond.getBoundingClientRect().height
})
.addTo(controller)
.setPin(squareSec)
.on('progress', e => {
  squareSecAnim.seek(squareSecAnim.duration * e.progress) 
})


//поворот для третьего квадрата
let squareTh = document.querySelector('.yellow__square__th') 
let squareThAnim = anime({
  targets: squareTh,
  translateY: 50,
  rotate: '+= 2turn',
  easing: 'linear',
  autoplay: false
})

//Акцивация анимации при скролле для первого квадрата
new ScrollMagic.Scene({
  triggerElement: mainSecond,
  duration: mainSecond.getBoundingClientRect().height
})
.addTo(controller)
.setPin(squareTh)
.on('progress', e => {
  squareThAnim.seek(squareThAnim.duration * e.progress) 
})

//для "свайпа" экранов
/*
let wipeAnimation = new TimelineMax();
wipeAnimation.fromTo("section.main__section__blue", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
wipeAnimation.fromTo("section.main__section__red",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
wipeAnimation.fromTo("section.main__section__white", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

new ScrollMagic.Scene({
  triggerElement: "#pinContainer",
  triggerHook: "onLeave",
  duration: "300%"
})
.setPin('.main__section')
.setTween(wipeAnimation)
.addIndicators({
  colorTrigger: 'white',
  colorStart: 'white',
  colorEnd: 'white',
  indent: 'unpin'
}
)
.addTo(controller);
*/

//для увелич.черного квадрата
let squareBlack = document.querySelector('.main__third')
let squareBlackAnim = anime({
  targets: squareBlack,
  scale: 7.5,
  duration: 1500,
  easing: 'linear',
  autoplay: false
})

new ScrollMagic.Scene({
  triggerElement: squareBlack,
  triggerHook: 1
})
.addTo(controller)
.on('enter', () => squareBlackAnim.play())