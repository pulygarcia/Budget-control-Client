import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export async function getProfileData() {
    const jwt = (await cookies()).get('AUTH_JWT')?.value;

    const res = await fetch(`${process.env.API_BASE_URL}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      cache: 'no-store', // avoid caching in server-side fetch
    });
  
    if (!res.ok) {
        notFound()
    }
  
    return res.json();
}