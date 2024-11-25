import { altFont, headingFont, themeData } from "@/lib/constants";
import styles from "./Components.module.css"; // Assuming this is where you put your CSS
// import Wave from "./icons/Wave";
import Link from "next/link";

export default function SideBoard({
  showButton,
  buttonText,
  subHeading,
  heading,
  buttonLink,
}: {
  showButton: boolean;
  buttonText: string;
  subHeading: string;
  heading: string;
  buttonLink: string;
}) {
  return (
    <div
      className={`${styles.stylesBar} ${altFont.className} text-white`}
      style={{ background: themeData.colors.primary }}
    >
      <div className={`${styles.content}`}>
        <h1 className={`${headingFont.className}`}>{heading}</h1>
        <p>{subHeading}</p>
        {showButton && <Link href={buttonLink}>{buttonText}</Link>}
      </div>

      {/* <Wave /> */}
    </div>
  );
}
