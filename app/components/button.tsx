import Image, { StaticImageData } from "next/image";
export default function Button({
  children,
  link,
  imgPath,
}: Readonly<{
  children: React.ReactNode;
  link: string;
  imgPath: StaticImageData;
}>) {
  const openLink = () => {
    window.open(link, "_newtab");
  };

  return (
    <button onClick={openLink} className="customButton">
      <Image
        style={{
          float: "left",
          display: "inline-block",
          position: "relative",
          marginLeft: "10px"

        }}
        src={imgPath}
        alt="Imagenes socials"
        className="socials-images mt-1 mb-1"
      />
      <span
        style={{
          display: "inline-block",
          marginTop: "9px",
          marginLeft: "-50px"
        }}
      >
        {children}
      </span>
    </button>
  );
}
