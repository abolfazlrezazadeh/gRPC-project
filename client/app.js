const express = require("express");
const { allRoutes } = require("./routes/index.routes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(allRoutes)
app.listen(4000,()=>{
    console.log('server running on port 4000');
})
