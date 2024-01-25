const express = require("express");
const morgan = require("morgan");
//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

// listen for request
app.listen(3000);

// middleware & requests
app.use(express.static("public"));
app.use(morgan("dev"));
// app.use((req, res, next) => {
//   console.log("request was made");
//   console.log("host: ", req.hostname);
//   console.log("path: ", req.path);
//   console.log("method: ", req.method);
//   next();
// });
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  //   res.send("<p>Home page</p>");
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //   res.send("<p>Home page</p>");
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});
// redirects

// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
