pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";

contract DavidSonToken is ERC721 {
    
    
    constructor() public ERC721("DavidSonToken", "DST"){}
    
    function awardItem(address tokenRecipient, uint256 tokenId) public returns (uint256) {
        
        _mint(tokenRecipient, tokenId);
        
        return tokenId;
        
        
   
    }
    
}
