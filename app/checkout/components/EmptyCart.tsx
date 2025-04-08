import { Button } from "@/components/ui/button";
import Link from "next/link";

export const EmptyCart = () => {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
                <p className="mb-6">Tu carrito está vacío</p>
                <Link href="/">
                    <Button>Continuar comprando</Button>
                </Link>
            </div>
        </div>
    );
}; 