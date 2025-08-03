import express from "express"
import { client } from "@repo/db/client";
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("hi from the server");
})

app.get("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await client.user.create({
        data: {
            username,
            password
        },
        select: {
            username: true,
            id: true
        }
    })
    res.json({
        "message": "signup successfull",
        "id": user.id
    }).status(200);
})

app.listen(8080);