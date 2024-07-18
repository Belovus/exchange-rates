import { Dispatch, SetStateAction, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./dataPickerZone.css";
import { Button } from "../../atoms/button";
import { ACTIVE_BUTTONS } from "./config";
import ClockAndDate from "../clockAndDate/ClockAndDate";
import dayjs from "dayjs"

type DataPickerZoneT = {
  setStartDate: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
  setActiveCurrency: Dispatch<SetStateAction<ACTIVE_BUTTONS>>;
  activeCurrency: ACTIVE_BUTTONS;
}

const DataPickerZone = ({ setStartDate, setEndDate, setActiveCurrency, activeCurrency }: DataPickerZoneT) => {
  const [activePeriod, setActivePeriod] = useState<ACTIVE_BUTTONS>(ACTIVE_BUTTONS.MONTH);

  const handleOnClickCurrency = (currency: ACTIVE_BUTTONS) => {
    setActiveCurrency(currency);
  }

  const handleOnClickPeriod = (period: ACTIVE_BUTTONS) => {
    setActivePeriod(period);
    switch (period) {
      case ACTIVE_BUTTONS.MONTH:
        setStartDate(dayjs().subtract(1, 'month').format('YYYY-MM-DD'));
        setEndDate(dayjs().format('YYYY-MM-DD'));
        break;
      case ACTIVE_BUTTONS.THREE_MONTHS:
        setStartDate(dayjs().subtract(3, 'month').format('YYYY-MM-DD'));
        setEndDate(dayjs().format('YYYY-MM-DD'));
        break;
      case ACTIVE_BUTTONS.SIX_MONTHS:
        setStartDate(dayjs().subtract(6, 'month').format('YYYY-MM-DD'));
        setEndDate(dayjs().format('YYYY-MM-DD'));
        break;
      default:
        break;
    }
  }

  return (
    <div className="Wrapper">
      <ClockAndDate />
      <div className="BaseCurrency">
        <Button text="USD" active={activeCurrency === ACTIVE_BUTTONS["USD"]} onClick={() => handleOnClickCurrency(ACTIVE_BUTTONS.USD)} />
        <Button text="EUR" active={activeCurrency === ACTIVE_BUTTONS["EUR"]} onClick={() => handleOnClickCurrency(ACTIVE_BUTTONS.EUR)} />
      </div>
      <div className="Periods">
        <Button text="месяц" active={activePeriod === ACTIVE_BUTTONS["MONTH"]} onClick={() => handleOnClickPeriod(ACTIVE_BUTTONS.MONTH)} />
        <Button text="3 месяца" active={activePeriod === ACTIVE_BUTTONS["THREE_MONTHS"]} onClick={() => handleOnClickPeriod(ACTIVE_BUTTONS.THREE_MONTHS)} />
        <Button text="полгода" active={activePeriod === ACTIVE_BUTTONS["SIX_MONTHS"]} onClick={() => handleOnClickPeriod(ACTIVE_BUTTONS.SIX_MONTHS)} />
      </div>
    </div>
  );
};

export default DataPickerZone;
