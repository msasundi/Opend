import React from 'react'
import axios from "axios"

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
let options = {
  title: {
    text: 'Email Sent Breakdown'
  },
  series: [{
    data: []
  }]
}


export default function maingraph(props) {
    const prosVa= props
    console.log(props);

    axios({
    method: 'post',
    url: 'http://localhost:5000/main',
    data: prosVa
  }).then(res => {
    console.log(res);
    // options = {
    //   // title:"Email Sent Breakdown",
    //   xAxis: { 
    //     categories: res.data.data.count,
    //   },
    //   series: [{
    //     data: json.data.count,
    //     name:'opens'
    //   }]
    // }

  // console.log('my_consolelog');  
//  console.log(res);   
    // const persons = res.data;
    // this.setState({ persons });
  });


    return (
        <div>
           <HighchartsReact
                highcharts={Highcharts}
                  options={options}
                />
              {/* <h1>came</h1> */}
        </div>
    )
}


// Make a GET request

  