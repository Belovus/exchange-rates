import React, { useMemo } from 'react';

import './currencyBlock.css';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { Element } from 'react-scroll';

import { CurrencyBlockHeader } from '../../molecules/currencyBlockHeader';
import { CustomTooltip } from '../../atoms/customTooltip';

interface CurrencyBlockProps {
  targetRatesArray: string[],
  datesArray: string[],
  currencyTarget: string,
  scrollName: string,
  currencyBase: string,
}

const CurrencyBlock: React.FC<CurrencyBlockProps> = ({
  targetRatesArray,
  datesArray,
  currencyTarget,
  scrollName,
  currencyBase,
}: CurrencyBlockProps) => {
  const data = targetRatesArray.map((rate, index) => {
    return {
      name: datesArray[index],
      cost: rate,
    };
  });

  const currentRate = useMemo(() => Number(targetRatesArray[targetRatesArray.length -1]), [targetRatesArray]);

  return (
    <>
      <Element name={scrollName} />
      <div className="CurrencyBlock">
        <CurrencyBlockHeader currencyTarget={currencyTarget} currentRate={currentRate} currencyBase={currencyBase} />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 15,
              right: 35,
              bottom: 10,
            }}
          >
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis interval="preserveStartEnd" domain={['dataMin', 'dataMax']} />
            <Tooltip
              content={CustomTooltip}
              cursor={{ fill: 'transparent' }}
            />
            <Line type="monotone" dataKey="cost" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default CurrencyBlock;
