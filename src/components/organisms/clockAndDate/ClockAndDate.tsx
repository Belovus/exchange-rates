import './clockAndDate.css';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const ClockAndDate = () => {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="ClockAndDate">
      {time.format('DD.MM.YYYY HH:mm:ss')}
    </div>
  );
};

export default ClockAndDate;
