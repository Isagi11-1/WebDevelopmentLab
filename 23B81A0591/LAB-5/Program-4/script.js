let fetchDataWithCallback = (shouldFail, callback) => {
  setTimeout(() => {
    if (shouldFail) {
      callback("Error: Failed to fetch data", null);
      console.log()
    } else {
      callback(null, "Data fetched successfully!");
      console.log()
    }
  }, 2000);
};

fetchDataWithCallback(false, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

fetchDataWithCallback(true, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
