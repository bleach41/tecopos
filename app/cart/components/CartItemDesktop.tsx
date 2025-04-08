import Image from "next/image";
import Link from "next/link";
import { Trash2, MinusCircle, PlusCircle } from "lucide-react";
import { CartItem } from "@/types/cartItem";

interface CartItemDesktopProps {
    item: CartItem;
    decreaseQuantity: (id: number) => void;
    increaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
}

export const CartItemDesktop = ({
    item,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
}: CartItemDesktopProps) => {
    return (
        <tr>
            <td className="py-4">
                <div className="flex items-center">
                    <div className="h-16 w-16 relative flex-shrink-0 mr-4">
                        <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title || "Producto"}
                            className="object-contain"
                            fill
                        />
                    </div>
                    <div className="max-w-xs">
                        <Link href={`/product/${item.id}`} className="hover:underline">
                            <div className="text-sm font-medium text-gray-900 truncate">
                                {item.title || "Producto"}
                            </div>
                        </Link>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-900">${item.price.toFixed(2)}</div>
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                        disabled={item.quantity <= 1}
                        aria-label="Disminuir cantidad"
                    >
                        <MinusCircle className="h-5 w-5" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                        onClick={() => increaseQuantity(item.id)}
                        className="text-gray-500 hover:text-gray-700"
                        aria-label="Aumentar cantidad"
                    >
                        <PlusCircle className="h-5 w-5" />
                    </button>
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                </div>
            </td>
            <td className="px-6 py-4 text-right">
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Eliminar producto"
                >
                    <Trash2 className="h-5 w-5" />
                </button>
            </td>
        </tr>
    );
}; 