import React from "react";
import "./currencyBlock.css";
import { CurrencyBlockHeader } from "../../molecules/currencyBlockHeader";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CustomTooltip } from "../../atoms/customTooltip";
import { Element } from "react-scroll";

const CurrencyBlock = ({
   targetRatesArray,
   datesArray,
   currencyTarget,
   scrollName,
}: {
  targetRatesArray: string[],
  datesArray: string[],
  currencyTarget: string,
  scrollName: string,
}) => {
  const data = targetRatesArray.map((rate, index) => {
    return {
      name: datesArray[index],
      cost: rate,
    }
  })

  return (
    <>
      <Element name={scrollName} />
      <div className="CurrencyBlock">
        <CurrencyBlockHeader currencyTarget={currencyTarget} />
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis interval="preserveStartEnd" domain={["dataMin", "dataMax"]} />
            <Tooltip content={(props) => <CustomTooltip active={props.active} payload={props.payload} label={props.label} />} cursor={{ fill: "transparent" }} />
            <Line type="monotone" dataKey="cost" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default CurrencyBlock;
