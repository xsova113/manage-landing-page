import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      subs: "",
    },
  });

  const onSubmit = (data) => {
    toast.success("Subscribed successful!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3">
      <div className="flex flex-col">
        <input
          id="subs"
          {...register("subs", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please insert a valid email",
            },
          })}
          placeholder="Updates in your inbox..."
          className={`rounded-full border px-7 py-3 text-[#F25F3A] hover:border-[#F25F3A] transition outline-none focus:border-[#F25F3A] ${
            errors.subs && "!border-red-500"
          }`}
        />
        {errors.subs && <i className="text-red-500 text-sm ml-7 mt-1">{errors.subs.message}</i>}
      </div>

      <button className="py-3 px-7 h-[53px] rounded-full bg-[#F25F3A] hover:bg-[rgb(235,123,95)] transition">
        Go
      </button>
      <Toaster />
    </form>
  );
};

export default SearchBar;
