window.onload = function () {
  const currentUserId = sessionStorage.getItem("currentUser");

  if (!currentUserId) {
    alert("გთხოვთ, შეხვიდეთ სისტემაში");
    window.location.href = "index.html";
    return;
  }

  const user = JSON.parse(localStorage.getItem(currentUserId));
  document.getElementById("user-name").textContent = user.name + " " + user.surname;
  document.getElementById("user-balance").textContent = user.balance.toFixed(2);

  const transactionList = document.getElementById("transaction-list");
  transactionList.innerHTML = "";

  if (user.transactions && user.transactions.length > 0) {
    user.transactions.slice().reverse().forEach(tx => {
      const li = document.createElement("li");
      li.textContent = `${tx.date} • ${tx.type} • ${tx.amount} ₾ ${tx.to ? 'მიმღები: ' + tx.to : 'გამგზავნი: ' + tx.from}`;
      transactionList.appendChild(li);
    });
  } else {
    transactionList.innerHTML = "<li>ტრანზაქცია არ არის</li>";
  }
};

function logout() {
  sessionStorage.removeItem("currentUser");
  window.location.href = "index.html";
}