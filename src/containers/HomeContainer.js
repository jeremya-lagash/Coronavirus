import React, { Component } from "react";
import axios from "axios";
import Home from "../components/Home";

class HomeContainer extends Component {
  state = {
    countryData: []
  };

  componentDidMount() {
    axios
      .get("https://coronavirus-19-api.herokuapp.com/all")
      .then(res => {
        const countryData = res.data;
        console.log(countryData);
        this.setState({ countryData });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { countryData } = this.state;
    return (
      <>
        <div>
          <Home countryData={countryData} to={"/countries"} />
        </div>
      </>
    );
  }
}

export default HomeContainer;
