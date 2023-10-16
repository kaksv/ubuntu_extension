document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("click", handler);
});

function handler() {
    document.getElementById("center").style.display = "flex";

    const private_key = document.getElementById("private_key").value;
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;

    test_p = "903bf18f9dc2b4810ade3847b2207406a8511fc061946f7d0020a76e2ea47cb1";
    test_a = "0x6b1b57e7C694bB50E4c36fe8D63341B4503Cc636";

    // PROVIDER
    const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-mumbai.g.alchemy.com/v2/emk9nfPbL7IG6VDn-_nOWGeD4QFHDj8o"
    );

    let wallet = new ethers.Wallet(private_key, provider);

    const txn = {
        to: address,
        value: ethers.utils.parseEther(amount),
    };

    a = document.getElementById("link");
    a.href = "somelink url";

    wallet.sendTransaction(tx).then((txObj) =>{
        console.log("txHash", txObj.hash);
        document.getElementById("center").style.display = "none";
        const a = document.getElementById("link");
        a.href = `https://mumbai.polygonscan.com/tx/${txObj.hash}`;
        document.getElementById("link").style.display = "block";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("check_balance")
             .addEventListener("click", checkBalance);
});

function checkBalance() {
    document.getElementById("center").style.display = "flex";

    // PROVIDER
    const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-mumbai.g.alchemy.com/v2/emk9nfPbL7IG6VDn-_nOWGeD4QFHDj8o"
    );
    const signer = provider.getSigner();
    console.log(signer);
    const address = document.getElementById("address").value;
    provider.getBalance(address).then((balance) => {
        // Convert a currency uint from wei to ether
        const balanceInEth = ethers.utils.formatEther(balance);
        document.getElementById("check_balance").innerText = `Your Balance: ${balanceInEth} MATIC`;
        console.log(`balance: ${balanceInEth} ETH`);
        document.getElementById("center").style.display = "none"; 
    });

}