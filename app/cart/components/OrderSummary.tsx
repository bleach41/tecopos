import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Trash2, ArrowRight } from "lucide-react";

interface OrderSummaryProps {
    total: number;
    onCheckout: () => void;
    onClearCart: () => void;
}

export const OrderSummary = ({ total, onCheckout, onClearCart }: OrderSummaryProps) => {
    return (
        <div className="xl:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                <h2 className="text-lg font-bold mb-4">Resumen del pedido</h2>
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Envío</span>
                        <span className="text-green-600">Gratis</span>
                    </div>
                    <div className="border-t pt-3">
                        <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-3">
                    <Button onClick={onCheckout} className="w-full" size="lg">
                        Finalizar compra <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Link href="/" className="block text-center">
                        <Button variant="outline" className="w-full" size="lg">
                            Continuar comprando
                        </Button>
                    </Link>
                    <Button
                        onClick={onClearCart}
                        variant="ghost"
                        className="w-full text-red-600 hover:text-red-800 hover:bg-red-50"
                        size="sm"
                    >
                        <Trash2 className="mr-2 h-4 w-4" /> Vaciar carrito
                    </Button>
                </div>
            </div>
        </div>
    );
}; 