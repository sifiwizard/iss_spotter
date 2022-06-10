const request = require('request-promise-native');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};
 
const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  console.log(ip);
  request(`http://ip-api.com/json/${ip}`);
};
 
const fetchISSFlyOverTimes = function(coords) {
  console.log(coords.lat);
  const {lat , lon} = JSON.parse(coords);
  request(`https://iss-pass.herokuapp.com/json/?lat=${lat}&lon=${lon}`);
};
 
const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};
 
module.exports = { nextISSTimesForMyLocation };
 