import Image from "next/image";

export default function UserCard({ user }) {
  // console.log(user);
  const greeting = user?.name ? (
    <div className="flex flex-col items-center p-2 rounded-lg font-bold text-2xl text-black">
      {user?.name}
    </div>
  ) : null;

  const userImage = user?.image ? (
    //NOTE Remember to add config to next.config.js
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mb-2"
      src={user?.image}
      width={150}
      height={150}
      alt={"تصویر پروفایل"}
      priority={true}
    />
  ) : null;

  return (
    <section className="flex flex-col gap-4 mb-4">
      سلام {greeting} {userImage}
    </section>
  );
}
