let delayedMessage = (message, delay, callback) => {
  setTimeout(() => {
    console.log(message);
    callback();
  }, delay);
};

function main() {
  delayedMessage("Hello after delay!", 2000, () => {
    console.log("Message printed successfully.");
  });
}

main();
