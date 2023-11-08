"use client";

export default function GlobalError({ error, reset }) {
  console.log(`Error in layout : ${error}`);
  
  return (
    <>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}
