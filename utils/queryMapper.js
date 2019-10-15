const mapQueriesToEndPoint = (query, endPoint) => {
  let revisedEndPoint = endPoint;

  if (Object.entries(query).length !== 0 && query.term !== null) {
    revisedEndPoint += `&q=`;
    Object.keys(query).forEach((key) => {
      revisedEndPoint += `${query[key]}`
    });
  } else {
    const error = {
      message: 'Search term required! Please search keyword using `?term=<search-term>`'
    };
    throw error;
  }
  return revisedEndPoint;
};

module.exports = {
  mapQueriesToEndPoint
};