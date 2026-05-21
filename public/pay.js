document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const handler = PaystackPop.setup({
    key: 'pk_test_xxxxxxxxxxxxxxxxxxxxxx', // Replace with your Paystack Public Key
    email: document.getElementById("email").value,
    amount: document.getElementById("amount").value * 100, // Convert Naira to Kobo
    currency: "NGN",
    ref: '' + Math.floor(Math.random() * 1000000000 + 1),
    callback: function (response) {
      alert("Payment successful! Reference: " + response.reference);
      // TODO: redirect or store order info
    },
    onClose: function () {
      alert("Transaction was not completed.");
    },
  });

  handler.openIframe();
});

window.addEventListener("DOMContentLoaded", () => {
  const amountField = document.getElementById("amount");
  const savedAmount = localStorage.getItem("cartTotalAmount");
  if (savedAmount) {
    amountField.value = savedAmount * 100; // Paystack needs amount in Kobo
  }
});
