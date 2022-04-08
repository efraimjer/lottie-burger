const burger = document.querySelector('#burger')
const nav = document.querySelector('.floating-nav')

const Animate = () =>{

    burger.play()
    
    if(nav.classList.contains('active')){
        burger.setDirection(1)        
    }
    else {
        burger.setDirection(-1)    
    }   
}

burger.addEventListener('click', (e)=>{
    nav.classList.toggle('active')
    Animate()
})