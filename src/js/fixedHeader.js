function fixedHeader (){
    const header = document.querySelector('.header')
    const information = document.querySelector('.information')
    window.addEventListener('scroll', function() {
        const userScroll = window.pageYOffset
        const informationScroll = information.scrollHeight

        if (userScroll>=informationScroll){
            header.classList.add('header_fixed')
        }
        else{
            header.classList.remove('header_fixed')
        }
    });
}

fixedHeader()