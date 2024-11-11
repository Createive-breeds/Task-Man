import { Work_Sans } from "next/font/google";
import styles from "./Components.module.css"; // Assuming this is where you put your CSS
// import Wave from "./icons/Wave";
import Link from "next/link";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function SideBar({
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
    <div className={`${styles.stylesBar} text-white`}>
      <div className={`${styles.content} ${workSans.className}`}>
        <h1>{heading}</h1>
        <p>{subHeading}</p>
        {showButton && <Link href={buttonLink}>{buttonText}</Link>}
      </div>

      {/* <Wave /> */}
    </div>
  );
}
