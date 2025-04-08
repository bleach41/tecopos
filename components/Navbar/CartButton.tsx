import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CartButtonProps {
    totalItems: number;
    className?: string;
}

export const CartButton = ({ totalItems, className = "" }: CartButtonProps) => {
    return (
        <Button asChild variant="outline" size="icon" title="Carrito de compras">
            <Link href="/cart" className={`relative ${className}`}>
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                        {totalItems}
                    </Badge>
                )}
            </Link>
        </Button>
    );
}; 