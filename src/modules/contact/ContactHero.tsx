import BackgroundImage from "@/components/backgroundImage";
import React from "react";

const ContactHero: React.FC = () => {
  return (
    <div className="prose lg:prose-xl text-white max-w-none relative p-4 py-14 ">
      <BackgroundImage
        alt="Contact"
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="container mx-auto">
        <h1 className="text-white !mt-8">
          Let&apos;s meet <br /> for code
        </h1>
        <p className="w-full sm:w-2/4">
          Connect with us anytime, anywhere – our team is ready to code! Need
          assistance or just want to discuss tech? <br /> Reach out and
          let&apos;s create software wonders together.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
