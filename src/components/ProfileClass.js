import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);

    //create state
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "unknown",
      },
    };
    console.log("Child - constructor "+this.props.name);
  }

  async componentDidMount() {
    //Api call
    console.log('Child - componentDidMount '+this.props.name);
    const data = await fetch("https://api.github.com/users/ItsShibam");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Child - render "+this.props.name);
    return (
      <div className="border border-pink-400">
        <h2 className="text-2xl font-bold">Profile from Class</h2>
        <img src={this.state.userInfo.avatar_url}/>
        <h3>Name : {this.state.userInfo.name}</h3>
        <h3>Location : {this.state.userInfo.location}</h3>
        {/* <h4>count:{this.state.count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: 1,
              count2: 1,
            });
          }}
        >
          count
        </button> */}
      </div>
    );
  }
}

export default Profile;
