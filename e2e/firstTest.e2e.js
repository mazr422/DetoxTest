const { reloadApp } = require("detox-expo-helpers");

describe("Example", () => {
  it("should have welcome screen", async () => {
    await reloadApp();
    await expect(
      element(by.text("Open up App.tsx to start working on your app!"))
    ).toBeVisible();
  });
});
