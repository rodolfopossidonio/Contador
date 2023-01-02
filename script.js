//contador inicial
var count = 0

// selecionar o valor e valor do botao

const value = document.getElementById('value')
const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if(styles.contains('diminuir')){
            count--
        }

        else if(styles.contains('aumentar')){
            count ++
        } else{
            count = 0 
        }

        if(count > 0){
            value.style.color = "#34A853"

        }

        else if(count < 0 ){
            value.style.color = "#ea4335"
        } else{
            value.style.color = "#333"
        }

        value.textContent = count
    })
})