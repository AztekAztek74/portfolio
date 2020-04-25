function burgerMenu (){
    const navigation = document.querySelector('.navigation__section-links')
    const burger = document.querySelector('.burger')
    const background = document.querySelector('.navigation__section-background')
    const links = document.querySelectorAll('.navigation__link')
    
    burger.addEventListener('click', function (e) {
        e.preventDefault()
        if (this.classList.contains('burger__line_active')){
            this.classList.remove('burger__line_active')
            navigation.classList.remove('navigation__section-links_active')
            background.classList.remove('navigation__section-background_active')
            
        }
        else{
            this.classList.add('burger__line_active');
            navigation.classList.add('navigation__section-links_active')
            background.classList.add('navigation__section-background_active')
            for(let el of links){
                el.addEventListener('click', function(){
                    console.log('for')
                    burger.classList.remove('burger__line_active')
                    navigation.classList.remove('navigation__section-links_active')
                    background.classList.remove('navigation__section-background_active')
                })
            }
        }
    })
    background.addEventListener('click', function(){
        burger.classList.remove('burger__line_active')
        navigation.classList.remove('navigation__section-links_active')
        background.classList.remove('navigation__section-background_active')
    })
    
}

burgerMenu()