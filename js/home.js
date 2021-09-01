let nav     = document.getElementsByTagName('nav')[0]
let navText = document.getElementById('textoDaNav')


window.addEventListener('scroll', () => {
    window.scrollTop == 0 || window.pageYOffset == 0?
        expandirNavBar():
        encolherNavBar();
}, false)


function encolherNavBar() {
    nav.classList.remove('NavExpandida')
    nav.classList.add('NavEncolhida')

    navText.classList.remove('TextoNavExpandida')
    navText.classList.add('TextoNavEncolhida')
} // encolherNavBar


function expandirNavBar() {
    nav.classList.remove('NavEncolhida')
    nav.classList.add('NavExpandida')

    navText.classList.remove('TextoNavEncolhida')
    navText.classList.add('TextoNavExpandida')
} // expandirNavBar
