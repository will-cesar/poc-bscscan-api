import { app } from "./app";

const server = app.listen(3000, () => {
    console.log('API running at http://localhost:3000');
});