import Image from "next/image";

const BackgroundImage: React.FC = () => {
  return (
    <Image
      alt="Mountains"
      blurDataURL="/images/placeholder.svg"
      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      placeholder="blur"
      quality={100}
      fill
      style={{
        objectFit: "cover",
        zIndex: -1,
        objectPosition: "center",
      }}
    />
  );
};

export default BackgroundImage;
