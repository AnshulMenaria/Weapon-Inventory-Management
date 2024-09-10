import dotenv from "dotenv"
import os from 'os'; // Import the os module

import {app} from './app.js'
import connectDB from "./db/index.js"



dotenv.config({
    path: './.env'
})


connectDB()
.then(() => { 
    app.listen(process.env.PORT || 8000, '0.0.0.0', () => {
        const interfaces = os.networkInterfaces();
        const addresses = [];
        for (let k in interfaces) {
            for (let k2 in interfaces[k]) {
                const address = interfaces[k][k2];
                if (address.family === 'IPv4' && !address.internal) {
                    addresses.push(address.address);
                }
            }
        }
        console.log(` ⚙️ Server is running on port ${process.env.PORT}, Lan Address: ${addresses.join(', ')}:${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log(`MONGO db connection failed !!!`,error)
})