import React, { Component } from 'react';
import './index.css'


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
  
  fillUser = (e) => {
    this.setState({ user: e.target.value })

    let gnome = this.state.users[e.target.value].name
    let userName = document.getElementsByClassName('title')
    let image = document.getElementsByClassName('img')
    let userData = document.getElementsByClassName('data')
    let professionsTitle = document.getElementsByClassName('professionsTitle')
    let professionsData = document.getElementsByClassName('professionsData')
    let friendsTitle = document.getElementsByClassName('friendsTitle')
    let friendsData = document.getElementsByClassName('friendsData')

    userName[0].innerHTML = `<h5><p>${gnome}</p></h5>`
    image[0].innerHTML = `<img src='${this.state.users[e.target.value].thumbnail}' alt="user-picture">`
    userData[0].innerHTML = `Age: ${this.state.users[e.target.value].age}</br>
                              Weight: ${this.state.users[e.target.value].weight}<br>
                              Height: ${this.state.users[e.target.value].height}<br>
                              Hair Color: ${this.state.users[e.target.value].hair_color}
                              `

    let professions = ''
    this.state.users[e.target.value].professions.map(profession => {
      professions += `<li>${profession}</li>`
    })
    professionsTitle[0].innerHTML = "Professions"
    professionsData[0].innerHTML = `<ul>${professions}</ul>`

    let friends = ''
    this.state.users[e.target.value].friends.map(friend => {
      friends += `<li>${friend}</li>`
    })
    friendsTitle[0].innerHTML = "Friends"
    friendsData[0].innerHTML = `<ul>${friends}</ul>`
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
                      <select className='form-control' onChange={this.fillUser}>
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


          <div className="row">
            <div className="col-md-12 title"></div>
            <div className="card-group col-12">

              <div className="characteristicsI col-4">
                <div className="img"></div>
                <div className="data"></div>
              </div>

              <div className="professions col-4">
                <div className="professionsTitle"></div>
                <div className="professionsData"></div>
              </div>

              <div className="friends col-4">
                <div className="friendsTitle"></div>
                <div className="friendsData"></div>
              </div>

            </div>
          </div>


    </div>
    </main>
    );
  }
}



export default App;
