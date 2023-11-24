let dados=[ {id:1, nome:"Bolo de Creme", preco:29.90,img: "./img/cremee_choco.jpg",},
            {id:2, nome:"Bolo de Brigadeiro", preco:39.90, img: "./img/brigadeiro_camadas.png", },
            {id:3, nome:"Bolo Bombom", preco:49.90, img: "./img/bombom_uva.jpg",},
            {id:4, nome:"Cuca de Chocolate", preco:59.90,img: "./img/cuca_choco.jpg" },
            {id:5, nome:"Bolo Chocolate B&B", preco:39.90,img: "./img/brigadeiro.png" },
            {id:6, nome:"Bolo Kinder Bueno", preco:59.90,img: "./img/kinder.jpg" },  ]

//usado na função compra

function insereDados(){
    let bd = JSON.stringify(dados) // transformamos em json e passamos para um variavel 
    sessionStorage.setItem("banco", bd)  // enviamos para a session
}
function insereCarrinho() {
  let carrinho = [];
  let cart = JSON.stringify(carrinho)
  if (sessionStorage.getItem("cart") == null) {
    sessionStorage.setItem("cart", cart);
  }
}

insereDados()
insereCarrinho()


function compra1(){
    let qtd1 = document.getElementById('qtd1').value 
    
    if (qtd1 == null || qtd1 == 0){
      alert("Nenhum produto da Boleria Benzinho foi adicionado no carrinho, verifique a quantidade")
    } 
    else{
       alert("O Bolo de Creme foi adicionado ao carrinho!" + "\n Boas Compras Benzinho")
    }

    let total = qtd1 * dados[0].preco
   
    adicionaCarrinho(qtd1, 0)
    
}

function compra2(){
    let qtd2 = document.getElementById('qtd2').value 

    if (qtd2 == null || qtd2 == 0){
      alert("Nenhum produto da Boleria Benzinho foi adicionado no carrinho, verifique a quantidade")
    } 
    else{
      alert("O Bolo de Brigadeiro foi adicionado ao carrinho!"+ "\n Boas Compras Benzinho" )
    }

    let total = qtd2 * dados[1].preco
    adicionaCarrinho(qtd2, 1)
    
}

function compra3(){
    let qtd3 = document.getElementById('qtd3').value 
    
    if (qtd3 == null || qtd3 == 0){
      alert("Nenhum produto da Boleria Benzinho foi adicionado no carrinho, verifique a quantidade")
    } 
    else{
      alert("O Bolo Bombom foi adicionado ao carrinho!"  + "\n Boas Compras Benzinho")
    }

      let total = qtd3 * dados[2].preco
    adicionaCarrinho(qtd3, 2)
    
}

function compra4(){
    let qtd4 = document.getElementById('qtd4').value 
    
    if (qtd4 == null || qtd4 == 0){
      alert("Nenhum produto da Boleria Benzinho foi adicionado no carrinho, verifique a quantidade")
    } 
    else{
      alert(" A Cuca de chocolate foi adicionado ao carrinho!"  + "\n Boas Compras Benzinho")
    }

    let total = qtd4 * dados[3].preco
    adicionaCarrinho(qtd4, 3)
    
}

function compra5(){
  let qtd5 = document.getElementById('qtd5').value 
  
  if (qtd5 == null || qtd5 == 0){
    alert("Nenhum produto da Boleria Benzinho foi adicionado no carrinho, verifique a quantidade")
  } 
  else{
    alert("O Bolo de chocolate B&B foi adicionado ao carrinho!"  + "\n Boas Compras Benzinho")
  }

  let total = qtd5 * dados[4].preco
  adicionaCarrinho(qtd5, 4)
 
}
function compra6(){
  let qtd6 = document.getElementById('qtd6').value 
  
  if (qtd6 == null || qtd6 == 0){
    alert("Nenhum produto da Boleria Benzinho foi adicionado no carrinho, verifique a quantidade")
  } 
  else{
    alert("O Bolo Kinder Bueno foi adicionado ao carrinho!"  + "\n Boas Compras Benzinho")
  }

  let total = qtd6 * dados[5].preco
  adicionaCarrinho(qtd6, 5)

}


 function adicionaCarrinho(qtd, posiçãoDados) {
     let cart = JSON.parse(sessionStorage.getItem("cart"));
     let cloneBolo = dados[posiçãoDados];
     cloneBolo.qtd = qtd;
     if (cart.length == 0) {
       cart.push(cloneBolo);
     } else if(cloneBolo.qtd == ""){
      
     } else {
         resultado = cart.find((valor)=> valor.id === cloneBolo.id)
         if (!resultado) {
           cart.push(cloneBolo);
         } else {
           let index = cart.findIndex(item => item == resultado)
           cart[index] = cloneBolo
         }
       }
      
      sessionStorage.setItem("cart", JSON.stringify(cart))
     }

function atualizaCarrinho() {
  let cart = JSON.parse(sessionStorage.getItem("cart"));
  for (let i = 0; i < cart.length; i++) {
    let qtd = document.querySelector(`#form${cart[i].id}`)
    if (qtd.value == 0){
      cart.splice(i,1)
      qtd.parentNode.parentNode.parentNode.remove()
    } else{
      cart[i].qtd = qtd.value
    }
  }
  sessionStorage.setItem("cart", JSON.stringify(cart));
  atualizaValores();
}
function adicionaItem() {
  console.log("Chamou");
  let cart = JSON.parse(sessionStorage.getItem("cart"))
  let corpo = document.querySelector("#corpo")
  for (let i = 0; i <= cart.length; i++) {
    corpo.innerHTML += `<tr data-id="${cart[i].id}">
    <th scope="row" >
      <div class="d-flex align-items-center">
        <img src="${cart[i].img}" class="img-fluid rounded-3"
          style="width: 120px;" alt="Book">
        <div class="flex-column ms-4">
          <p class="mb-2 ml-2">${cart[i].nome}</p>
        </div>
      </div>
    </th>
    
    <td class="align-middle">
      <div class="d-flex flex-row">
        <input id="form${cart[i].id}" min="0" name="quantity" value=${cart[i].qtd} type="number"
          class="form-control form-control-sm" style="width: 50px;" />
      </div>
    </td>
    <td class="align-middle">
      <p class="mb-0" style="font-weight: 500;">R$${cart[i].preco}</p>
    </td>
    <td class="align-middle">
      <button class="btn btn-light" onclick="atualizaCarrinho()">Atualizar</button>
    </td>
  </tr>
  `;
  atualizaValores();
  }
}
function atualizaValores() {
  let cart = JSON.parse(sessionStorage.getItem("cart"));
  let tax = 10
  let subTotalE = document.querySelector("#subTotal")
  let totalTaxE = document.querySelector("#totalTax");
  let checkoutE = document.querySelector("#checkout");
  let vFinal = 0
  for (let i = 0; i < cart.length; i++) {
    vFinal += (cart[i].preco * parseInt(cart[i].qtd))
  }
  subTotalE.innerHTML = `R$${vFinal.toFixed(2)}`;
  totalTaxE.innerHTML = `R$${(vFinal + tax).toFixed(2)}`
  checkoutE.innerHTML = `R$${(vFinal + tax).toFixed(2)}`;
  
}
