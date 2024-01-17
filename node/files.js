const fs = require("fs"); //file system

//reading files
fs.readFile("./docs/blog1.txt", (err, data) => {
  //async fn
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log("last line");

//writing files
//const fs = require("fs");

// fs.writeFile("./docs/blog1.txt", "hello world", () => {
//   console.log("file was written"); //if file doesnt exist it just creates it
// });

//directories
if (!fs.existsSync("./assets")) {
  //checking if exists or not
  fs.mkdir("./assets", (err) => {
    //create if doesnt exists
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    console.log(err);
  });
  console.log("folder deleted");
}

// deleting files

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
