function smoothScroll (event, elem) {
    event.preventDefault()
    const desiredElement = document.getElementById(elem)
    const href = document.querySelector(`.navigation__link_${elem}`)

    href.addEventListener('click', 
        function handleHrefClick() {
            desiredElement.scrollIntoView({behavior: "smooth"})
        })
}

window.smoothScroll = smoothScroll

