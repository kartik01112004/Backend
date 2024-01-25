const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blogs");
const { result } = require("lodash");

//express app
const app = express();

//connect to mongo db
const dbURI =
  "mongodb+srv://kartik:kartik.123@atlascluster.u4sb6oo.mongodb.net/AtlasCluster?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
//register view engine
app.set("view engine", "ejs");

// middleware & requests
app.use(express.static("public"));
app.use(morgan("dev"));

// mongoose and mongo sandbox routes

// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog 2",
//     snippet: "about my new blog",
//     body: "more about my blog",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("65b2a580d265c9a12659c351")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//not a good way?

// app.use((req, res, next) => {
//   console.log("request was made");
//   console.log("host: ", req.hostname);
//   console.log("path: ", req.path);
//   console.log("method: ", req.method);
//   next();
// });
app.get("/", (req, res) => {
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "How to defeat bowser",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // //   res.send("<p>Home page</p>");
  // res.render("index", { title: "Home", blogs });

  res.redirect("/blogs"); //redirected to blogs for content from db
});

app.get("/about", (req, res) => {
  //   res.send("<p>Home page</p>");
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "all blogs", blogs: result });
    })
    .catch((err) => console.log(err));
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
