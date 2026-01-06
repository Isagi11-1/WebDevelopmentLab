function greet(name, callback) {
  let message = `Hello, ${name}!`;
  return callback(message);
}

function displayGreeting(msg) {
  return msg;
}

let output = greet("Nitish", displayGreeting);
console.log(output);
