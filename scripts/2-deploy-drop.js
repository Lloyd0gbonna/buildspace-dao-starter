import { ethers } from "ethers";
import sdk from "./1-initialize-sdk";
import { readFileSync } from "fs";

const app = sdk.getAppModule("") //some app address

(async () => {
    try {
        const bundleDropModule = await app.deploybundleDropModule({
            //Collectiion
            name: "YJ Membership",
            // Descriiption
            description: "A DAO for fans of Young Justice.",
            //Image
            images: readFileSync("scripts/assets/youngjustice.png"),
            //Address Drop
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.adress,
        );
        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    }   catch(error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})()