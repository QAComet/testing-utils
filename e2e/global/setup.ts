import { test as setup } from "@playwright/test";
import { seed } from "../utils/seed";
import { STORAGE_STATE } from "../../playwright.config";

setup(
  "Seed data and create session for authenticated user",
  async ({ page }) => {
    const data = await seed();
    const user = data.user;

    // Login the user

    await page.context().storageState({
      path: STORAGE_STATE,
    });
  }
);
