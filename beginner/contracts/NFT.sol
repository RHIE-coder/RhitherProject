// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    constructor() ERC721("RHIE NFT", "RN"){}

    uint private _tokenId = 0;

    function mint() external returns (uint){
        _mint(msg.sender, _tokenId);
        _tokenId++;
        return _tokenId;
    }
}