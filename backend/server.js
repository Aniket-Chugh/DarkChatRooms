import express from "express"
import RegisterRouter from "./src/api/routes/auth.route.js"

const app = express();


app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
    res.send("everything going good mf")
})

app.use("/api", RegisterRouter);



app.listen(5000, () => {
    console.log("server is running with no error");
})
