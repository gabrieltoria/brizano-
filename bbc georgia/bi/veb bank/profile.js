window.onload = function () {
  const userId = sessionStorage.getItem("currentUser");

  if (!userId) {
    alert("გთხოვთ, შეხვიდეთ სისტემაში");
    window.location.href = "index.html";
    return;
  }

  const user = JSON.parse(localStorage.getItem(userId));

  document.getElementById("name").textContent = user.name;
  document.getElementById("surname").textContent = user.surname;
  document.getElementById("phone").textContent = user.phone;
  document.getElementById("personal-id").textContent = user.personalId;
  document.getElementById("balance").textContent = user.balance.toFixed(2);
};