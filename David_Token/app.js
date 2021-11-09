let imageLinks = ["https://son.github.io/image 내 주소적기"]

if(ethereum){
    ethereum.autoRefreshOnNetworkChange = false;
     ethereum.enable();
} else {
    alert("You need a MetaMask account to experience this site.")
}

const provider = new ethers.providers.Web3Provider(window.ethereum);
let signer = provider.getSigner();
const contractAddress = "0x7a50F376fa915eeF78B87616DcE9023b8860A050"
const contractABI = [
"function awardItem(address player, uint256 tokenId) public",
"function balanceOf(address account) public view returns (uint256)",
"function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)",
"function totalSupply() public view returns (uint256)",
"function tokenByIndex(uint256 index) public view returns (uint256)",
"function safeTransferFrom(address from, address to, uint256 tokenId) public",
"function ownerOf(uint256 tokenId) public view returns (address)"
];

const contract = new ethers.Contract(contractAddress, contractABI, provider);
const tokenWithSigner = contract.connect(signer);

let address;
let totalSupply;
let existingTokens = [];
let signerTokens = [];

// main();

async function main(){

    // address = await signer.getAddress();
    // console.log(address);

    // totalSupply = await contract.totalSupply();
    // console.log("total supply: " + totalSupply);

    // let tokenNumberOne = await contract.tokenByIndex(0);
    // tokenNumberOne = parseInt(tokenNumberOne)
    // console.log(tokenNumberOne);

    // let onwerOfTokenOne = await contract.ownerof(tokenNumberOne);
    // console.log(onwerOfTokenOne);

    // let myBalance = await contract.balanceOf(address);
    // myBalance =+myBalance;
    // console.log(myBalance);
}

