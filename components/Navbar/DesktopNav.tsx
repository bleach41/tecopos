import Link from "next/link";
import { CartButton } from "@/components/Navbar/CartButton";

interface DesktopNavProps {
    totalItems: number;
}

export default function DesktopNav({ totalItems }: DesktopNavProps) {
    return (
        <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="font-medium text-gray-600 hover:text-gray-900">
                Inicio
            </Link>
            <CartButton totalItems={totalItems} />
        </nav>
    );
} 