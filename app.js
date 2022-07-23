var express = require("express");
var cors = require("cors");


var dataRouter=require("./routes/getData_router")
var app = express();

app.use(express.json());
app.use(cors());



app.use("/getData", function (req, res) {
  res.send(" Homepage");
});

app.use("/",dataRouter);


//app.get("/editordata", passport.authenticate("google"));

app.listen(process.env.PORT || 3000 || 8080 || 8081, () =>
  console.log("Server Started ")
);
