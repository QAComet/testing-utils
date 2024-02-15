import { defineConfig, devices } from "@playwright/test";
import path from "path";
import "dotenv/config.js";

export const STORAGE_STATE = path.join(__dirname, "playwright/.auth/user.json");

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: "html",
  use: {
    baseURL: "http://127.0.0.1:8080",
    trace: "retain-on-failure",
  },

  projects: [
    {
      name: "setup",
      testMatch: /global\/setup\.ts/,
      teardown: "cleanup test database",
    },
    {
      name: "public setup",
      testMatch: /global\/public\.ts/,
      teardown: "cleanup test database",
    },
    {
      name: "cleanup test database",
      testMatch: /global\/teardown\.ts/,
    },
    {
      name: "chromium auth",
      dependencies: ["setup"],
      testIgnore: "public/*.spec.ts",
      use: { ...devices["Desktop Chrome"], storageState: STORAGE_STATE },
    },
    {
      name: "chromium public",
      dependencies: ["public setup"],
      testMatch: "public/*.spec.ts",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
