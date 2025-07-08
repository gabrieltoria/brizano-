window.onload = function () {
  const userId = sessionStorage.getItem("currentUser");

  if (!userId) {
    alert("გთხოვთ, შეხვიდეთ სისტემაში");
    window.location.href = "index.html";
    return;
  }

  const user = JSON.parse(localStorage.getItem(userId));

  // თუ არ არსებობს ბარათის მონაცემები, ვქმნით
  if (!user.card) {
    user.card = {
      accountNumber: "GE" + Math.floor(Math.random() * 1e12).toString().padStart(12, '0'),
      cardNumber: "4000 " + Math.floor(1000 + Math.random() * 9000) + " " + Math.floor(1000 + Math.random() * 9000) + " " + Math.floor(1000 + Math.random() * 9000),
      expiry: "07/30"
    };
    localStorage.setItem(userId, JSON.stringify(user));
  }

  // ვაჩვენებთ
  document.getElementById("owner").textContent = user.name + " " + user.surname;
  document.getElementById("account-number").textContent = user.card.accountNumber;
  document.getElementById("card-number").textContent = user.card.cardNumber;
  document.getElementById("expiry").textContent = user.card.expiry;
};