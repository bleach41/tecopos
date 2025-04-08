import { CartItem } from "@/types/cartItem";
import { CartItemMobile } from "./CartItemMobile";
import { CartItemDesktop } from "./CartItemDesktop";

interface CartListProps {
    cart: CartItem[];
    decreaseQuantity: (id: number) => void;
    increaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
}

export const CartList = ({
    cart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
}: CartListProps) => {
    return (
        <div className="xl:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Vista para móvil */}
                <div className="block xl:hidden">
                    {cart.map((item, index) => (
                        <CartItemMobile
                            key={`${item.id}-${index}`}
                            item={item}
                            decreaseQuantity={decreaseQuantity}
                            increaseQuantity={increaseQuantity}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </div>

                {/* Vista para desktop */}
                <table className="hidden xl:table min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Producto
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Precio
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Cantidad
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Total
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {cart.map((item, index) => (
                            <CartItemDesktop
                                key={`${item.id}-${index}`}
                                item={item}
                                decreaseQuantity={decreaseQuantity}
                                increaseQuantity={increaseQuantity}
                                removeFromCart={removeFromCart}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}; 