'use strict';

const axios = require('axios');

module.exports = {
  index(req, res){
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    console.log(`[*] Root request by: ${ip}`);

    res.send({
      version: '1.0.0',
      devBy: 'GustavoMarks',
      info: 'https://github.com/GustavoMarks/cors-bridge-api'
    })
  },

  geter(req, res){
    const url = req.query.url
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    console.log(`[*] Request for ${url} by: ${ip}`);

    axios({
      method: 'get',
      url: url,
      
    }).then(response => {
      console.log('[*] Successful')
      return res.send(response.data);

    }).catch(error => {
      console.log('[*] Fail')
      return res.status(400).send(error);

    })
  }

}