import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import connectDb from '@/db/connectDb';
import User from '@/models/User';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, email }) {
      if (account.provider === "github") {
        await connectDb();
        const currentUser = await User.findOne({ email: email });
        if (!currentUser) {
          await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
        }
        return true;
      }
      return false;
    },

    async session({ session }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser.username;
      return session;
    },
  }
}

// ✅ Export handler functions for API routes
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
