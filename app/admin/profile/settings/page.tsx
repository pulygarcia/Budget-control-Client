import { getProfileData } from "@/app/lib/profile/profileFetching";
import ProfileForm from "@/app/src/components/profile/ProfileForm";

export default async function EditProfilePage() {
    const profileData = await getProfileData();

  return (
    <>
        <h1 className="font-black text-4xl text-cyan-700 my-5">Modify profile</h1>
        <p className="text-xl font-bold">Here your can change data from your {''}
            <span className="text-cyan-600">profile</span>
        </p>

        <ProfileForm profileData={profileData} />
    </>
  )
}