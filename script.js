const formProduto = document.getElementById("form")
const formRemoverProduto = document.getElementById("form-remover")

const formCliente = document.getElementById("form2")
const formRemoverCliente = document.getElementById("form-remover2")



let chave = 0

localStorage.clear()

formProduto.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let nomeProduto = document.getElementById("nome-prod").value
    let precoProduto = document.getElementById("preco-input").value
    let qntProduto = document.getElementById("quantidade-input").value
    let codProduto = document.getElementById("cod-input").value
    let erro = document.getElementById("error")

    let data = {
        key: chave,
        nomeProduto,
        precoProduto,
        qntProduto,
        codProduto
    }
    
    let convertData = JSON.stringify(data);

    console.log(convertData)


    if((nomeProduto != '') && (precoProduto !== '') && (qntProduto !== '') && (codProduto !== '')) {

        localStorage.setItem(data.key, convertData)
        chave += 1
        erro.innerHTML = 'Cadastro feito com sucesso!'
    } 
    else {
        erro.innerHTML = `Digite todos os campos!`
    }

})

formRemoverProduto.addEventListener('submit', (e) => {
    e.preventDefault();

    let chaveDel = document.getElementById("remover-id").value
    let erro = document.getElementById("error")
    let encontrou = false
    erro.innerHTML = ''

    if(chaveDel != ''){
        for(var i = 0; i < localStorage.length; i++){
            if(localStorage.key(i) === chaveDel) {
                encontrou = true
                break
            } else {
                encontrou = false
            }
        }
        
        if(encontrou) {
            localStorage.removeItem(chaveDel)
            erro.innerHTML = `Remoção feita com sucesso!`
        } else {
            erro.innerHTML = `Item já foi removido ou não existe!`
        }
    } else {
        erro.innerHTML = `Por favor digite uma chave!`
    }
    
})


formCliente.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let nomeCliente = document.getElementById("nome-cliente").value
    let emailCliente = document.getElementById("email-input").value
    let celCliente = document.getElementById("cel-input").value
    let cidadeCliente = document.getElementById("cidade-input").value
    let erro = document.getElementById("error2")

    let data = {
        key: chave,
        nomeCliente,
        emailCliente,
        celCliente,
        cidadeCliente
    }
    
    let convertData = JSON.stringify(data);


    if((nomeCliente != '') && (emailCliente !== '') && (celCliente !== '') && (cidadeCliente !== '')) {

        localStorage.setItem(data.key, convertData)
        chave += 1
        erro.innerHTML = 'Cadastro feito com sucesso!'
    } 
    else {
        erro.innerHTML = `Digite todos os campos!`
    }

})

formRemoverCliente.addEventListener('submit', (e) => {
    e.preventDefault();

    let chaveDel = document.getElementById("remover-id2").value
    let erro = document.getElementById("error2")
    let encontrou = false
    erro.innerHTML = ''

    if(chaveDel != ''){
        for(var i = 0; i < localStorage.length; i++){
            if(localStorage.key(i) === chaveDel) {
                encontrou = true
                break
            } else {
                encontrou = false
            }
        }
        
        if(encontrou) {
            localStorage.removeItem(chaveDel)
            erro.innerHTML = `Remoção feita com sucesso!`
        } else {
            erro.innerHTML = `Item já foi removido ou não existe!`
        }
    } else {
        erro.innerHTML = `Por favor digite uma chave!`
    }
    
})