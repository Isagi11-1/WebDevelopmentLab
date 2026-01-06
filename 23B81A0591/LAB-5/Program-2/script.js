function multiplyBy2(num, callback) {
  let result = num * 2;
  callback(result);
}

function subtract3(num, callback) {
  let result = num - 3;
  callback(result);
}

function add10(num, callback) {
  let result = num + 10;
  callback(result);
}

function main(){
multiplyBy2(5, function (result1) {
  subtract3(result1, function (result2) {
    add10(result2, function (finalResult) {
      console.log("Final Result:", finalResult);
    });
  });
});
}
main()