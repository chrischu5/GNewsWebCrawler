const queryMapper = require('../utils/queryMapper');
const config = require('../config');
const { searchGNews } = require('../services');
const { dataMapper } = require('../utils/dataMapper');

const search = async (req, res) => {
  const url = `${config.baseUrl}/search?token=${process.env.GNEWS_TOKEN}&max=50`;
  let endPoint;
  try {
    endPoint = queryMapper.mapQueriesToEndPoint(req.query, url);
    console.log(endPoint);
    const response = await searchGNews(endPoint);
    const parsedResponse = await dataMapper(response.data);
    res.status(response.status);
    res.send(parsedResponse);
  } catch (err) {
    console.error(err);
    const error = {
      message: err.message
    };
    res.send(error);
  }
};

module.exports = {
  search
};