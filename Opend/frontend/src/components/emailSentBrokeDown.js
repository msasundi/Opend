import React, { Component } from 'react';

class emailSentBrokeDown extends Component {

    constructor(props) {
    super(props);
    // console.log(this.props.params)
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:5000/data`);
    const json = await response.json();
    this.setState({ data: json.data});
  }


    render() {
        return (
            <div>
                <h1>Email send broke down</h1>
                <ul>
                    {/* <button onClick={this.addRental}>Add Rental</button> */}
                      {this.state.data.map(el => (
                     <li key={el._id }>
                        {el._id}: {el.status}
                    </li>
                  ))}
                </ul>
            </div>
        );
    }
}

export default emailSentBrokeDown;
