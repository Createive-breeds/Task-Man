import { DashboardIcon } from "@/components/icons/DashboardIcon";
import { NotificationIcon } from "@/components/icons/NotificationIcon";
import { SurveyIcon } from "@/components/icons/SurveyIcon";
import { WithdrawIcon } from "@/components/icons/WithdrawIcon";


export const MESSAGES = {
    "USER_IS_REQUIRED" : {
        message: "Enter Your Informations!"
    },
    "USER_ALREADY_EXISTS": {
       message: "Email has been registered already!"
    },
    "REGISTRATION_WAS_SUCCESSFUL": {
        message: "Registeration Was Successful!"
     },
     "INVALID_USERNAME_OR_PASSWORD": {
        message: "Invalid Username or password"
     },
     "LOGIN_WAS_SUCCESSFUL":{
        message: "Authenticated Successfully"
     },
     "LOGOUT_SUCCESSFUL":{
        message: "Logout Successful"
     }
}

export const PAGES = {
    SIGN_UP: "/signup",
    SIGN_IN: "/signin",
    DASHBOARD: "/dashboard",
    SURVEY: "/survey",
}

export const SideBarItems = [
   {
     label: "Dashbaord",
     path: PAGES.DASHBOARD,
     icon: <DashboardIcon path={PAGES.DASHBOARD} />,
   },
   {
     label: "Survey",
     path: PAGES.SURVEY,
     icon: <SurveyIcon path="TODO" />,
   },
   {
     label: "Withdrawal",
     path: "404",
     icon: <WithdrawIcon path="TODO" />,
   },
   {
     label: "Notification",
     path: "404",
     icon: <NotificationIcon path="TODO" />,
   },
 ];