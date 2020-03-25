import React, { Component } from 'react';


//////////////////////////////////////////////////////////////////////////////////////////////////////////
class App extends Component {

//////////////////////////////////////////////////////////////////////////////////////////////////////////

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <main>
      <div className="container">

        <div className="row">
          <div className="col-sm">
            <h4> Pasiona Front Test </h4>
          </div>
        </div>


    </div>
    </main>
    );
  }
}



export default App;
