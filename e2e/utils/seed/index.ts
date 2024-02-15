import { seedUser } from "./user";

export async function seed() {
  return {
    user: await seedUser(),
  };
}
