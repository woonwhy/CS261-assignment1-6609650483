function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU2e69ad8fc743d5c16c4e81f7697f7ce8168f62585a4fddea12b8649d0c0f7acede94c84000548e4e2c3b7ddeeeac780a'
        },
        body: JSON.stringify({"UserName" : username,"PassWord" : password})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}

    function sHowpass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


