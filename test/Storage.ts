import { expect } from "chai";
const { ethers } = require("hardhat");

describe("Storage", function () {
  it("Should store a value", async function () {
    const Storage = await ethers.getContractFactory("Storage");
    const storage = await Storage.deploy();

    await storage.store(42);
    expect(await storage.retrieve()).to.equal(42);
  });
});
