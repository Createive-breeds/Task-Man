import DashbaordLayout from "@/components/layout/DashboardLayout";
import NotificationsClient from "./client";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Notifications',
  description: 'Your Notifications on Taskman',
}

export default function Notification() {
  return (
    <DashbaordLayout>
      <NotificationsClient />
    </DashbaordLayout>
  );
}
