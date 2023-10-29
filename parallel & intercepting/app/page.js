import Link from "next/link";
import swagPhotos from "./data";
import Image from "next/image";
export default function Home() {
  const photos = swagPhotos;
  return (
    <>
      <main>
        <h1 className="text-center ">Photos</h1>
        {photos.map((item) => (
          <Link key={item.id} href={`/photo/${item.id}`}>
            <Image
              alt="lt"
              src={item.imageSrc}
              height={200}
              width={200}
              className="mx-auto my-10 rounded object-cover aspect-square"
            />
          </Link>
        ))}
      </main>
    </>
  );
}
