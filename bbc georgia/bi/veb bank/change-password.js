function changePassword() {
  const oldPass = document.getElementById("old-password").value;
  const newPass = document.getElementById("new-password").value;
  const confirmPass = document.getElementById("confirm-password").value;
  const message = document.getElementById("message");

  const userId = sessionStorage.getItem("currentUser");

  if (!userId) {
    message.textContent = "გთხოვთ, ჯერ შეხვიდეთ სისტემაში";
    message.style.color = "red";
    return;
  }

  const user = JSON.parse(localStorage.getItem(userId));

  if (user.password !== oldPass) {
    message.textContent = "ძველი პაროლი არასწორია!";
    message.style.color = "red";
    return;
  }

  if (newPass.length < 4) {
    message.textContent = "ახალი პაროლი უნდა შეიცავდეს მინ. 4 სიმბოლოს";
    message.style.color = "red";
    return;
  }

  if (newPass !== confirmPass) {
    message.textContent = "პაროლები არ ემთხვევა!";
    message.style.color = "red";
    return;
  }

  user.password = newPass;
  localStorage.setItem(userId, JSON.stringify(user));
  message.textContent = "✅ პაროლი წარმატებით შეიცვალა";
  message.style.color = "green";

  // ველიების გასუფთავება
  document.getElementById("old-password").value = "";
  document.getElementById("new-password").value = "";
  document.getElementById("confirm-password").value = "";
}function changePassword() {
  const oldPass = document.getElementById("old-password").value;
  const newPass = document.getElementById("new-password").value;
  const confirmPass = document.getElementById("confirm-password").value;
  const message = document.getElementById("message");

  const userId = sessionStorage.getItem("currentUser");

  if (!userId) {
    message.textContent = "გთხოვთ, ჯერ შეხვიდეთ სისტემაში";
    message.style.color = "red";
    return;
  }

  const user = JSON.parse(localStorage.getItem(userId));

  if (user.password !== oldPass) {
    message.textContent = "ძველი პაროლი არასწორია!";
    message.style.color = "red";
    return;
  }

  if (newPass.length < 4) {
    message.textContent = "ახალი პაროლი უნდა შეიცავდეს მინ. 4 სიმბოლოს";
    message.style.color = "red";
    return;
  }

  if (newPass !== confirmPass) {
    message.textContent = "პაროლები არ ემთხვევა!";
    message.style.color = "red";
    return;
  }

  user.password = newPass;
  localStorage.setItem(userId, JSON.stringify(user));
  message.textContent = "✅ პაროლი წარმატებით შეიცვალა";
  message.style.color = "green";

  // ველიების გასუფთავება
  document.getElementById("old-password").value = "";
  document.getElementById("new-password").value = "";
  document.getElementById("confirm-password").value = "";
}function changePassword() {
  const oldPass = document.getElementById("old-password").value;
  const newPass = document.getElementById("new-password").value;
  const confirmPass = document.getElementById("confirm-password").value;
  const message = document.getElementById("message");

  const userId = sessionStorage.getItem("currentUser");

  if (!userId) {
    message.textContent = "გთხოვთ, ჯერ შეხვიდეთ სისტემაში";
    message.style.color = "red";
    return;
  }

  const user = JSON.parse(localStorage.getItem(userId));

  if (user.password !== oldPass) {
    message.textContent = "ძველი პაროლი არასწორია!";
    message.style.color = "red";
    return;
  }

  if (newPass.length < 4) {
    message.textContent = "ახალი პაროლი უნდა შეიცავდეს მინ. 4 სიმბოლოს";
    message.style.color = "red";
    return;
  }

  if (newPass !== confirmPass) {
    message.textContent = "პაროლები არ ემთხვევა!";
    message.style.color = "red";
    return;
  }

  user.password = newPass;
  localStorage.setItem(userId, JSON.stringify(user));
  message.textContent = "✅ პაროლი წარმატებით შეიცვალა";
  message.style.color = "green";

  // ველიების გასუფთავება
  document.getElementById("old-password").value = "";
  document.getElementById("new-password").value = "";
  document.getElementById("confirm-password").value = "";
}function changePassword() {
  const oldPass = document.getElementById("old-password").value;
  const newPass = document.getElementById("new-password").value;
  const confirmPass = document.getElementById("confirm-password").value;
  const message = document.getElementById("message");

  const userId = sessionStorage.getItem("currentUser");

  if (!userId) {
    message.textContent = "გთხოვთ, ჯერ შეხვიდეთ სისტემაში";
    message.style.color = "red";
    return;
  }

  const user = JSON.parse(localStorage.getItem(userId));

  if (user.password !== oldPass) {
    message.textContent = "ძველი პაროლი არასწორია!";
    message.style.color = "red";
    return;
  }

  if (newPass.length < 4) {
    message.textContent = "ახალი პაროლი უნდა შეიცავდეს მინ. 4 სიმბოლოს";
    message.style.color = "red";
    return;
  }

  if (newPass !== confirmPass) {
    message.textContent = "პაროლები არ ემთხვევა!";
    message.style.color = "red";
    return;
  }

  user.password = newPass;
  localStorage.setItem(userId, JSON.stringify(user));
  message.textContent = "✅ პაროლი წარმატებით შეიცვალა";
  message.style.color = "green";

  // ველიების გასუფთავება
  document.getElementById("old-password").value = "";
  document.getElementById("new-password").value = "";
  document.getElementById("confirm-password").value = "";
}function changePassword() {
  const oldPass = document.getElementById("old-password").value;
  const newPass = document.getElementById("new-password").value;
  const confirmPass = document.getElementById("confirm-password").value;
  const message = document.getElementById("message");

  const userId = sessionStorage.getItem("currentUser");

  if (!userId) {
    message.textContent = "გთხოვთ, ჯერ შეხვიდეთ სისტემაში";
    message.style.color = "red";
    return;
  }

  const user = JSON.parse(localStorage.getItem(userId));

  if (user.password !== oldPass) {
    message.textContent = "ძველი პაროლი არასწორია!";
    message.style.color = "red";
    return;
  }

  if (newPass.length < 4) {
    message.textContent = "ახალი პაროლი უნდა შეიცავდეს მინ. 4 სიმბოლოს";
    message.style.color = "red";
    return;
  }

  if (newPass !== confirmPass) {
    message.textContent = "პაროლები არ ემთხვევა!";
    message.style.color = "red";
    return;
  }

  user.password = newPass;
  localStorage.setItem(userId, JSON.stringify(user));
  message.textContent = "✅ პაროლი წარმატებით შეიცვალა";
  message.style.color = "green";

  // ველიების გასუფთავება
  document.getElementById("old-password").value = "";
  document.getElementById("new-password").value = "";
  document.getElementById("confirm-password").value = "";
}function changePassword() {
  const oldPass = document.getElementById("old-password").value;
  const newPass = document.getElementById("new-password").value;
  const confirmPass = document.getElementById("confirm-password").value;
  const message = document.getElementById("message");

  const userId = sessionStorage.getItem("currentUser");

  if (!userId) {
    message.textContent = "გთხოვთ, ჯერ შეხვიდეთ სისტემაში";
    message.style.color = "red";
    return;
  }

  const user = JSON.parse(localStorage.getItem(userId));

  if (user.password !== oldPass) {
    message.textContent = "ძველი პაროლი არასწორია!";
    message.style.color = "red";
    return;
  }

  if (newPass.length < 4) {
    message.textContent = "ახალი პაროლი უნდა შეიცავდეს მინ. 4 სიმბოლოს";
    message.style.color = "red";
    return;
  }

  if (newPass !== confirmPass) {
    message.textContent = "პაროლები არ ემთხვევა!";
    message.style.color = "red";
    return;
  }

  user.password = newPass;
  localStorage.setItem(userId, JSON.stringify(user));
  message.textContent = "✅ პაროლი წარმატებით შეიცვალა";
  message.style.color = "green";

  // ველიების გასუფთავება
  document.getElementById("old-password").value = "";
  document.getElementById("new-password").value = "";
  document.getElementById("confirm-password").value = "";
}function changePassword() {
  const oldPass = document.getElementById("old-password").value;
  const newPass = document.getElementById("new-password").value;
  const confirmPass = document.getElementById("confirm-password").value;
  const message = document.getElementById("message");

  const userId = sessionStorage.getItem("currentUser");

  if (!userId) {
    message.textContent = "გთხოვთ, ჯერ შეხვიდეთ სისტემაში";
    message.style.color = "red";
    return;
  }

  const user = JSON.parse(localStorage.getItem(userId));

  if (user.password !== oldPass) {
    message.textContent = "ძველი პაროლი არასწორია!";
    message.style.color = "red";
    return;
  }

  if (newPass.length < 4) {
    message.textContent = "ახალი პაროლი უნდა შეიცავდეს მინ. 4 სიმბოლოს";
    message.style.color = "red";
    return;
  }

  if (newPass !== confirmPass) {
    message.textContent = "პაროლები არ ემთხვევა!";
    message.style.color = "red";
    return;
  }

  user.password = newPass;
  localStorage.setItem(userId, JSON.stringify(user));
  message.textContent = "✅ პაროლი წარმატებით შეიცვალა";
  message.style.color = "green";

  // ველიების გასუფთავება
  document.getElementById("old-password").value = "";
  document.getElementById("new-password").value = "";
  document.getElementById("confirm-password").value = "";
}