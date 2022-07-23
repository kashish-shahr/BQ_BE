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
const port=process.env.PORT || 3000 ;
app.listen(port, () =>
  console.log(`Server Started on Port ${port}`)
);
