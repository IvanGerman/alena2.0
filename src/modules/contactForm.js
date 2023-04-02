const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');
const textareaForm = document.getElementById('text-data');


submit.addEventListener('submit',(e)=>{
  e.preventDefault();
  let ebody = `
  <h1>First Name: </h1>${fname.value}
  <br>
  <h1>Last Name: </h1>${lname.value}
  <br>
  <h2>Message: </h2>${textareaForm.value}
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



