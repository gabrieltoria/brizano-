let foundUserId = null;

function verifyPasscode() {
  const passcode = document.getElementById("passcode").value;
  if (passcode === "12551") {
    document.getElementById("employee-area").style.display = "block";
    alert("პანელში შესვლა წარმატებულია");
  } else {
    alert("პასკოდი არასწორია!");
  }
}

function searchUser() {
  const id = document.getElementById("search-id").value;
  const user = JSON.parse(localStorage.getItem(id));
  if (!user) {
    alert("მომხმარებელი ვერ მოიძებნა!");
    return;
  }

  foundUserId = id;
  document.getElementById("u-name").textContent = user.name;
  document.getElementById("u-surname").textContent = user.surname;
  document.getElementById("u-balance").textContent = user.balance.toFixed(2);
  document.getElementById("u-account").textContent = user.card?.accountNumber || "—";

  document.getElementById("user-info").style.display = "block";
}

function sendGift() {
  if (!foundUserId) return;
  const user = JSON.parse(localStorage.getItem(foundUserId));
  const amount = 100; // ან სხვა თანხა

  user.balance += amount;
  user.transactions = user.transactions || [];
  user.transactions.push({
    date: new Date().toLocaleString(),
    type: "შემოსავალი",
    amount,
    from: "ბრიზანოს ბანკის სათანამმშრომლო ორგანიზაციის ოფიციალური ჯგუფისგან"
  });

  localStorage.setItem(foundUserId, JSON.stringify(user));
  alert("თანხა წარმატებით ჩაერიცხა მომხმარებელს!");
  searchUser(); // მონაცემების განახლება
}

function resetPassword() {
  if (!foundUserId) return;
  const newPass = prompt("შეიყვანე ახალი პაროლი:");
  if (newPass) {
    const user = JSON.parse(localStorage.getItem(foundUserId));
    user.password = newPass;
    localStorage.setItem(foundUserId, JSON.stringify(user));
    alert("პაროლი წარმატებით შეიცვალა!");
  }
}

function showCard() {
  if (!foundUserId) return;
  const user = JSON.parse(localStorage.getItem(foundUserId));
  if (user.card) {
    alert(`ბარათის ნომერი: ${user.card.cardNumber}\nანგარიშის ნომერი: ${user.card.accountNumber}`);
  } else {
    alert("ბარათის მონაცემები არ მოიძებნა");
  }
}
