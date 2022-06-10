// index.js
const { nextISSTimesForMyLocation } = require('./iss');


const calculateReadPass = passTimes =>{
  for (const pass of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${date} for ${pass.duration} seconds.`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  calculateReadPass(passTimes);
});





