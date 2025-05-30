import NextAuth from "next-Auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      provider?: string | null;
      token?: string | null;
    };
  }

  interface User {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    provider?: string | null;
    token?: string | null;
  }

  declare module "next-auth/jwt" {
    interface JWT {
      user?: {
        id?: string | null;
        name?: string | null;
        email?: string | null;
        image?: string | null;
        provider?: string | null;
        token?: string | null;
      };
    }
  }
}
