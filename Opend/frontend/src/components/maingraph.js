import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'

export default class maingraph extends Component {
  constructor(props){
    super(props)
    this.state= {
      data:[]
    }
  }

  componentDidMount() {
    // POST request using axios with error handling
    const article = { 'timestamp': this.props.filterData , 'campaign_type': this.props.getcampaigntype};
    axios.post('http://localhost:5000/data', article)
        .then(response => console.log(response.data.data))
        // .catch(error => {
        //     // this.setState({ errorMessage: error.message });
        //     console.log('data', response);
        // });
}

  componentDidUpdate() {
    const article = { 'timestamp': this.props.filterData , 'campaign_type': this.props.getcampaigntype};
    axios.post('http://localhost:5000/data', article)
        .then(response =>  console.log(response.data.data))
        // .catch(error => {
        //     // this.setState({ errorMessage: error.message });
        //     console.log('data', response);
        // });
}



  render() {
    return (
      <div>
  <h2> {this.props.filterData} ---{this.props.getcampaigntype}----{this.state.data}</h2>
  {/* <ul>
                      {this.state.data.map(el => (
                     <li key={el.time}>
                        {el.time}: {el.data}
                    </li>
                  ))}
                </ul> */}
        <div>
  <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>  
</div>
      </div>
    )
  }
}
  

