import axios from 'axios';

const addressLocation = async (address: string) => {
  const url = `https://api.maptiler.com/geocoding/${address}.json?key=oKIDx0MjdFz4rFg1vAv5`;
  try {
    const { data, status } = await axios.get(url, {});
    console.log(`${status}`);  // check return status
    console.log(data)  // JSON Object
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
  console.log(process.argv);
  if (process.argv.length < 3) {
    throw 'missing parameter';
  }

  let address = process.argv[2];
  /* we need to remove the single quotes from the string */
  address = address.replace(/'/g, '');
  addressLocation(address).then((data) => {
    // console.log(`lat: ${data.features[0].center[0]}, long: ${data.features[0].center[1]}, ${data.features[0].place_name}`);
    data.features.forEach((info: any) => {
      console.log(`lat: ${info.center[0]}, long: ${info.center[1]}, ${info.place_name}`)
      console.log(info.properties);
    }
    );
  })
} catch (err: any) {
  console.log(err);
}
