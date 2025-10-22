// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title MeeChainToken
 * @dev Token สำหรับ MeeChain platform - ใช้เป็นรางวัลจากการทำงานสำเร็จ
 */
contract MeeChainToken is ERC20, Ownable {
    // จำนวน MEE token ที่ได้รับต่อ task ที่สำเร็จ
    uint256 public rewardPerTask;
    
    // Mapping เก็บ task completion
    mapping(address => uint256) public tasksCompleted;
    
    event TaskCompleted(address indexed user, uint256 taskCount, uint256 reward);
    event RewardPerTaskUpdated(uint256 oldReward, uint256 newReward);

    constructor(
        uint256 initialSupply,
        uint256 _rewardPerTask
    ) ERC20("MeeChain Token", "MEE") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * 10**decimals());
        rewardPerTask = _rewardPerTask * 10**decimals();
    }

    /**
     * @dev อัพเดทจำนวนรางวัลต่องาน (เฉพาะ owner)
     */
    function setRewardPerTask(uint256 _rewardPerTask) external onlyOwner {
        uint256 oldReward = rewardPerTask;
        rewardPerTask = _rewardPerTask * 10**decimals();
        emit RewardPerTaskUpdated(oldReward, rewardPerTask);
    }

    /**
     * @dev บันทึกการทำงานสำเร็จและมอบรางวัล
     */
    function completeTask(address user) external onlyOwner {
        require(user != address(0), "Invalid user address");
        
        tasksCompleted[user]++;
        _mint(user, rewardPerTask);
        
        emit TaskCompleted(user, tasksCompleted[user], rewardPerTask);
    }

    /**
     * @dev มอบรางวัลจำนวนหลาย task
     */
    function completeTasks(address user, uint256 taskCount) external onlyOwner {
        require(user != address(0), "Invalid user address");
        require(taskCount > 0, "Task count must be greater than 0");
        
        tasksCompleted[user] += taskCount;
        uint256 totalReward = rewardPerTask * taskCount;
        _mint(user, totalReward);
        
        emit TaskCompleted(user, tasksCompleted[user], totalReward);
    }
}
