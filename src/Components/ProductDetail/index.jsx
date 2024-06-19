
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./styles.css";


const ProductDetail = () => {
    const {isProductDetailOpen, closeProductDetail, productToShow} = useContext(ShoppingCartContext)

    console.log('productToShow: ', productToShow )
    return (
        <aside 
        className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <XMarkIcon 
                className="w-8 h-8"
                onClick={closeProductDetail}
                />
            </div>
            <figure className="px-6 h-[360px]">
                <img 
                className="w-full h-full rounded-lg"
                src={productToShow.image}
                alt={productToShow.title} />
            </figure>
            <p className="flex flex-col p-6 overflow-y-auto">
                <span className="font-medium text-2xl mb-2">${productToShow.price}</span>
                <span className="font-medium text-md mb-2">{productToShow.title}</span>
                <span className="font-light text-sm">{productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail