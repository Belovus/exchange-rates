import "./currencyBlockHeader.css";
import currenciesWithFlagsfrom from "../../../helpers/currencies-with-flags.json";

const CurrencyBlockHeader = ({ currencyTarget }: { currencyTarget: string }) => {
  const countryImg = currenciesWithFlagsfrom.find((el) => el.code === currencyTarget)?.flag;
  const countryCode = currenciesWithFlagsfrom.find((el) => el.code === currencyTarget)?.code;
  return (
    <div className="CurrencyBlockHeader">
      <img className="CurrencyImg" src={countryImg} />
      <span className="CurrencyCodeText">{countryCode}</span>
    </div>
  )
}

export default CurrencyBlockHeader;
