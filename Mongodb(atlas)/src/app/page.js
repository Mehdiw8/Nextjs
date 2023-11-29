import Form from "./components/Form";
import ShowProducts from "./components/ShowProducts";

export default async function Home() {

  return (
    <div className="m-auto w-1/3  mt-8">
      <Form />
      <ShowProducts />
    </div>
  );
}
