import { DashboardIcon } from "@/components/icons/DashboardIcon";
import { NotificationIcon } from "@/components/icons/NotificationIcon";
import { SurveyIcon } from "@/components/icons/SurveyIcon";
import { WithdrawIcon } from "@/components/icons/WithdrawIcon";
import { Lato, Pacifico, Work_Sans } from "next/font/google";

export const MESSAGES = {
  USER_IS_REQUIRED: {
    message: "Enter Your Informations!",
  },
  USER_ALREADY_EXISTS: {
    message: "Email has been registered already!",
  },
  REGISTRATION_WAS_SUCCESSFUL: {
    message: "Registeration Was Successful!",
  },
  INVALID_USERNAME_OR_PASSWORD: {
    message: "Invalid Username or password",
  },
  LOGIN_WAS_SUCCESSFUL: {
    message: "Authenticated Successfully",
  },
  LOGOUT_SUCCESSFUL: {
    message: "Logout Successful",
  },
};

export const PAGES = {
  SIGN_UP: "/signup",
  SIGN_IN: "/signin",
  DASHBOARD: "/dashboard",
  SURVEY: "/survey",
  WITHDRAWAL: "/withdrawal",
  NOTIFICATION: "/notification",
};

export const SideBarItems = [
  {
    label: "Dashboard",
    path: PAGES.DASHBOARD,
    icon: <DashboardIcon path={PAGES.DASHBOARD} />,
  },
  {
    label: "Survey",
    path: PAGES.SURVEY,
    icon: <SurveyIcon path={PAGES.SURVEY} />,
  },
  {
    label: "Withdrawal",
    path: PAGES.WITHDRAWAL,
    icon: <WithdrawIcon path={PAGES.WITHDRAWAL} />,
  },
  {
    label: "Notification",
    path: PAGES.NOTIFICATION,
    icon: <NotificationIcon path={PAGES.NOTIFICATION} />,
  },
];

export const themeData = {
  colors: {
    primary: "#22c55e ",
  },
};

export const defaultFont = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const altFont = Work_Sans({ subsets: ["latin"] });

export const headingFont = Pacifico({ weight: ['400'], subsets: ["latin"]})
