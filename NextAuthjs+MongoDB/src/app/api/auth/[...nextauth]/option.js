import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const option = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      name: "email",
      credentials: {
        username: {
          label: "نام کاربری",
          type: "text",
          placeholder: "نام کاربری",
        },
        password: { label: "پسورد", type: "password", placeholder: "پسورد " },
      },
      async authorize(credentials, req) {
        // ------------------ Based on documentation -----------------
        try {
          const res = await (
            await fetch("http://localhost:3000/api/user")
          ).json();

          const user = res.find(
            (item) =>
              item.username === credentials.username &&
              item.password === credentials.password
          );

          if (user) {
            console.log(user)
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
        }

        // -------------- Hard COde --------------------
        // const user = {
        //   id: 1,
        //   name: "mehdi",
        //   username: "mehdiw8",
        //   password: "12345",
        // };

        // if (
        //   credentials?.username === user.username &&
        //   credentials?.password === user.password
        // ) {
        //   console.log(credentials)
        //   return user;
        // } else {
        //   return null;
        // }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
  },
};
