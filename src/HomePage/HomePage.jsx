import React, { Fragment } from "react";
import axios from "axios";

import { userService, authenticationService } from "@/_services";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
      users: null,
      countryData: []
    };
  }

  componentDidMount() {
    userService.getAll().then(users => this.setState({ users }));
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
    const text = "de Covid-19 a Nivel Global";
    return (
      <Fragment>
        <center>
          Casos {text}
          <h1>{countryData.cases}</h1>
          Muertos {text}
          <h1>{countryData.deaths}</h1>
          Curados {text}
          <h1>{countryData.recovered}</h1>
          <br></br>
          <h1>
            <a href="/countries">Ver Países</a>
          </h1>
        </center>
      </Fragment>
    );
  }
}

export { HomePage };
