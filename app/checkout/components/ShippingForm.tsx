import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface ShippingFormProps {
    register: UseFormRegister<any>;
    errors: FieldErrors;
    isSubmitting: boolean;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const ShippingForm = ({
    register,
    errors,
    isSubmitting,
    onSubmit,
}: ShippingFormProps) => {
    return (
        <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-6">Información de envío</h2>
                <form onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <Label htmlFor="name">Nombre completo</Label>
                            <Input
                                id="name"
                                {...register("name")}
                                className={errors.name ? "border-red-500" : ""}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
                            )}
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register("email")}
                                className={errors.email ? "border-red-500" : ""}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="address">Dirección</Label>
                        <Input
                            id="address"
                            {...register("address")}
                            className={errors.address ? "border-red-500" : ""}
                        />
                        {errors.address && (
                            <p className="text-red-500 text-sm mt-1">{errors.address.message as string}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div>
                            <Label htmlFor="city">Ciudad</Label>
                            <Input
                                id="city"
                                {...register("city")}
                                className={errors.city ? "border-red-500" : ""}
                            />
                            {errors.city && (
                                <p className="text-red-500 text-sm mt-1">{errors.city.message as string}</p>
                            )}
                        </div>
                        <div>
                            <Label htmlFor="postalCode">Código postal</Label>
                            <Input
                                id="postalCode"
                                {...register("postalCode")}
                                className={errors.postalCode ? "border-red-500" : ""}
                            />
                            {errors.postalCode && (
                                <p className="text-red-500 text-sm mt-1">{errors.postalCode.message as string}</p>
                            )}
                        </div>
                        <div>
                            <Label htmlFor="phone">Teléfono</Label>
                            <Input
                                id="phone"
                                {...register("phone")}
                                className={errors.phone ? "border-red-500" : ""}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>
                            )}
                        </div>
                    </div>

                    <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                        {isSubmitting ? "Procesando..." : "Confirmar pedido"}
                    </Button>
                </form>
            </div>
        </div>
    );
}; 