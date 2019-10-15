const { searchGNews } = require('../services');
const queryMapper = require('../utils/queryMapper');
const config = require('../config');

const search = async (req, res) => {
  const url = `${config.baseUrl}/search?token=${process.env.GNEWS_TOKEN}&max=50`;
  let endPoint;
  try {
    endPoint = queryMapper.mapQueriesToEndPoint(req.query, url);
    console.log(endPoint);
    const response = await searchGNews(endPoint);
    res.status(response.status);
    res.send(response.data);
  } catch (err) {
    const error = {
      message: err.message
    };
    res.send(error);
  }
};

module.exports = {
  search
};