import Link from "next/link";
import { Button } from "@/components/ui/button";

export const EmptyCart = () => {
    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Tu Carrito</h1>
            <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
                <p className="mb-6 text-gray-600">Tu carrito está vacío</p>
                <Link href="/" className="w-full block">
                    <Button className="w-full">Continuar comprando</Button>
                </Link>
            </div>
        </div>
    );
}; 