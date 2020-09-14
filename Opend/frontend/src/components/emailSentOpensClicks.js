import React from "react";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";

let options = {
  title: {
    text: 'Average Opens & Clicks in % '
  },
  chart: {
    type: "pie"
  },
  series: [
    {
      data: [
        {
          y: 0
        },
        {
          y: 0
        }
      ]
    }
  ]
};



class emailSentOpensClicks  extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props.params)
    this.state = { data: [] };
    
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:5000/opens`);
    const json = await response.json();
    console.log(json);
    options = {

      series: [
        {
          data: [
            {
              y: json.data.count_clicks,
              name :"Clicks"+ ('('+ json.data.count_clicks +')'),
              color : '#ffa200'
            },
            {
              y: json.data.count_opens,
              name :"Opens" +('('+json.data.count_opens+')'),
              color : '#12d63c'
            },
            {
              y: json.data.data,
              name : "Total sent"+ ('('+json.data.data +')'),
              color : "#646464"
            }
          ]
        }
      ]
    }
    console.log(json);
    this.setState({ data: json.data});
    console.log('check Map');
    console.log(options);
  }

  render() {
    return (
      <div>
        <PieChart highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default emailSentOpensClicks;

