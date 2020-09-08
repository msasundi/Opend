// const express = require("express");
const { respError,respSuccess} =require('../utils/respHandles');
const dashboardModule  = require("../modules/dashboardModule")

// exports.Getname = async (req ,res) =>{
//     dashboardModule.getIndustry
//     console.log('hey');
// }


exports.Getname = async (req, res) => {

    try {
  
      const { id } = req.params
      const data = await dashboardModule.getIndustry(id)
      respSuccess(res, data)
  
    } catch (err) {
  
      respError(res, err.message)
  
    }
  
  }