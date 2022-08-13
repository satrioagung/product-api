const express = require("express");
const app = express();

const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");

app.use(express.json());
app.use("/product", productRouter);
app.use("/user", userRouter);

app.listen(3000, () => console.log("App listening on port 3000"));
