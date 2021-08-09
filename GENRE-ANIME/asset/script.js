const template = (data) => {
   return  `<h2>${data}</h2>`
}
const name = prompt("Siapa Namamu ?");
   if (name || name !== "") {
       alert("Selamat Membaca, " + name + "!");
    } else {
       alert("Selamat Datang Di Website Saya !");
    }

if(name != null){
   document.querySelector('#user').innerHTML = template("Selamat Membaca, " + name + "!");
} else {
   document.querySelector('#user').innerHTML = template("Selamat Membaca !");
}







