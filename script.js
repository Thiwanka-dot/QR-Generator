let imgBox = document.querySelector(".imgBox");
let qrImage = document.getElementById("qrImage");
let name = document.getElementById("name");

function generateQR() {
    if(name.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(name.value);
        imgBox.classList.add("show-img");
    } else{
        name.classList.add("error");
        setTimeout(()=>{
            name.classList.remove("error");
        },1000)
    }
}