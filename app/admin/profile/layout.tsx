import ProfileTabs from "@/app/src/components/profile/ProfileTabs";
import ToastNotification from "@/app/src/components/ToastNotification";

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <ProfileTabs />
        {children}
        <ToastNotification />
    </>
  );
}