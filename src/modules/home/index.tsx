import Services from "./Services";
import TechnologyStacks from "./TechnologyStacks";
import Welcome from "./Welcome";

export default function HomeModule() {
  return (
    <div className="">
      <Welcome />
      <TechnologyStacks />
      <Services />
    </div>
  );
}
