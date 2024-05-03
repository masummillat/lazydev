import React from "react";

interface ITag {
  name: string;
}
const Tag: React.FC<ITag> = ({ name }) => (
  <div className="p-1 px-3 rounded-3xl bg-black text-white">{name}</div>
);

export default Tag;
