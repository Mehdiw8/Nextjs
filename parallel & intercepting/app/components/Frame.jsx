import Image from "next/image";

export default function Frame({ photo }) {
  return (
    <>
      <Image
        alt=""
        src={photo.imageSrc}
        height={400}
        width={400}
        className=" object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{photo.name}</h3>
        <p>Taken by {photo.username}</p>
      </div>
    </>
  );
}
