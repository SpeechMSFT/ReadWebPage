'use strict';

const request = require('request');

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.readPage = (req, res) => {

  var webPage = 'https://jiabailie.github.io/gaction.html';
  request(webPage, function(error, response, body) {
    res.send(JSON.stringify({ 'speech': body, 'displayText': body}));
  });
};
