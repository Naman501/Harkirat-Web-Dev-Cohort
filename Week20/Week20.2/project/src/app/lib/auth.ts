import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Email",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "E-mail",
          type: "text",
          placeholder: "naman@mittal.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },

      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;
        console.log("username:", username, " ", " password: ", password);
        const user = {
          name: "naman",
          id: "1",
          username: "naman@mittal.com",
          email: "heloo@hello.com",
        };

        if (user) {
          // return null;
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
         clientId: process.env.GOOGLE_ID || "",
    clientSecret: process.env.CLIENT_SECRET || "",
    
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token, user, account }: any) => {
      token.userId = token.sub;
      token.naman = "NMN";
      if (account) {
        token.accessToken = account.access_token;
      }
      console.log(token, " & user ", user);
      console.log("Account", account);
      return token;
    },
  },
};
