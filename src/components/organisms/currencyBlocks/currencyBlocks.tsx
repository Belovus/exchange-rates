import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DataT } from '../../../types';
import { CurrencyBlock } from '../currencyBlock';

const CurrencyBlocks = ({
  data,
}: {
  data: DataT | null
}) => {
  if (!data) return null;

  const ratesArray = Object.entries(data.rates).map(entry => entry[1]);
  const datesArray = Object.keys(data.rates).map(date => date.slice(5).replace('-', '.'));
  const currencyNames = Object.keys(ratesArray[0]);

  return (
    <>
      {currencyNames.map((currencyName, index) => {
        const targetRatesArray = ratesArray.map((rate) => Number(rate[currencyName]).toFixed(2));
        return (
          <CurrencyBlock
            targetRatesArray={targetRatesArray}
            datesArray={datesArray}
            currencyTarget={currencyName}
            scrollName={`scroll${index}`}
            currencyBase={data.base}
            key={uuidv4()}
          />
        );
      })}
    </>
  );
};

export default CurrencyBlocks;
