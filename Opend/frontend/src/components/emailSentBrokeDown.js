import React, { Component } from 'react';
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

class emailSentBrokeDown extends Component {

    constructor(props) {
    super(props);
    console.log(this.props.params)
    this.state = { data: [] };
    
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:5000/data`);
    const json = await response.json();
    options = {
      // title:"Email Sent Breakdown",
      xAxis: {
        categories: json.data.time,
      },
      series: [{
        data: json.data.count,
        name:'opens'
      }]
    }
    // console.log(json);
    this.setState({ data: json.data});
    console.log('check Map');
    console.log(options);
  }


    render() {
        return (
            <div>
              {/* <h1>Email send broke down</h1> */}
                <HighchartsReact
                highcharts={Highcharts}
                  options={options}
                />
                {/* <ul>
                      {this.state.data.map(el => (
                     <li key={el.time}>
                        {el.time}: {el.data}
                    </li>
                  ))}
                </ul> */}
            </div>
        );
    }
}

export default emailSentBrokeDown;
