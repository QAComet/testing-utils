import { test as teardown } from "@playwright/test";
import { dropTemplate, resetDatabase } from "../utils/database";

teardown(
  "Reset the test database and the drop the template database",
  async () => {
    // this way seeding new data will work
    await resetDatabase();
    await dropTemplate();
  }
);
