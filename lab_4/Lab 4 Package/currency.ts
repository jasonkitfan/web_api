import axios from 'axios';

const exchange = async (symbol: string) => {
  const url = `https://api.apilayer.com/fixer/latest?base=EUR&symbols=${symbol}`;
  const options = {
    url: url,
    headers: {
      apikey: "gyoLjhjtmkX0BtTrRtI1A7r1NIs3jT2i"
    }
  };
  try {
    const { data, status } = await axios.get(url, options);
    console.log(`${status}`);
    return data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      return err.message;
    } else {
      return err;
    }
  }
}

try {
  if (process.argv.length < 3) {
    throw 'missing parameter'
  } else {
    const symbol = process.argv[2].toUpperCase();
    exchange(symbol).then((data) => {
      console.log(data);
      const hkd = data["rates"][symbol].toFixed(2);
      console.log(hkd);
      data["rates"][symbol] = +hkd;
      console.log(data);
      console.log(`1 EUR = ${hkd} ${symbol}`)
    })

  }
} catch (err: any) {
  console.log(`${err} Usage: currency [toSymbols]`)
}
