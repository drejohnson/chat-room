import NextAuth, { DefaultSession } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
  interface User {
    username: string;
  }

  interface Session {
    user: User & {
      username: string;
    };
    token: {
      username: string;
    };
  }
}
