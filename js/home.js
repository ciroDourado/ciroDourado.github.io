console.log(
    'Olá criatura curiosa kk :3\n' +
    'Você acabou de se deparar com um easter egg!!\n' +
    'se você, desenvolvedor, se achar à altura, ' +
    'resolva este desafio:'
)
console.log(
    'Digamos que temos um conjunto de strings que representam ' +
    'os primeiros nomes dos habitantes de uma pequena cidade.\n' +
    'Esta cidade possui no total 50.000 habitantes.\n' +
    'O nosso problema aqui é: quantos desses 50.000 nomes ' +
    'armazenados fazem parte de uma lista menor com 500 ' +
    'nomes únicos?'
)
console.log(
    'Seja n o número de elementos da lista maior.\n' +
    'A complexidade não pode ultrapassar O(2n); \n' +
    'O espaço não pode ultrapassar O(n); \n' +
    'A lista maior é imutável, ' +
    'não se encontra ordenada, ' +
    'e pode ter elementos repetidos'
)

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
