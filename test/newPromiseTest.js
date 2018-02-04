var apromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('hey, you got accepted');
    reject('hey, you got rejected');
  }, 2500);
});

apromise.then((message) => {
  console.log('Message:', message);
}, (errorMessage) => {
  console.log('Error:', errorMessage);
});
