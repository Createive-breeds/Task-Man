import { Work_Sans } from "next/font/google";
import styles from "./Components.module.css"; // Assuming this is where you put your CSS
import Wave from "./icons/Wave";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function SideBar({
  showButton,
  buttonText,
  subHeading,
  heading,
}: {
  showButton: boolean;
  buttonText: string;
  subHeading: string;
  heading: string;
}) {
  return (
    <div className={styles.stylesBar}>
      <div className={`${styles.content} ${workSans.className}`}>
        <h1>{heading}</h1>
        <p>{subHeading}</p>
        {showButton && <button>{buttonText}</button>}
      </div>

      {/* <Wave /> */}
    </div>
  );
}
