import Link from "next/link";

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
    if (!isOpen) return null;

    return (
        <div className="md:hidden bg-white border-b">
            <div className="container mx-auto px-4 py-2">
                <nav className="flex flex-col space-y-3">
                    <Link
                        href="/"
                        onClick={onClose}
                        className="font-medium text-gray-600 hover:text-gray-900 py-2"
                    >
                        Inicio
                    </Link>
                </nav>
            </div>
        </div>
    );
} 