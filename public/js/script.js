function submitLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Application-Key': 'TU2e69ad8fc743d5c16c4e81f7697f7ce8168f62585a4fddea12b8649d0c0f7acede94c84000548e4e2c3b7ddeeeac780a' // Replace with your actual API key
      },
      body: JSON.stringify({ "UserName": username, "PassWord": password })
  })
  .then(response => response.json())
  .then(data => {
      if (data.status) {
          const popupMessage = `
              <strong>สถานะ :</strong> ${data.status ? "สำเร็จ" : "ไม่สำเร็จ"}<br>
              <strong>ประเภท :</strong> ${data.type}<br>
              <strong>ชื่อผู้ใช้ :</strong> ${data.username}<br>
              <strong>สถานะที่ TU :</strong> ${data.tu_status}<br>
              <strong>รหัสสถานะ :</strong> ${data.statusid}<br>
              <strong>ชื่อภาษาไทย :</strong> ${data.displayname_th}<br>
              <strong>ชื่อภาษาอังกฤษ :</strong> ${data.displayname_en}<br>
              <strong>อีเมล :</strong> ${data.email}<br>
              <strong>ภาควิชา :</strong> ${data.department}<br>
              <strong>คณะ :</strong> ${data.faculty}
          `;

          document.getElementById('popup-message').innerHTML = popupMessage;
          document.getElementById('popup').style.display = 'flex'; // Show popup
      } else {
          document.getElementById('message').innerText = "Login failed. Please try again.";
      }
  })
  .catch(error => console.error('Error:', error));
}

function sHowpass() {
  const passwordInput = document.getElementById("password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

document.querySelector('.close-btn').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

window.onclick = function(event) {
  const popup = document.getElementById('popup');
  if (event.target === popup) {
      popup.style.display = 'none';
  }
}
