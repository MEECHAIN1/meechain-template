// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title BadgeMint
 * @dev NFT Badge สำหรับบันทึกความสำเร็จใน MeeChain
 */
contract BadgeMint is ERC721, Ownable {
    using Strings for uint256;

    uint256 private _tokenIdCounter;
    string private _baseTokenURI;

    // Badge metadata
    struct Badge {
        string badgeType;      // เช่น "first-board", "streak-7", "contributor"
        uint256 timestamp;
        uint256 value;         // คะแนนหรือค่าพิเศษ
        string metadata;       // JSON metadata
    }

    mapping(uint256 => Badge) public badges;
    mapping(address => uint256[]) public userBadges;
    
    event BadgeMinted(
        address indexed recipient,
        uint256 indexed tokenId,
        string badgeType
    );

    constructor(
        string memory baseURI
    ) ERC721("MeeChain Badge", "MEEBADGE") Ownable(msg.sender) {
        _baseTokenURI = baseURI;
    }

    /**
     * @dev Mint badge ให้ผู้ใช้
     */
    function mintBadge(
        address recipient,
        string memory badgeType,
        uint256 value,
        string memory metadata
    ) external onlyOwner returns (uint256) {
        require(recipient != address(0), "Invalid recipient");
        
        uint256 tokenId = _tokenIdCounter++;
        _safeMint(recipient, tokenId);
        
        badges[tokenId] = Badge({
            badgeType: badgeType,
            timestamp: block.timestamp,
            value: value,
            metadata: metadata
        });
        
        userBadges[recipient].push(tokenId);
        
        emit BadgeMinted(recipient, tokenId, badgeType);
        
        return tokenId;
    }

    /**
     * @dev ดึงข้อมูล badges ทั้งหมดของผู้ใช้
     */
    function getUserBadges(address user) external view returns (uint256[] memory) {
        return userBadges[user];
    }

    /**
     * @dev ดึงข้อมูล badge
     */
    function getBadge(uint256 tokenId) external view returns (Badge memory) {
        require(_ownerOf(tokenId) != address(0), "Badge does not exist");
        return badges[tokenId];
    }

    /**
     * @dev Base URI สำหรับ metadata
     */
    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    /**
     * @dev อัพเดท base URI
     */
    function setBaseURI(string memory baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
    }

    /**
     * @dev Token URI รวม metadata
     */
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_ownerOf(tokenId) != address(0), "Badge does not exist");
        
        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0
            ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json"))
            : "";
    }
}
