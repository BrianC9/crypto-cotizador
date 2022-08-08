const URL_TOP_LIST =
  'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
export async function getTopListByMarketCap() {
  try {
    const response = await fetch(URL_TOP_LIST);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error en getTopListByMarketCap', error);
  }
}
export async function getCurrentTradingPrice(criptomoneda, moneda) {
  try {
    const URL_TRADING_PRICE = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    const response = await fetch(URL_TRADING_PRICE);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error en getCurrentTradingPrice ', error);
  }
}
