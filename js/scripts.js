const url = 'https://api.autovisual.com/v2/av';
const url2 = 'https://api.autovisual.com/v2/at/a';
const config = {
  headers: {'Content-Type': 'application/json'}
}

const body = {
  key: 'demo',
  txt: 'Opel Insignia 2.0 CDTI ecoFLEX 120ch Edition Start&Stop 5p berline',
  km: '63462',
  dt_entry_service: '2015-04-15',
  fuel: 'Diesel',
  transmission: 'Manual',
  country_ref: 'FR',
  value: 'true',
  transaction: 'true',
  market: 'true'
}

axios.post(url, body, config)
  .then(res => console.log(res));
