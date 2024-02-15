import axios, { AxiosError } from "axios";
import { getUrl } from "./utils";

export async function seedUser() {
  const user = {
    email: "test@example.com",
    password: "password",
  };
  try {
    await axios.post(getUrl("/register"), user);
    return user;
  } catch (e: unknown) {
    e = e as AxiosError;
    if (e instanceof AxiosError) {
      if (e.response && e.response.status) {
        const status = e.response.status;
        // https://docs.medusajs.com/api/store#customers_postcustomers
        if (status === 422) {
          return user;
        }
      }
      throw e;
    }
  }
}
