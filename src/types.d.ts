export type DataT = {
  base: string,
  end_date: string,
  rates: Record<string, Record<string, number>>
  start_date: string,
  success: boolean,
  timeseries: boolean,
}
