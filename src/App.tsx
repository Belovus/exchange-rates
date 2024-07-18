import React, { useEffect, useState } from 'react';
import './App.css';
import { useFetchCurrencies } from "./hooks/useFetchCurrencies";
import { DataPickerZone } from "./components/organisms/datePickerZone";
import { CurrencyBlocks } from "./components/organisms/currencyBlocks";
import { CustomLoader } from "./components/atoms/customLoader";
import { ACTIVE_BUTTONS } from "./components/organisms/datePickerZone/config";
import dayjs from "dayjs";
import { scroller } from "react-scroll";

function App() {
  const { fetchCurrenciesPeriod, data, loading } = useFetchCurrencies();
  const [activeCurrency, setActiveCurrency] = useState<ACTIVE_BUTTONS>(ACTIVE_BUTTONS.USD);
  const [startDate, setStartDate] = useState(dayjs().subtract(1, 'month').format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));

  useEffect(() => {
    handleUseScrollerToAllElements();
  }, []);

  useEffect(() => {
    fetchCurrenciesPeriod({ startDate, endDate, baseCurrency: activeCurrency });
  }, [fetchCurrenciesPeriod, startDate, endDate, activeCurrency]);

  const handleUseScrollerToAllElements = () => {
    let count = 0;
    const innerRecursion = () => {
      count = 1;
      const intervalId = setInterval(() => {
        scroller.scrollTo(`scroll${count}`, {
          duration: 1500,
          delay: 100,
          smooth: true,
          offset: -50,
        });
        count++;
        if (data) {
          if (count === Object.keys(data!.rates).length) {
            clearInterval(intervalId);
            count = 1;
            innerRecursion();
          }
        }
      }, 5000);
    }
    if (count === 0) innerRecursion();
  }


  return (
    <div className="App">
      <div className="DataPickerZone">
        <DataPickerZone
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setActiveCurrency={setActiveCurrency}
          activeCurrency={activeCurrency}
        />
      </div>
      <div className="CurrencyBlocksWrapper">
        <CurrencyBlocks data={data} />
      </div>
      {loading && (
        <div className="Loading">
          <CustomLoader />
        </div>
      )}
    </div>
  );
}

export default App;
