import './currencyBlockHeader.css';
import currenciesWithFlags from '../../../helpers/currencies-with-flags.json';

interface CurrencyBlockHeaderProps {
  currencyTarget: string;
  currentRate: number;
  currencyBase: string;
}

const CurrencyBlockHeader = ({ currencyTarget, currentRate, currencyBase }: CurrencyBlockHeaderProps) => {
  const countryImg = currenciesWithFlags.find((el) => el.code === currencyTarget)?.flag;
  const countryCode = currenciesWithFlags.find((el) => el.code === currencyTarget)?.code;

  return (
    <div className="CurrencyBlockHeader">
      <img className="CurrencyImg" src={countryImg} alt={'countryImg'} />
      <span className="CurrencyCodeText">{countryCode}</span>
      <div className="CurrencyRateContainer">
        <span className="CurrencyRateContainerText">{countryCode}{'/'}{currencyBase}{' '}{currentRate}</span>
      </div>
    </div>
  );
};

export default CurrencyBlockHeader;
