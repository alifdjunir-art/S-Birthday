// =========================
// DATA PIN
// =========================


let pinInput = "";

const password = "140906";




// =========================
// BUKA HALAMAN PIN
// =========================


function openPin(){


    document
    .getElementById("opening")
    .classList
    .add("hidden");



    document
    .getElementById("pinPage")
    .classList
    .remove("hidden");



}







// =========================
// INPUT ANGKA PIN
// =========================


function addNumber(num){


    if(pinInput.length < 6){


        pinInput += num;


        updatePin();


    }



    if(pinInput.length === 6){


        setTimeout(()=>{


            checkPin();


        },300);



    }


}







// =========================
// TAMPIL PIN
// =========================


function updatePin(){


    let boxes =
    document.querySelectorAll(".pin-item");



    boxes.forEach((box,index)=>{


        if(index < pinInput.length){


            box.classList.add("active");


            box.innerHTML="●";


        }

        else{


            box.classList.remove("active");


            box.innerHTML="";


        }



    });


}







// =========================
// HAPUS PIN
// =========================


function deleteNumber(){


    pinInput =
    pinInput.slice(0,-1);


    updatePin();


}







// =========================
// CEK PASSWORD
// =========================


function checkPin(){



    if(pinInput === password){



        document
        .getElementById("pinPage")
        .classList
        .add("hidden");



        document
        .getElementById("messagePage")
        .classList
        .remove("hidden");



    }



    else{



        document
        .getElementById("hintPopup")
        .classList
        .remove("hidden");



        pinInput="";


        updatePin();



    }



}







// =========================
// TUTUP POPUP
// =========================


function closeHint(){


    document
    .getElementById("hintPopup")
    .classList
    .add("hidden");


}







// =========================
// HALAMAN AKHIR
// =========================


function openFinal(){



    document
    .getElementById("messagePage")
    .classList
    .add("hidden");



    document
    .getElementById("finalPage")
    .classList
    .remove("hidden");



}








// =========================
// KIRIM PESAN SEMENTARA
// =========================


function sendMessage(){


    let hadiah =
    document.getElementById("visitorHadiah").value;


    let pesan =
    document.getElementById("visitorMessage").value;



    if(hadiah==="" || pesan===""){

        alert("Diisi dulu kocakk");

        return;

    }



    let tombol =
    document.querySelector("#finalPage button");


    // loading
    tombol.innerHTML="⏳ Mengirim...";
    tombol.disabled=true;



    fetch(
        "https://script.google.com/macros/s/AKfycbxnCEYA2N0DuckYLcE7cvDQcFcly2RZo0w3gOhjiKyVy97RyxI7X7SvfgLw-kJ6vI1PwA/exec",
        {

            method:"POST",

            body:JSON.stringify({

                hadiah:hadiah,

                pesan:pesan

            })

        }

    )


    .then(()=>{


        // kembalikan tombol
        tombol.innerHTML="Kirim";
        tombol.disabled=false;



        // popup berhasil
        showSuccess();



        document
        .getElementById("visitorHadiah")
        .value="";


        document
        .getElementById("visitorMessage")
        .value="";


    })


    .catch(()=>{


        tombol.innerHTML="Kirim";
        tombol.disabled=false;


        alert(
        "Gagal mengirim, coba lagi ya"
        );


    });



}

//POP UP LAST
function showSuccess(){

    document
    .getElementById("successPopup")
    .classList
    .remove("hidden");

}



function closeSuccess(){

    document
    .getElementById("successPopup")
    .classList
    .add("hidden");

}
