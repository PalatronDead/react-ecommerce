import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const { items, setSearchByTitle } = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="relative mb-4 flex w-80 items-center justify-center">
        <h1 className="text-xl font-medium">Exclusive Products</h1>
      </div>
      <input
        className="mb-4 w-80 rounded-lg border border-black p-4 focus:outline-none"
        type="text"
        placeholder="Search a product"
        onChange={(e) => setSearchByTitle(e.target.value)}
      />
      <div className="grid w-full max-w-screen-lg grid-cols-4 gap-4">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
