import HomeModule from "@/modules/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LazyDev",
  description:
    "A skilled software developer proficient in Node.js, React.js, MongoDB, and MySQL, adeptly crafts robust web applications. They architect efficient backend solutions using Node.js, harnessing its asynchronous capabilities for optimal performance. Leveraging React.js, they design dynamic user interfaces, ensuring seamless interaction and intuitive experiences. Proficient in database management, they utilize MongoDB's flexibility and scalability, alongside MySQL's relational structure, to store and retrieve data effectively. Their expertise spans from conceptualization to deployment, meticulously refining code for scalability, security, and maintainability. With a deep understanding of these technologies, they continuously innovate, delivering high-quality solutions that meet modern demands.",
};
export default function Home() {
  return (
    <main className="">
      <HomeModule />
    </main>
  );
}
