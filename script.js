let dados=[ {id:1, nome:"Bolo de Prestigio", preco:29.90 }  ]

function insereDados(){
    let bd = JSON.stringify(dados) // transformamos em json e passamos para um variavel 
    sessionStorage.setItem("banco", bd)  // enviamos para a session
}

insereDados()


function compra(){
    let qtd1 = document.getElementById('qtd1').value 
    
    let total = qtd1 * dados[0].preco
    alert(total)
  
    
}