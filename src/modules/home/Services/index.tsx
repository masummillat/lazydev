import { services } from "@/constants";
import Image from "next/image";
import React from "react";

const Services: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="prose lg:prose-xl max-w-none">
        <h6 className="text-center">
          Explore a variety of services tailored to elevate your software
          development experience.
        </h6>

        <div className="relative w-[60%] mx-auto">
          <div className="absolute left-[-65px] top-[28%] -z-10 grid grid-cols-8 gap-1 rounded-full overflow-hidden">
            {Array.from(Array(64).keys()).map((a) => {
              return (
                <div
                  className="bg-black w-[3px] m-1 h-[3px] rounded-full"
                  key={a}
                />
              );
            })}
          </div>
          <Image
            style={{
              objectFit: "cover",
              width: "100%",
              height: "40vh",
              objectPosition: "center",
            }}
            className="z-10 rounded-full"
            width={100}
            height={100}
            alt="Tech"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="right-[-60px] top-[25%] w-36 h-36 rounded-lg bg-black text-white flex justify-center items-center absolute">
            Efficiency
          </div>
        </div>

        <h4>Our Services</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services?.map((service: string, ind) => (
            <div
              className="grid items-center gap-4"
              style={{ gridTemplateColumns: "auto 1fr auto " }}
              key={service}
            >
              <div>{ind + 1}</div>
              <div className="border-b-2 border-black" />
              <div>{service}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
