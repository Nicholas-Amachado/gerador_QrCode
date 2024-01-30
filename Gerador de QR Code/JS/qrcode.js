const container = document.querySelector(".container");

const qrCodeButton = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("img");


// Funções
function generateQrCode(){
    // console.log("Foi");
    const qrCodeValue = qrCodeInput.value;

    if(!qrCodeValue)return;
    
    qrCodeButton.innerHTML="Gerando QRCode..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeValue}` //API PARA GERAR O QR CODE COM O VALOR ENVIADO

    qrCodeImg.addEventListener("load", ()=>{        //Faz com que só carregue o qrcode depois que carrega da API
        container.classList.add("active");
        qrCodeButton.innerHTML="QRCode Finalizado!"
    })





}

 // É SEPARADO AS FUNÇÕES DO SISTEMA DOS EVENTOS, PARA NÃO MISTURAR FUNÇÕES COM EVENTOS, E PODER REUSAR MAIS OS EVENTOS, SE INSERIR TODO O CONTEUDO EM UM EVENTO ELE VAI SERVIR PARA UMA COISA ESPECIFICA, AGR SE COLOCAR FUNÇÕES NESSE EVENTO, AI JA FICA MAIS VERSATIL

// Eventos

qrCodeButton.addEventListener("click", (e)=>{
    generateQrCode();
})

qrCodeInput.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
        generateQrCode();
    }
})

// Limpar o QRcode

qrCodeInput.addEventListener("keyup", (e)=>{
    if(!qrCodeInput.value){
        container.classList.remove("active");
        qrCodeButton.innerHTML = "Gerar QR Code"
    }
})