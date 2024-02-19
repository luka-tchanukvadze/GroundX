import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import paymentSchema from "../schema/paymentSchema";
import { useRouter } from "next/navigation";

function ByCard() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(paymentSchema),
  });

  const onSubmit = () => {
    // console.log("submitted", data);
    alert("thank you");
    router.push("/");
  };
  // const handleCardNumberChange = (event) => {
  //   // Remove any non-numeric characters from the input
  //   const rawValue = event.target.value.replace(/\D/g, "");

  //   // Add hyphens after every 4 digits
  //   let formattedValue = "";
  //   for (let i = 0; i < rawValue.length; i++) {
  //     if (i > 0 && i % 4 === 0) {
  //       formattedValue += "-";
  //     }
  //     formattedValue += rawValue[i];
  //   }

  //   // Update the form value
  //   setValue("cardNumber", formattedValue);
  // };
  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col mb-4 w-full">
        <label>Card Number</label>
        <input
          type="text"
          {...register("cardNumber")}
          placeholder="Ex: 4242-4242-4242-4242"
          className={`dark:text-black dark:bg-gray-300 dark:border-gray-800 dark:placeholder-gray-700 dark:focus:border-blue-800 text-xl p-2 border-2 rounded-lg outline-none focus:border-blue-100  ${
            errors.cardNumber && "border-red-500 "
          }`}
          // onChange={handleCardNumberChange}
        />
        {errors.cardNumber && (
          <span className=" text-red-500 text-sm">
            {errors.cardNumber.message}
          </span>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label>Expiration</label>
        <input
          type="text"
          {...register("expiration")}
          placeholder="Ex: 12/12"
          className={`dark:text-black dark:bg-gray-300 dark:border-gray-800 dark:placeholder-gray-700 dark:focus:border-blue-800 text-xl p-2 border-2 rounded-lg outline-none focus:border-blue-100  ${
            errors.cardNumber && "border-red-500 "
          }`}
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
          placeholder="Ex: 123"
          className={`dark:text-black dark:bg-gray-300 dark:border-gray-800 dark:placeholder-gray-700 dark:focus:border-blue-800    text-xl p-2 border-2 rounded-lg outline-none focus:border-blue-100  ${
            errors.cardNumber && "border-red-500 "
          }`}
        />
        {errors.cvc && (
          <span className="text-red-500">{errors.cvc.message}</span>
        )}
      </div>

      <div className="flex flex-col mb-4 ">
        <label>ZIP</label>
        <input
          type="text"
          {...register("zip")}
          placeholder="Ex: 14141"
          className={`dark:text-black dark:bg-gray-300 dark:border-gray-800 dark:placeholder-gray-700 dark:focus:border-blue-800 text-xl p-2 border-2 rounded-lg outline-none focus:border-blue-100  ${
            errors.cardNumber && "border-red-500 "
          }`}
        />
        {errors.zip && (
          <span className="text-red-500">{errors.zip.message}</span>
        )}
      </div>

      <button type="submit" className="py-2 px-4 mt-10 border-2 rounded-md">
        Pay
      </button>
    </form>
  );
}

export default ByCard;
