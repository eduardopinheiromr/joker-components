import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "@services/auth";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials) {
          try {
            const { access_token, user } = await signIn(credentials);

            if (user.admin === 0) {
              return null;
            }

            if (access_token) {
              return {
                id: user.id,
                name: user.name,
                token: access_token,
                email: credentials.username,
              };
            }
          } catch (error) {
            return null;
          }
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,

  session: {
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 60 * 60 * 24, // 24 hours
  },

  jwt: {
    secret: process.env.AUTH_SECRET,
  },

  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session = session as {
        user: {
          id: number;
          name: string;
          email: string;
        };
        token: string;
        expires: string;
      };

      // Inject JWT token
      if (token && token.user) {
        session.token = (token.user as { token: string }).token;
      }

      return session;
    },
  },
});
