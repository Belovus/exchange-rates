import React, { useEffect, useState, useCallback } from 'react';
import { Navigation } from 'swiper/modules';
import './App.css';
import { useFetchCurrencies } from "./hooks/useFetchCurrencies";
import { DataPickerZone } from "./components/organisms/datePickerZone";
import { CurrencyBlocks } from "./components/organisms/currencyBlocks";
import { CustomLoader } from "./components/atoms/customLoader";
import { ACTIVE_BUTTONS } from "./components/organisms/datePickerZone/config";
import dayjs from "dayjs";
import { scroller } from "react-scroll";
import { SYMBOLS } from "./helpers/config";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function App() {
  const { fetchCurrenciesPeriod, data, loading } = useFetchCurrencies();
  const [activeCurrency, setActiveCurrency] = useState<ACTIVE_BUTTONS>(ACTIVE_BUTTONS.USD);
  const [activePeriod, setActivePeriod] = useState<ACTIVE_BUTTONS>(ACTIVE_BUTTONS.MONTH);
  const [startDate, setStartDate] = useState(dayjs().subtract(1, 'month').format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [autoScroller, setAutoScrollerActive] = useState(false);

  const CURRENCY_QUANTITY = SYMBOLS.split(",").length;

  const handleUseScrollerToAllElements = useCallback(() => {
    setAutoScrollerActive(true);
    const innerRecursion = () => {
      let count = 0;
      const intervalId = setInterval(() => {
        if (!autoScroller) return;
        scroller.scrollTo(`scroll${count}`, {
          duration: 1500,
          delay: 100,
          smooth: true,
          offset: -50,
        });
        count++;
        if (data) {
          if (count === CURRENCY_QUANTITY) {
            clearInterval(intervalId);
            innerRecursion();
          }
        }
      }, 5000);
    }
    innerRecursion();
  }, [CURRENCY_QUANTITY, autoScroller, data])

  useEffect(() => {
    if (data && !autoScroller) {
      handleUseScrollerToAllElements();
    }
  }, [data, autoScroller, handleUseScrollerToAllElements]);

  useEffect(() => {
    fetchCurrenciesPeriod({ startDate, endDate, baseCurrency: activeCurrency });
  }, [fetchCurrenciesPeriod, startDate, endDate, activeCurrency]);


  return (
    <div className="App">
      <div className="DataPickerZone">
        <DataPickerZone
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setActiveCurrency={setActiveCurrency}
          activeCurrency={activeCurrency}
          activePeriod={activePeriod}
          setActivePeriod={setActivePeriod}
        />
      </div>
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="CurrencyBlocksWrapper">
            <CurrencyBlocks data={data} />
          </div>
        </SwiperSlide>
        <SwiperSlide>Test</SwiperSlide>
        {loading && (
          <div className="Loading">
            <CustomLoader />
          </div>
        )}
      </Swiper>
    </div>
  );
}

export default App;
