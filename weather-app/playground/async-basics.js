console.log('starting app');

setTimeout(()=>{
  console.log('Inside first timeout');
},2000);

setTimeout(()=>{
  console.log("insider second timeout");
},0);

console.log('finishing app');
