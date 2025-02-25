import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

//Import and connfiigure .env file securely
import dotenv from "dotenv";
dotenv.config();

//Check if .env is working
if(!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY == "") {
    console.log("🛑 Private key not found.")
}

if(!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL == "") {
    console.log("🛑 Alchemy API URL not found.")
}

if(!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS == "") {
    console.log("🛑 Wallet Address not found.")
}


const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        //.gitignore
        process.env.PRIVATE_KEY,
        //API URL
        ethers.getDefaultProvider(process.env.ALCHEMY_API_URL),
    ),
);

(async () => {
    try {
        const apps = await sdk.getApps();
        console.log("Your app address is:", apps[0].address);
    }   catch (err) {
        console.error("failed to get apps froom the sdk", err);
        process.exit(1);
    }
})()

//Export the initialized thirdweb SDK
export default sdk;