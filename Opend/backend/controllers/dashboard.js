// const express = require("express");
const { respError,respSuccess} =require('../utils/respHandles');
const dashboardModule  = require("../modules/dashboardModule")

exports.getEmailSentCount = async (req, res) => {
let result = {}
    try {
      const { id } = req.params
      const data = await dashboardModule.getEmailSentCount(id)
      Promise.all(data).then((values) => {
        result = {
          time : values.map(value => Object.values(value)[0]),
          count :  values.map(value => Object.values(value)[1])
        }        
        respSuccess(res, result)
        });
    } catch (err) {
       respError(res, err.message)
    }
  }


  exports.getOpensClicks = async (req, res) =>{
    let result = {}
    try {
      const { id } = req.params
      const data = await dashboardModule.getOpensClicks(id)
      Promise.all(data).then((values) => {
        result = {
          time : values.map(value => Object.values(value)[0]),
          count :  values.map(value => Object.values(value)[1])
        }        
        respSuccess(res, result)
        });
    } catch (err) {
       respError(res, err.message)
    }
  }