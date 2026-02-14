import express from "express";


const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
    res.json({
        message: "API running"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});