var asyncAdd = (a, b ) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      } else {
        reject('The two inputs are not numbers');
      };
    }, 2500)
  });
};

asyncAdd(5,5).then((res) => {
  console.log('Result:', res);
  return asyncAdd(res, 6);
}, (errorMessage) => {
  console.log("Something didn't work:", errorMessage);
} ).then((res) => {
  console.log('The result shoudl now be 16', res);
}, (errorMessage) => {
  console.log("Something didn't work again:", errorMessage);
});

// var somePromise = new Promise ((resolve, reject) => {
//   setTimeout(() => {
//     //resolve('It worked!');
//     reject('unable to complete');
//   }, 2500);
//
// });
//
// somePromise.then(
//   (message) => {
//   console.log(  'Success:', message);
// }, (errorMessage) => {
//   console.log( 'Error:', errorMessage);
// });
