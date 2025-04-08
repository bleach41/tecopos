import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
    return (
        <Button variant="ghost" size="icon" onClick={onClick}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
    );
}; 