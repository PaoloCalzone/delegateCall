import { expect } from "chai";
import { ethers } from "hardhat";

describe("Caller", function () {
  it("Should call the contract", async function () {
    const [owner] = await ethers.getSigners();
    const Caller = await ethers.getContractFactory("Caller");
    const caller = await Caller.deploy();
  });
});
