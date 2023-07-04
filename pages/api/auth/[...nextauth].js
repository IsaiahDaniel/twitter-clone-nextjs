// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET
//     })
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       session.user.tag = session.user.name
//         .split(" ")
//         .join("")
//         .toLocaleLowerCase();

//       session.user.uid = token.sub;
//       return session;
//     }
//   }
// }

// export default NextAuth(authOptions)

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  secret: "say_lalisa_love_me_lalisa_love_me_hey",
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.tag = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
});