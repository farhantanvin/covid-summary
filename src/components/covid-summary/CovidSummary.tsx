import { Box, Autocomplete, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getCovidSummary,
  getCovidSummaryData,
} from "../../slices/CovidSummarySlice";
import React, { useEffect, useState } from "react";
import WorldMap from "react-svg-worldmap";
import { Country } from "./model/covid-summary.model";

const CovidSummary = () => {
  const dispatch = useDispatch<any>();
  const covidSummaryData = useSelector(getCovidSummaryData);
  
  useEffect(() => {
    dispatch(getCovidSummary());
  }, [dispatch]);

  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // npm aduited states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", marginY: "50px" }}>
        <Typography variant="h3">Covid Summary Application</Typography>
      </Box>

      <Box sx={{ marginX: "100px" }}>
        <Autocomplete
          id="search-country"
          freeSolo
          options={
            covidSummaryData.Countries ? covidSummaryData.Countries.map(
                  (option: Country) => option.Country
                )
              : []
          }
          renderInput={(params) => (
            <TextField {...params} label="Search Country" />
          )}
        />
      </Box>

      {/* <WorldMap
        color="red"
        title="Top 10 Populous Countries"
        value-suffix="people"
        size="lg"
        data={data}
      /> */}
    </>
  );
};

export default CovidSummary;
