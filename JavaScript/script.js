iconsHover()
function iconsHover(){
  const iconsHover = ["facebook", "youtube", "twitter", "pinterest", "instagram"]
  const icons = document.querySelectorAll('.icons')

  icons.forEach((item, index) =>{
    item.addEventListener('mouseover', function(){
      mudarCor(index)
    })
    item.addEventListener('mouseout', function(){
      tirarCor(index)
    })
  })

  function mudarCor(index){
    icons[index].setAttribute('src', `images/icon-green-` + `${iconsHover[index]}` + `.svg`)
  }

  function tirarCor(index){
    icons[index].setAttribute('src', `images/icon-` + `${iconsHover[index]}` + `.svg`)
  }
}
menuMobile()
function menuMobile(){

  const btn = document.querySelector('.openMenu')
  const nav = document.querySelector('.header-nav')

  btn.addEventListener('click', ativarMenu)

  function ativarMenu(){
    nav.classList.toggle('active')
    
    const btnClose = document.querySelectorAll('img')

    if(btnClose[1].getAttribute('src') != 'images/icon-close.svg'){
      btnClose[1].setAttribute('src', 'images/icon-close.svg')
    }else{
      btnClose[1].setAttribute('src', 'images/icon-hamburger.svg')
    }
  }
}