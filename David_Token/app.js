let imageLinks = ["https://kyeongtaeson.github.io/David_SAIC/David_Token/img/1.JPG",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/2.JPG",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/3.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/4.JPG",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/5.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/6.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/7.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/8.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/9.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/10.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/11.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/12.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/13.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/14.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/15.JPG",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/16.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/17.JPG",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/18.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/19.jpg",
"https://kyeongtaeson.github.io/David_SAIC/David_Token/img/20.jpg"
]

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

