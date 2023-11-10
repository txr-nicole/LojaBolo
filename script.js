let dados=[ {id:1, nome:"Bolo de Creme", preco:29.90 },
            {id:2, nome:"Bolo de Brigadeiro", preco:39.90 },
            {id:3, nome:"Bolo de Coco", preco:49.90 },
            {id:4, nome:"Cuca de Chocolate", preco:59.90 },  ]
let carrinho = []
//usado na função compra

function insereDados(){
    let bd = JSON.stringify(dados) // transformamos em json e passamos para um variavel 
    sessionStorage.setItem("banco", bd)  // enviamos para a session
}

insereDados()


function compra1(){
    let qtd1 = document.getElementById('qtd1').value 
    
    let total = qtd1 * dados[0].preco
    alert(total)
    adicionaCarrinho(qtd1, 0)
  
    
}

function compra2(){
    let qtd2 = document.getElementById('qtd2').value 
    
    let total = qtd2 * dados[1].preco
    alert(total)
    adicionaCarrinho(qtd2, 1)
  
    
}

function compra3(){
    let qtd3 = document.getElementById('qtd3').value 
    
    let total = qtd3 * dados[2].preco
    alert(total)
    adicionaCarrinho(qtd3, 2)
  
    
}

function compra4(){
    let qtd4 = document.getElementById('qtd4').value 
    
    let total = qtd4 * dados[3].preco
    alert(total)
    adicionaCarrinho(qtd4, 3)
  
    
}



function adicionaCarrinho(qtd, posiçãoDados) {
    let cloneBolo = dados[posiçãoDados];
    cloneBolo.qtd = qtd;
    for (let i = 0; i < carrinho.length; i++) {
      if (carrinho[i].id == cloneBolo.id) {
        carrinho[i] = cloneBolo;
        console.log(carrinho);
      } else {
        carrinho.push(cloneBolo);
        console.log(carrinho);
      }
    }
    if (carrinho.length == 0) {
      carrinho.push(cloneBolo);
      console.log(carrinho);
    }
}


