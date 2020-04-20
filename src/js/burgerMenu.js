function burgerMenu (){
    const navigation = document.querySelector('.navigation__section-links')
    const burger = document.querySelector('.burger')

    burger.addEventListener('click', function (e) {
        e.preventDefault()
        if (this.classList.contains('burger__line_active')){
            this.classList.remove('burger__line_active')
            navigation.classList.remove('navigation__section-links_active')
        }
        else{
            this.classList.add('burger__line_active');
            navigation.classList.add('navigation__section-links_active')
        }
    })
}

burgerMenu()