import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
(BigInt.prototype as any).toJSON = function () {
    return this.toString();
};

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});
