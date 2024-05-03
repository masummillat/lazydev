import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "@/components/progressbar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://masummillat.github.io/lazydev"),
  title: "LazyDev",
  description:
    "A skilled software developer proficient in Node.js, React.js, MongoDB, and MySQL, adeptly crafts robust web applications. They architect efficient backend solutions using Node.js, harnessing its asynchronous capabilities for optimal performance. Leveraging React.js, they design dynamic user interfaces, ensuring seamless interaction and intuitive experiences. Proficient in database management, they utilize MongoDB's flexibility and scalability, alongside MySQL's relational structure, to store and retrieve data effectively. Their expertise spans from conceptualization to deployment, meticulously refining code for scalability, security, and maintainability. With a deep understanding of these technologies, they continuously innovate, delivering high-quality solutions that meet modern demands.",
  openGraph: {
    images: "/opengraph-image.jpeg",
  },
  twitter: {
    images: "/twitter-image.jpeg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ gridTemplateRows: "auto 1fr auto" }}
        className={clsx(inter.className, "grid  h-screen")}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
