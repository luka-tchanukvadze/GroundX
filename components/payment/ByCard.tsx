import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import paymentSchema from "../schema/paymentSchema";

function ByCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(paymentSchema),
  });

  const onSubmit = (data) => {
    console.log("submitted", data);
  };
  const handleCardNumberChange = (event) => {
    // Remove any non-numeric characters from the input
    const rawValue = event.target.value.replace(/\D/g, "");

    // Add hyphens after every 4 digits
    let formattedValue = "";
    for (let i = 0; i < rawValue.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += "-";
      }
      formattedValue += rawValue[i];
    }

    // Update the form value
    setValue("cardNumber", formattedValue);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-4">
        <label>Card Number</label>
        <input
          type="text"
          {...register("cardNumber")}
          placeholder="Enter card number"
          className={`bg-gray-800 ${errors.cardNumber && "border-red-500"}`}
          // onChange={handleCardNumberChange}
        />
        {errors.cardNumber && (
          <span className="text-red-500">{errors.cardNumber.message}</span>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label>Expiration</label>
        <input
          type="text"
          {...register("expiration")}
          placeholder="Enter expiration"
          className={`bg-gray-800 ${errors.expiration && "border-red-500"}`}
        />
        {errors.expiration && (
          <span className="text-red-500">{errors.expiration.message}</span>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label>CVC</label>
        <input
          type="text"
          {...register("cvc")}
          placeholder="Enter CVC"
          className={`bg-gray-800 ${errors.cvc && "border-red-500"}`}
        />
        {errors.cvc && (
          <span className="text-red-500">{errors.cvc.message}</span>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label>ZIP</label>
        <input
          type="text"
          {...register("zip")}
          placeholder="Enter ZIP"
          className={`bg-gray-800 ${errors.zip && "border-red-500"}`}
        />
        {errors.zip && (
          <span className="text-red-500">{errors.zip.message}</span>
        )}
      </div>

      <button type="submit" className="py-2 px-4 border-2">
        Pay
      </button>
    </form>
  );
}

export default ByCard;
