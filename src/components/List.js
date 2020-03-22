import React, { Fragment } from "react";
import { Grid, TableCell, TableRow } from "@material-ui/core";

function List({ countryData }) {
  console.log(countryData);
  return (
    <Fragment>
      <center>
        <h1>Lista de Países</h1>
      </center>
      <center>
        <Grid item xs={12} justify="center">
          <TableRow xs={12}>
            <TableCell>País</TableCell>
            <TableCell>Casos</TableCell>
            <TableCell>Casos de Hoy</TableCell>
            <TableCell>Muertes</TableCell>
            <TableCell>Muertes de Hoy</TableCell>
          </TableRow>
          {countryData.map(countryData => {
            return (
              <>
                <TableRow xs={12}>
                  <TableCell>
                    <Grid>{countryData.country}</Grid>
                  </TableCell>
                  <TableCell>
                    <Grid>{countryData.cases}</Grid>
                  </TableCell>
                  <TableCell>
                    <Grid>{countryData.todayCases}</Grid>
                  </TableCell>
                  <TableCell>
                    <Grid>{countryData.deaths}</Grid>
                  </TableCell>
                  <TableCell>
                    <Grid>{countryData.todayDeaths}</Grid>
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </Grid>
      </center>
    </Fragment>
  );
}

export default List;
