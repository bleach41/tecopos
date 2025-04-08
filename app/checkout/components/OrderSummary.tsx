import { CartItem as CartItemType } from "@/types/cartItem";
import { CartItem } from "./CartItem";

interface OrderSummaryProps {
    cart: CartItemType[];
    getTotal: () => number;
}

export const OrderSummary = ({ cart, getTotal }: OrderSummaryProps) => {
    return (
        <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-bold mb-4">Resumen del pedido</h2>

                <div className="divide-y">
                    {cart.map((item, index) => (
                        <CartItem key={`${item.id}-${index}`} item={item} />
                    ))}
                </div>

                <div className="border-t mt-4 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${getTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>Envío</span>
                        <span>Gratis</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>${getTotal().toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 