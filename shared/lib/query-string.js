const qsParser = require('querystring').parse;
const decodeUriComponent = require('decodeuricomponent');

module.exports = (req) =>
  qsParser(new URL(req.url).searchParams.toString(), null, null, {
    decodeURIComponent: decodeUriComponent,
  });
