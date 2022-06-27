import { query as q } from "faunadb";
import NextAuth from "next-auth"
import Providers from "next-auth/providers";
import { fauna } from "../../../services/fauna";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: '7441af4a08a24c845333',
      clientSecret: '28a97022bb9048311995f2b0f8c768b417c15350',
      scope: 'read:user'
    }),
    // // ...add more providers here
    // database: process.env.DATABASE_URL,
  ],
  callbacks: {
    async signIn(user, account, profile){
     
     const { name } = user;

     console.log(account)
    //  await fauna.query(
    //    q.Create(
    //      q.Collection('users'),
    //      { data : name }
    //    )
    //  )
      return true;
    }
  }
})