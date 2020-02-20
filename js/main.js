let animFirst = anime({
    targets: '.circle',
    translateX: 800,
    backgroundColor: '#0034EB',
    borderRadius: ['50%', 0],
    easing: 'linear',
    rotate: 45,
    autoplay: false,
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

/*
let prevRotate = 0
  let secondClick = document.getElementById('secondClick')
  secondClick.onclick = function() {
    anime({
      targets: '.triangle',
      scale: 0.5,
      rotate: function () {
        return  prevRotate + anime.random(-25,100)
      },
      changeComplete: function(el) {
        prevRotate = Number(el.animations[0].currentValue.slice(0,4))
      }
    })
  }
  */
/*
  let animSecond = anime.set('.triangle', {
    rotate: function() { return anime.random(0, 360); },
  });
  let secondClick = document.getElementById('secondClick')
  secondClick.onclick = animSecond
  */
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