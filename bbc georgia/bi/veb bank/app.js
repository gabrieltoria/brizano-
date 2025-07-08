function register() {
  const name = document.getElementById("reg-name").value.trim();
  const surname = document.getElementById("reg-surname").value.trim();
  const personalId = document.getElementById("reg-id").value.trim();
  const phone = document.getElementById("reg-phone").value.trim();
  const password = document.getElementById("reg-password").value;

  if (!name || !surname || !personalId || !phone || !password) {
    showMessage("გთხოვთ შეავსოთ ყველა ველი", "red");
    return;
  }

  if (localStorage.getItem(personalId)) {
    showMessage("მომხმარებელი უკვე არსებობს", "red");
    return;
  }

  const user = {
    name,
    surname,
    personalId,
    phone,
    password,
    balance: 5.00,
    transactions: [],
    card: null
  };

  localStorage.setItem(personalId, JSON.stringify(user));
  showMessage("წარმატებით დარეგისტრირდით!", "green");

  setTimeout(() => {
    sessionStorage.setItem("currentUser", personalId);
    window.location.href = "profile.html";
  }, 1500);
}

function login() {
  const phone = document.getElementById("login-phone").value.trim();
  const password = document.getElementById("login-password").value;

  let foundUser = null;

  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const user = JSON.parse(localStorage.getItem(key));
      if (user.phone === phone && user.password === password) {
        foundUser = user;
        break;
      }
    }
  }

  if (!foundUser) {
    showMessage("ტელეფონი ან პაროლი არასწორია", "red");
    return;
  }

  sessionStorage.setItem("currentUser", foundUser.personalId);
  showMessage("შესვლა წარმატებით!", "green");

  setTimeout(() => {
    window.location.href = "profile.html";
  }, 1500);
}

function showMessage(text, color) {
  const msg = document.getElementById("message");
  msg.textContent = text;
  msg.style.color = color;
}
