// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import "./Storage.sol";

contract Caller {
    Storage public s;

    constructor(Storage addr) {
        s = addr;
       
    }

    function saveValue(uint x) public returns (bool) {
        s.store(x);
        return true;
    }
    function getValue() public view returns (uint) {
        return s.retrieve();
    }
}