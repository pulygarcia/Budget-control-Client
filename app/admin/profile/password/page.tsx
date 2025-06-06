import ChangePasswordForm from "@/app/src/components/profile/ChangePasswordForm";

export default async function ChangePasswordPage() {
  return (
    <>
      <h1 className="font-black text-4xl text-cyan-700 my-5">Change Password</h1>
      <p className="text-xl font-bold">Here you can modify your {''}
        <span className="text-cyan-600">password</span>
      </p>

      <ChangePasswordForm />
    </>
  )
}