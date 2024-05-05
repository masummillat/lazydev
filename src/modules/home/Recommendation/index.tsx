import Image from "next/image";
import React from "react";

const Recommendations: React.FC = () => {
  return (
    <div className="prose md:prose-lg max-w-none my-4 p-4">
      <div className="container mx-auto">
        <h4>Recommendations</h4>
        <div className="border p-6 rounded-3xl ">
          <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {[1, 2, 3, 4]?.map((recom, ind) => (
              <div
                key={ind}
                className="border rounded-2xl p-4 hover:scale-105 transition-all ease-in-out"
              >
                <div className="flex gap-4">
                  <div className="relative">
                    <Image
                      alt="Masum Millat"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                      width={100}
                      height={100}
                      className="rounded-full !m-0"
                      src="https://images.unsplash.com/photo-1714328564923-d4826427c991?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                  </div>
                  <div>
                    <h5 className="!m-0">Masum Millat</h5>
                    <p className="!m-0">Software Engineer</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat ea adipisci optio exercitationem itaque quo dolores,
                  molestiae deleniti praesentium .
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-black text-xs text-white rounded-3xl p-2 px-8 ">
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
