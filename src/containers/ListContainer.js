import React, { Component } from "react";
import axios from "axios";
import List from "../components/List";

class ListContainer extends Component {
  state = {
    countryData: []
  };

  componentDidMount() {
    axios
      .get("https://coronavirus-19-api.herokuapp.com/countries")
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
          <List countryData={countryData} />
        </div>
      </>
    );
  }
}

export default ListContainer;
