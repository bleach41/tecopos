import { CartButton } from "@/components/Navbar/CartButton";
import { MobileMenuButton } from "@/components/Navbar/MobileMenuButton";

interface MobileControlsProps {
    totalItems: number;
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export default function MobileControls({ totalItems, isMenuOpen, toggleMenu }: MobileControlsProps) {
    return (
        <div className="md:hidden flex items-center">
            <CartButton totalItems={totalItems} className="mr-2" />
            <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
    );
} 