import BackgroundImage from "@/components/backgroundImage";
import Link from "next/link";
import React from "react";

const ContactMedium: React.FC = () => {
  return (
    <div className="prose lg:prose-xl max-w-none p-4">
      <div className="container mx-auto">
        <h4>Reach out to us</h4>
        <div className="flex gap-4 justify-center my-8 flex-wrap">
          <Link
            href=" mailto:masummillat@gmail.com"
            className="block p-2 px-4 rounded-3xl bg-black no-underline text-white text-sm"
          >
            masummillat@gmail.com
          </Link>
          <Link
            href="tel:+8801742699424"
            className="block p-2 px-4 rounded-3xl bg-black no-underline text-white text-sm"
          >
            +8801742699424
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactMedium;
