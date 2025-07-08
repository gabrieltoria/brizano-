function getBankBalance() {
  const b = parseFloat(localStorage.getItem('bankBalance'));
  return isNaN(b) ? 100000 : b;
}

function initOrUpdateBankBalance() {
  const meta = JSON.parse(localStorage.getItem("bankMeta")) || {};
  const now = new Date();
  const thisMonth = now.getFullYear() * 100 + (now.getMonth() + 1);

  if (!meta.month || meta.month < thisMonth) {
    const updated = getBankBalance() + 1000;
    localStorage.setItem("bankBalance", updated);
    localStorage.setItem("bankMeta", JSON.stringify({ month: thisMonth }));
  }
}

function displayBankBalance() {
  initOrUpdateBankBalance();
  const balance = getBankBalance();
  const el = document.getElementById("bankBalance");
  if (el) el.textContent = `🏦 ბანკის ბალანსი: ${balance.toFixed(2)} ₾`;
}

function deductFromBank(amount) {
  const current = getBankBalance();
  if (amount > current) return false;
  localStorage.setItem("bankBalance", current - amount);
  return true;
}
