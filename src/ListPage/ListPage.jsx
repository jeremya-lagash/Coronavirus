import React, { Fragment } from "react";
import axios from "axios";

import { userService, authenticationService } from "@/_services";

class ListPage extends React.Component {
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
    const { countryData, classes } = this.state;
    return (
      <>
        <center>
          <h1>Lista de Países</h1>
        </center>
        <center>
          <table>
            <tr>
              <th>País</th>
              <th>Casos</th>&nbsp;&nbsp;
              <th>Casos de Hoy</th>&nbsp;&nbsp;
              <th>Muertes</th>&nbsp;&nbsp;
              <th>Muertes de Hoy</th>
            </tr>
            {countryData.map(countryData => {
              return (
                <Fragment>
                  <tr>
                    <td>{countryData.country}</td>
                    <td>
                      <center>{countryData.cases}</center>
                    </td>
                    &nbsp;&nbsp;
                    <td>
                      <center>{countryData.todayCases}</center>
                    </td>
                    &nbsp;&nbsp;
                    <td>
                      <center>{countryData.deaths}</center>
                    </td>
                    &nbsp;&nbsp;
                    <td>
                      <center>{countryData.todayDeaths}</center>
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </table>
        </center>
      </>
    );
  }
}

export { ListPage };
