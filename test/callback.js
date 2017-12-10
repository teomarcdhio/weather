var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Matteo'
  };

setTimeout(() => {
  callback(user);
}, 2000);


};

getUser(31, (userObj) => {
  console.log(userObj);
});
