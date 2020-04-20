function fixedHeader (){
    const header = document.querySelector('.header')
    const information = document.querySelector('.information')
    const burger = document.querySelector('.navigation__section-links')
    window.addEventListener('scroll', function() {
        const userScroll = window.pageYOffset
        const informationScroll = information.scrollHeight

        if (userScroll>=informationScroll){
            header.classList.add('header_fixed')
            burger.classList.add('navigation__section-links_fixed')
        }
        else{
            header.classList.remove('header_fixed')
            burger.classList.remove('navigation__section-links_fixed')
        }
    });
}

fixedHeader()