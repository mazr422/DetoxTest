const { reloadApp } = require("detox-expo-helpers");

describe("Example", () => {
  it("should have welcome screen", async () => {
    await reloadApp();
    await expect(element(by.text("Login"))).toBeVisible();
    await element(by.id("SignInEmailInput")).typeText("Hello World");
    await element(by.id("SignInNavButton")).tap();
    await element(by.id("SignUpEmailInput")).typeText("Hello World");
    await element(by.id("SignUpNavButton")).tap();
  });
});
