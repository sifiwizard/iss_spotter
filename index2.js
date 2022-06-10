// index.js
const { nextISSTimesForMyLocation } = require('./iss_promised');


const calculateReadPass = (passTimes) => {
  for (const pass of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${date} for ${pass.duration} seconds.`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    calculateReadPass(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });




