
const email = ['vincenzo@gmail.com', 'gioele.gmail.com', 'marta@gmail.com', 'federico@gmail.com', 'marta@gmail.com'];
const useremail = prompt("Qual'è la tua email?");
console.log(useremail);
let isPresentEmail = false;
for(let i = 0; i <= email.length; i++) {
    const curEmail = email[i];

    if (useremail === curEmail) {
        isPresentEmail = true;
    }
}

 if (isPresentEmail) {
    console.log("Accesso consentio");
 } else {
    console.log("Accesso negato");
 }