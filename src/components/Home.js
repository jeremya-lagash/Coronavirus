import React, { Fragment } from "react";
import { Grid, TableRow, Link } from "@material-ui/core";

function Home({ countryData, to }) {
  const text = "de Covid-19 a Nivel Global";
  return (
    <Fragment>
      <center>
        Casos {text}
        <h1>
          <TableRow xs={12}>
            <Grid>{countryData.cases}</Grid>
          </TableRow>
        </h1>
        Muertos {text}
        <h1>
          <TableRow xs={12}>
            <Grid>{countryData.deaths}</Grid>
          </TableRow>
        </h1>
        Curados {text}
        <h1>
          <TableRow xs={12}>
            <Grid>{countryData.recovered}</Grid>
          </TableRow>
        </h1>
        <Link href={to}>Ver Países</Link>
      </center>
    </Fragment>
  );
}

export default Home;
