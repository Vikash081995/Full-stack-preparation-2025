const fs = require("fs");

const readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf8",
  highWaterMark: 2,
});

const writableStream = fs.createWriteStream("./file2.txt");

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writableStream.write(chunk);
// });

//

readableStream.pipe(writableStream);
