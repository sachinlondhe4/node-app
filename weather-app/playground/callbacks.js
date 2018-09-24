const getUser = (id, callback) => {
    const user1 = {
      id: id,
      name: 'Vikarma'
    };
  callback(user1);
};

getUser(31, (userObject)=>{
  console.log(userObject);
});
