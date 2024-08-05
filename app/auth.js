import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
// Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword } from "@/utils/password";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("User not found");

    const isPasswordValid = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordValid) throw new Error("Invalid password");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login");
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      authorize: async (credentials) => {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
