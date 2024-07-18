import { useCallback, useState } from 'react';
import { BASE_API_URL, MY_HEADERS, SYMBOLS } from "../helpers/config";
import { DataT } from "../types";

export const useFetchCurrencies = () => {
  const [data, setData] = useState<DataT | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchCurrenciesPeriod = useCallback(async ({ startDate, endDate, baseCurrency }: { startDate: string, endDate: string, baseCurrency: string }) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_API_URL}/exchangerates_data/timeseries?start_date=${startDate}&end_date=${endDate}&base=${baseCurrency}`, {
        method: "GET",
        redirect: "follow",
        headers: MY_HEADERS
      });
      if (!response.ok) {
        throw new Error('Ошибка при получении данных');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetchCurrenciesPeriod, data, loading, error };
};
