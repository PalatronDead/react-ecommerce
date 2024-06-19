
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./styles.css";


const CheckoutSideMenu = () => {
    const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, productToShow} = useContext(ShoppingCartContext)

    console.log('productToShow: ', productToShow )
    return (
        <aside 
        className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <XMarkIcon 
                className="w-8 h-8"
                onClick={closeCheckoutSideMenu}
                />
            </div>
            
        </aside>
    )
}

export default CheckoutSideMenu