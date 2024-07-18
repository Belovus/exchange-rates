import { DataT } from "../../../types";
import { CurrencyBlock } from "../currencyBlock";
import React, { useEffect } from "react";
import { scroller } from "react-scroll";

const CurrencyBlocks = ({
  data,
}: {
  data: DataT | null
}) => {
  if (!data) return null;

  const ratesArray = Object.entries(data.rates).map(entry => entry[1]);
  const datesArray = Object.keys(data.rates).map(date => date.slice(5).replace("-", "."));
  const currencyNames = Object.keys(ratesArray[0]);


  return (
    <>
      {currencyNames.map((currencyName, index) => {
        const targetRatesArray = ratesArray.map((rate) => rate[currencyName].toFixed(3));
        return (
          <CurrencyBlock
            targetRatesArray={targetRatesArray}
            datesArray={datesArray}
            currencyTarget={currencyName}
            scrollName={`scroll${index}`}
          />
        )
      })}
    </>
  )
}

export default CurrencyBlocks;
