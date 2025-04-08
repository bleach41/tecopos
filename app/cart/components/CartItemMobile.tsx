import Image from "next/image";
import Link from "next/link";
import { Trash2, MinusCircle, PlusCircle } from "lucide-react";
import { CartItem } from "@/types/cartItem";

interface CartItemMobileProps {
    item: CartItem;
    decreaseQuantity: (id: number) => void;
    increaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
}

export const CartItemMobile = ({
    item,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
}: CartItemMobileProps) => {
    return (
        <div className="p-4 border-b last:border-b-0">
            <div className="flex gap-4">
                <div className="h-24 w-24 relative flex-shrink-0">
                    <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title || "Producto"}
                        className="object-contain"
                        fill
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.id}`} className="hover:underline">
                        <h3 className="text-base font-medium text-gray-900 truncate mb-1">
                            {item.title || "Producto"}
                        </h3>
                    </Link>
                    <div className="text-sm text-gray-500 mb-3">${item.price.toFixed(2)}</div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                                disabled={item.quantity <= 1}
                                aria-label="Disminuir cantidad"
                            >
                                <MinusCircle className="h-6 w-6" />
                            </button>
                            <span className="w-8 text-center text-lg">{item.quantity}</span>
                            <button
                                onClick={() => increaseQuantity(item.id)}
                                className="text-gray-500 hover:text-gray-700"
                                aria-label="Aumentar cantidad"
                            >
                                <PlusCircle className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="font-medium text-lg">
                                ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700"
                                aria-label="Eliminar producto"
                            >
                                <Trash2 className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 