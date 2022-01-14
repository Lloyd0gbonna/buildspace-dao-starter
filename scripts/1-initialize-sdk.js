import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

//Import and connfiigure .env file securely
import dotenv from "dotenv";
dotenv.config();

//Check if .env is working
if(!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY == "") {
    console.log("🛑 Private key not found.")
}