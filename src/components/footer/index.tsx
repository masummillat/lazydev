import { CONTACT_PATH } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import {
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialGithub,
} from "react-icons/ti";

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white prose lg:prose-xl max-w-none">
      <div className="container grid grid-cols-12 mx-auto p-4">
        <div className="col-span-6">
          <div className="text-[24px]">LazyDev</div>
          <h3 className="!m-0 text-white">LazyDev Digital Solutions.</h3>
          <br />
          <div className="flex gap-4 text-black">
            <Link
              target="_blank"
              className="bg-white rounded-full p-1"
              href="https://www.linkedin.com/in/ibna-masum-millat-talukder-16739a67/"
            >
              <TiSocialLinkedin className="" size={28} />
            </Link>
            <Link
              target="_blank"
              className="bg-white rounded-full p-1"
              href="https://www.linkedin.com/in/ibna-masum-millat-talukder-16739a67/"
            >
              <TiSocialGithub className="" size={28} />
            </Link>
            <Link
              target="_blank"
              className="bg-white rounded-full p-1"
              href="https://www.linkedin.com/in/ibna-masum-millat-talukder-16739a67/"
            >
              <TiSocialTwitter className="" size={28} />
            </Link>
          </div>
        </div>
        <div className="col-span-3 grid  gap-4">
          <Link className="text-white no-underline text-sm" href={CONTACT_PATH}>
            Contact
          </Link>
          <Link className="text-white no-underline text-sm" href={CONTACT_PATH}>
            Contact
          </Link>
          <Link className="text-white no-underline text-sm" href={CONTACT_PATH}>
            Contact
          </Link>
          <Link className="text-white no-underline text-sm" href={CONTACT_PATH}>
            Contact
          </Link>
        </div>
        <div className="col-span-3 grid  gap-4">
          <Link className="text-white no-underline text-sm" href={CONTACT_PATH}>
            Privacy
          </Link>
          <Link className="text-white no-underline text-sm" href={CONTACT_PATH}>
            Terms
          </Link>
          <Link className="text-white no-underline text-sm" href={CONTACT_PATH}>
            Copyright
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
