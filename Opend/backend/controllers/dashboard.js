// const express = require("express");
const { respError,respSuccess} =require('../utils/respHandles');
const {getEmailSentCount ,getOpensClicks11,
  getOpens,getClicks, getTotal_sent,getEmailmainCount}  = require("../modules/dashboardModule")


exports.getEmailSentCount = async (req, res) => {
  // console.log('body');
  // console.log(req.body);
let result = {}
    try {
      const { id } = req.params
      const data = await getEmailSentCount(id)
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

  exports.getOpensClicks = async (req, res) => {

    try {
      const data = await getTotal_sent()
      count_opens = await getOpens();
      count_clicks = await getClicks();
      respSuccess(res, { data, count_opens, count_clicks})
  
    } catch (err) {
      respError(res, err.message)
  
    }
  
  }

  // exports.getparams = async (req, res) =>{
  //   // console.log(req.body)
  //   let result = {}
  //   try {
  //     const data = await getEmailmainCount(req.body)
  //     // console.log(data)
  //     Promise.all(data).then((values) => {
  //       result = {
  //         time : values.map(value => Object.values(value)[0]),
  //         count :  values.map(value => Object.values(value)[1])
  //       }        
  //       respSuccess(res, result)
  //       });
  //   } catch (err) {
  //      respError(res, err.message)
  //   }
    

  // }


  exports.getparams = async (req, res) => {

    try {
  
      // const userId = req.userID;
      const result = await getEmailmainCount(req.body)
      return respSuccess(res, result);
  
    } catch (error) {
  
      return respError(res, error.message)
  
    }
  
  }