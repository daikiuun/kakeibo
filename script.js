const expenses = [];

function addExpense() {
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  if (!amount || !category) return;

  expenses.push({ amount: Number(amount), category });
  displayExpenses();
}

function displayExpenses() {
  const list = document.getElementById("expense-list");
  list.innerHTML = "";

  expenses.forEach((exp) => {
    const item = document.createElement("li");
    item.textContent = `${exp.category}: ¥${exp.amount}`;
    list.appendChild(item);
  });
}
localStorage.setItem("キー", "値");
const name = localStorage.getItem("username");
localStorage.removeItem("username");
localStorage.clear(); // 全部削除
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  // 状態を保存しておく
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
}

// ページ読み込み時にダークモードを復元
window.onload = function () {
  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) {
    document.body.classList.add("dark");
  }

  displayExpenses(); // 保存された支出を表示
};
function displayExpenses() {
  const list = document.getElementById("expense-list");
  list.innerHTML = "";

  expenses.forEach((exp, index) => {
    const item = document.createElement("li");
    item.textContent = `${exp.category}: ¥${exp.amount} `;

    // 削除ボタンを作る
    const delBtn = document.createElement("button");
    delBtn.textContent = "削除";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = () => {
      expenses.splice(index, 1); // 配列から削除
      localStorage.setItem("expenses", JSON.stringify(expenses)); // 保存更新
      displayExpenses(); // 再表示
    };

    item.appendChild(delBtn); // ボタンをリストに追加
    list.appendChild(item); // リストをulに追加
  });
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => console.log("Service Worker 登録成功"))
    .catch((err) => console.log("SW登録失敗:", err));
}
