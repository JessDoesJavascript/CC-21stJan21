const express = require('express');

const app = express();
const sendRouter = require('./src/routers/sendRouter')
const enquiryRouter = require('./src/routers/enquiryRouter')
const port = process.env.PORT || 5000
const cors = require("cors");


app.use(cors());
app.use(express.json())
app.use(sendRouter)
app.use(enquiryRouter)

app.listen(port, () => console.log("Backend server live on " + port));