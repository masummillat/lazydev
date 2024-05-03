import Image from "next/image";
import React from "react";

const Welcome: React.FC = () => {
  return (
    <div className="prose md:prose-lg max-w-none my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 p-4  container  mx-auto">
        <div className="order-last sm:order-first">
          <h3>
            Weaving Interactive
            <br />
            Web Magic Through Code with <br />
            Elegance, Efficiency, and Innovation.
          </h3>
          <p className="!text-[12px]">
            Welcome to the dynamic world of JavaScript development! As a
            JavaScript developer, you&apos;ll wield the language&apos;s
            versatility to craft engaging web experiences. Dive into frameworks
            like React and Node.js, where your creativity merges seamlessly with
            functionality. Get ready to code your way into the heart of digital
            innovation!
          </p>
        </div>
        <div className="relative sm:order-last order-first ">
          <Image
            alt="Working"
            width={100}
            height={100}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="m-auto mix-blend-multiply  w-11/12 sm:w-1/2 hover:scale-105 transition-all ease-in-out delay-100  "
            src="https://img.freepik.com/free-vector/task-concept-illustration_114360-3578.jpg?w=1060&t=st=1714606054~exp=1714606654~hmac=baa68ed18f98cdd7cdc649d6edb9b4b45cbdadf4961d85329f950d90759767a8"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
