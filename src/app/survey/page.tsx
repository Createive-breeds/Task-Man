import DashbaordLayout from "@/components/layout/DashboardLayout";
import SurveyClient from "./client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Survey Earning",
  description: "Make passive income taking simple survey",
};

export default function Survey() {
  return (
    <DashbaordLayout>
      <SurveyClient />
    </DashbaordLayout>
  );
}
