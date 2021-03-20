const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/characteristics.csv', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/writeCharacteristics.csv');

// myReadStream.on('data', (chunk) => {
//   console.log('new chunk received:');
//   myWriteStream.write(chunk);
// } )

myReadStream.pipe(myWriteStream);