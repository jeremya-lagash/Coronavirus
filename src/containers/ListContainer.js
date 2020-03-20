import React, { Component } from "react";
import axios from "axios";
import List from "../components/List";
import { Box } from "@material-ui/core";

class ListContainer extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/")
      .then(res => {
        const data = res.data.results;
        this.setState({ data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <div>
          <Box>
            <List data={data} />
          </Box>
        </div>
      </>
    );
  }
}

export default ListContainer;
