import DashBoardClient from "./client";
import DashbaordLayout from "@/components/layout/DashboardLayout";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Dashboard | Overview',
  description: 'Taskman Dashboard overview',
}

export default function Dashbaord() {
  return (
   <DashbaordLayout>
    <DashBoardClient />
   </DashbaordLayout>
  );
}
