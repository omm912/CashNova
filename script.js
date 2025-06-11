let wallet = 0;

function completeTask() {
  wallet += 10;
  document.getElementById("wallet").innerText = `₹${wallet}`;
  alert("✅ Task Completed! ₹10 added to your wallet.");
}
