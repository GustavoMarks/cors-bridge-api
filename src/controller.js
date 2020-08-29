'use strict';

module.exports = {
  index(req, res){
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    console.log(`Root request by: ${ip}`);

    res.send({
      version: '1.0.0',
      devBy: 'GustavoMarks',
      info: 'https://github.com/GustavoMarks/cors-bridge-api'
    })
  },

}