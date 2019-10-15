const axios = require('axios');
const $ = require('cheerio');
const cloneDeep = require('lodash/cloneDeep');
const util = require('util');

const extractContentFromUrl = async (url) => {
  try {
    const response = await axios.get(url);
    const arr = [];
    $('p', response.data).each((i, elem) => {
      elem.children.forEach(innerText => {
        if (innerText.data) {
          arr.push(innerText.data);
        }
      })
    });
    return arr.join(' ').replace(/\s+/g, ' ');
  } catch (err) {
    throw err;
  }
};

const dataMapper = async (response) => {
  const jsonResponse = cloneDeep(response);
  const articleArray = jsonResponse.articles;
  for (let i = 0; i < articleArray.length; i++) {
    const extractedContent = await extractContentFromUrl(articleArray[i].url);
    articleArray[i].content = extractedContent;
  }
  return jsonResponse;
};

module.exports = { dataMapper };