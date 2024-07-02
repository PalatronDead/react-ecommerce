import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const { setSearchByTitle, filteredItems } = useContext(ShoppingCartContext);

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return filteredItems?.map((filteredItem) => (
        <Card key={filteredItem.id} data={filteredItem} />
      ));
    } else {
      return (
        <div className="col-span-4 mt-10 flex flex-col items-center justify-center">
          <FaceFrownIcon className="h-20 w-20" />
          <h1>Sorry, we don't have those Products</h1>
        </div>
      );
    }
  };

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
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;