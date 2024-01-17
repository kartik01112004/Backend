const fs = require("fs");

//creating a stream to read
const readStream = fs.createReadStream("./docs/blog1.txt");
const writeStream = fs.createWriteStream("./docs/blod2.txt");

// readStream.on("data", (chunk) => {
//   //.on is event listener
//   console.log("-----------------new chunk-----------------");
//   console.log(chunk.toString());
//   writeStream.write("\n New chunk\n");
//   writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);
