const axios = require('axios');

const searchGNews = async (endPoint) => {
  let response;

  try {
    response = await axios.get(endPoint);
  } catch (err) {
    throw err;
  }
  return response;
};

module.exports = {
  searchGNews
};