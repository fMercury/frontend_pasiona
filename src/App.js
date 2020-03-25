import React, { Component } from 'react';


//////////////////////////////////////////////////////////////////////////////////////////////////////////
class App extends Component {
  _isMounted = false;
  state = {
    isLoading: true,
    users: [],
    user: undefined
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  componentDidMount() {
    this._isMounted = true;
    const URL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
    fetch(URL, { mode: 'cors' })
      .then(res => res.json())
      .then((data) => {
        if (this._isMounted) {
          this.setState({ isLoading: false })
          this.setState({ users: data["Brastlewark"] })
        }
      })
      .catch(console.log)
  }

  componentWillUnmount() {
    this._isMounted = false;
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


          <div className="row">
            <div className="col-12">
              <div className="searchField">
                <div className="body">
                  <div className="form col-6">
                    <form className="search-box">
                      Select Gnome
                      <select className='form-control'>
                        <option className="field" value=""> - </option>
                        {
                          this.state.users.map(user => {
                            return <option key={user.id + user.name} className="field" value={user.id}>{user.name}</option>
                          })
                        }
                      </select>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>



    </div>
    </main>
    );
  }
}



export default App;
