const { reloadApp } = require("detox-expo-helpers");

describe("Example", () => {
  await reloadApp();
  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });
});
