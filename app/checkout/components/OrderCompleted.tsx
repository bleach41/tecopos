import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export const OrderCompleted = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-md">
            <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold mb-4">¡Pedido completado!</h1>
                <p className="mb-6">
                    Gracias por tu compra. Hemos recibido tu pedido y te enviaremos un correo con los detalles.
                </p>
                <Button asChild>
                    <Link href="/">Volver a la tienda</Link>
                </Button>
            </div>
        </div>
    );
}; 