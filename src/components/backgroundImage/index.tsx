import Image from "next/image";

interface IBackgroundImage {
  src: string;
  alt?: string;
}
const BackgroundImage: React.FC<IBackgroundImage> = ({
  src,
  alt = "Background Image",
}) => {
  return (
    <Image
      alt={alt}
      blurDataURL="/images/placeholder.svg"
      src={src}
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
