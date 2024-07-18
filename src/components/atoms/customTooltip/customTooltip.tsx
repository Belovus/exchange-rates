import "./customTooltip.css";
import { MONTHS } from "../../../helpers/config";

type CustomTooltipT = {
  active?: boolean;
  payload?: any;
  label: any;
};

const CustomTooltip = ({ active, payload, label }: CustomTooltipT) => {
  if (active && payload && payload.length) {
    return (
      <div className="CustomTooltip">
        {payload.map((pld: any) => {
          const monthNumber = Number(pld.payload.name.toString().substr(0, 2)) - 1;
          const monthName = MONTHS[monthNumber];
          const dayNumber = Number(pld.payload.name.toString().substr(3, 4));
          return (
            <div style={{ display: "inline-block" }}>
              <div className="TooltipTitleWrapper">
                <h5 className="TooltipTitle">Exchange rate for</h5>
                <h5 className="TooltipTitle">{monthName} {dayNumber}</h5>
              </div>
              <div className="TooltipValue" style={{ color: pld.fill }}>
                <p>{pld.value}</p>
              </div>
            </div>
          )
        })}
      </div>
    );
  }

  return null;
};

export default CustomTooltip
