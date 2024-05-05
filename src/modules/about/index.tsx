import BackgroundImage from "@/components/backgroundImage";
import React from "react";

const AboutModule: React.FC = () => {
  return (
    <div>
      <div className="prose lg:prose-2xl text-white max-w-none relative p-4 py-14">
        <BackgroundImage
          alt="About"
          src="https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="container mx-auto">
          <h1 className="text-white">About.</h1>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            earum reprehenderit officia quia natus nobis fugit porro itaque qui
            tempore maiores dolores aperiam nisi, eius aut est unde odio
            placeat.
          </p>
        </div>
      </div>
      <div className="container mx-auto my-4">
        <h4>Experience</h4>
      </div>
    </div>
  );
};
export default AboutModule;
