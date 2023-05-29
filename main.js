const botoes = document.querySelectorAll('input[type="button"]')

//comentario
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const numero = botao.value
        const input_tel=document.querySelector('input[type="tel"]')
        input_tel.value=input_tel.value+numero
    })
});