import Image from "next/image";
import { CartItem as CartItemType } from "@/types/cartItem";

interface CartItemProps {
    item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
    return (
        <div className="py-3 flex items-center">
            <div className="h-12 w-12 relative flex-shrink-0 mr-3">
                <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title || "Producto del carrito"}
                    className="object-contain"
                    fill
                />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm truncate">{item.title}</p>
                <p className="text-xs text-gray-500">Cantidad: {item.quantity}</p>
            </div>
            <div className="text-sm font-medium ml-4">${(item.price * item.quantity).toFixed(2)}</div>
        </div>
    );
}; 