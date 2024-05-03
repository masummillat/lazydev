import Tag from "@/components/Tag";
import { technologies } from "@/constants/technologies";
import React from "react";
const TechnologyStacks: React.FC = () => {
  return (
    <div className="  container mx-auto">
      <div className="flex justify-center py-8 p-4 gap-4 flex-wrap border-b-2 border-black border-t-2">
        {technologies.map((tech) => (
          <Tag key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
};
export default TechnologyStacks;
