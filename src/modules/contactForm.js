const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
  e.preventDefault();
  let ebody = `
  <h1>First Name: </h1>${fname.value}
  <br>
  <h1>Last Name: </h1>${lname.value}
  `;

  Email.send({
    SecureToken : "ff10c9f0-f510-4582-8a16-30a19c6f0a4d",
    To : 'newbravestallion@gmail.com',
    From : "newbravestallion@gmail.com",
    Subject : "This is the subject newbravestallion",
    Body : ebody
  }).then(
    message => alert(message)
  );
});

async function sendEmail() {
  Email.send({
    SecureToken : "ff10c9f0-f510-4582-8a16-30a19c6f0a4d",
    To : 'newbravestallion@gmail.com',
    From : "newbravestallion@gmail.com",
    Subject : "This is the subject newbravestallion",
    Body : "this is the newbravestallion email2"
  }).then(
  message => alert(message)
  );
}



// Email.send({
//   Host : "smtp.elasticemail.com",
//   Username : "username",
//   Password : "3CF6C68C3B8109FD9753FFC2DD8C83686994",
//   To : 'ivgvi@mail.ru',
//   From : "ivgvi@mail.ru",
//   Subject : "This is the subject",
//   Body : "And this is the body"
// }).then(
// message => alert(message)
// );

// token 963fe688-fe71-448d-87b0-f18bb220d1b5
// pw 3CF6C68C3B8109FD9753FFC2DD8C83686994


// for newbravestallion@gmail.com
// pw CC27E2D0DB676A9830C1706A50135628DD31
// token ff10c9f0-f510-4582-8a16-30a19c6f0a4d