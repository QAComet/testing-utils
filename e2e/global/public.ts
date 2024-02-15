import { test as setup } from "@playwright/test";
import { seed } from "../utils/seed";

setup("Seed data", async () => {
  await seed();
});
