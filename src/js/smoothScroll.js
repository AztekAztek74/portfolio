function smoothScroll (event, elem) {
    event.preventDefault()
    const desiredElement = document.getElementById(elem)

    desiredElement.scrollIntoView({behavior: "smooth"})
}

window.smoothScroll = smoothScroll

