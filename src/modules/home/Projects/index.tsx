import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="prose lg:prose-lg max-w-none my-8 p-4">
      <div className="container mx-auto">
        <h4>Featured Projects</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 3, 4, 5]?.map((project, ind) => (
            <div
              key={ind}
              className="border rounded-xl overflow-hidden hover:scale-105 transition-all ease-in-ou"
            >
              <div className="relative">
                <Image
                  className="!m-0"
                  width={100}
                  height={100}
                  style={{ width: "100%", objectFit: "cover" }}
                  alt="E-commerce"
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div className="p-4">
                <h4 className="capitalize">E-commerce platform redesing</h4>
                <Link
                  className="bg-black rounded-3xl p-3 text-xs  text-white no-underline"
                  target="_blank"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};
export default Projects;
