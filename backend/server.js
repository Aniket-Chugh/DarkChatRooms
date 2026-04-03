import express from "express"
import RegisterRouter from "./src/api/routes/auth.route.js"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("everything going good mf")
})

app.use("/api", RegisterRouter);



app.listen(5000, () => {
    console.log("server is running with no error");
})
