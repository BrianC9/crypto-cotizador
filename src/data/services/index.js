const URL =
  'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
export async function getTopListByMarketCap() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error in getTopListByMarketCap', error);
  }
}
