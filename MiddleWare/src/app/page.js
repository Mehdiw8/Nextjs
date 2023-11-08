export default async function Home() {
  const { data } = await (
    await fetch("http://localhost:3000/api/username")
  ).json();

  return (
    <>
      <main>hello</main>
      {data.map((person) => (
        <div>{person.username}</div>
      ))}
    </>
  );
}
