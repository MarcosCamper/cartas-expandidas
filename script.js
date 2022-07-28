const panels = document.querySelectorAll('.panel'); //Criando uma constante panels onde ele seleciona todos os panels

panels.forEach(panel => {
    panel.addEventListener('click', () => { //Ao clicar
        removeActiveClass() // Será removido os paineis ativos
        panel.classList.add('active')  // e ativará o painel clicado
    })
})

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
