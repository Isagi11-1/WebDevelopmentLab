function authenticateUser(userId, callback) {
  setTimeout(() => {
    console.log("User authenticated");
    callback(null, userId);
  }, 1000);
}


function verifyPaymentMethod(userId, callback) {
  setTimeout(() => {
    console.log("Payment method verified");
    callback(null, userId);
  }, 1000);
}


function processPayment(userId, callback) {
  setTimeout(() => {
    console.log("Payment processed");
    callback(null, userId);
  }, 1000);
}


function updateAccountBalance(userId, callback) {
  setTimeout(() => {
    console.log("Account balance updated");
    callback(null, userId);
  }, 1000);
}


function notifyUser(userId, callback) {
  setTimeout(() => {
    console.log("User notified via email");
    callback(null, "Payment completed successfully");
  }, 1000);
}

function main(){
authenticateUser("user123", (err, userId) => {
  if (err) return console.log(err);
  verifyPaymentMethod(userId, (err, userId) => {
    if (err) return console.log(err);
    processPayment(userId, (err, userId) => {
      if (err) return console.log(err);
      updateAccountBalance(userId, (err, userId) => {
        if (err) return console.log(err);
        notifyUser(userId, (err, result) => {
          if (err) return console.log(err);
          console.log(result);
        });
      });
    });
  });
});
}
main()