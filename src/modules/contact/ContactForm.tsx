"use client";
import React from "react";
import { useForm } from "react-hook-form";

type Input = {
  subject: string;
  body: string;
};
const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>({});
  const onSubmit = (values: Input) => {
    var link =
      "mailto:masummillat@gmail.com" +
      "?subject=" +
      encodeURIComponent(values.subject) +
      "&body=" +
      encodeURIComponent(values.body);
    window.location.href = link;
  };
  return (
    <div className="prose md:prose-xl max-w-none mb-8 p-4">
      <div className="container mx-auto">
        <h4>Drop us a line</h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-4 w-full sm:w-1/2 mx-auto "
        >
          <input
            placeholder="Subject"
            type="text"
            {...register("subject")}
            className=" bg-gray-100 outline-none rounded-lg shadow p-2 placeholder:text-black placeholder:text-xs"
          />

          <textarea
            rows={4}
            placeholder="Message"
            {...register("body")}
            className=" bg-gray-100 outline-none rounded-lg shadow p-2 placeholder:text-black placeholder:text-xs"
          />
          <div className="text-center">
            <button
              disabled={!watch("body") || !watch("subject")}
              className="bg-black text-white text-sm p-2 px-8 rounded-3xl disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
