import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor()
  {
    super()
    this.state = {
      friends: [],
      picture: "",
      name: ""
    }
  }

  updatePicture(value)
  {
    console.log(value);
    this.setState({picture: value})
  }

  updateName(value)
  {
    console.log(value);
    this.setState({name: value})
  }

  addFriend()
  {
    let {friends, picture, name} = this.state;
    let friendsList = friends.slice();
    friendsList.push({friendsName: name, friendsPicture: picture});
    this.setState({
      friends: friendsList,
      picture: "",
      name: ""
    })
  }

  render() {
    const friends = 
    this.state.friends.map((curVal, index) => {
      return <div key= {index} >
        <img src={curVal.friendsPicture} alt={curVal.friendsName}/>
        <span>{curVal.friendsName}</span>
        </div>
    })
    return (
      <div className="App">
      <label>Picture:</label>
      <input 
        onChange = {(evnt)=> this.updatePicture(evnt.target.value)}
        value = {this.state.picture}
        />
      <label>Name:</label>
      <input 
        onChange = {(evnt) => this.updateName(evnt.target.value)}
        value = {this.state.name}
        />
      <button onClick = {() => this.addFriend()}>Add Friend</button>
      {friends}
      </div>
    );
  }
}

export default App;
