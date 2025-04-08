import { Loader2 } from "lucide-react";

export const LoadingCart = () => {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-8">Tu Carrito</h1>
            <div className="flex justify-center items-center min-h-[200px]">
                <Loader2 className="h-12 w-12 animate-spin text-gray-500" />
            </div>
        </div>
    );
};
