import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { checkoutSchema } from "@/app/checkout/schema/checkout.schema";

// Tipo derivado del esquema
type CheckoutFormValues = z.infer<typeof checkoutSchema>;

interface UseCheckoutFormProps {
  onSuccess: () => void;
}

export function useCheckoutForm({ onSuccess }: UseCheckoutFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Configurar React Hook Form con Zod
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      phone: "",
    },
  });

  const handleSubmit = hookFormSubmit((data) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess();
    }, 1500);
  });

  return {
    register,
    errors,
    isSubmitting,
    handleSubmit,
  };
}
