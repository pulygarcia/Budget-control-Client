import { cookies } from "next/headers";

export async function getBudgets() {
    const jwt = (await cookies()).get('AUTH_JWT')?.value;

    const res = await fetch(`${process.env.API_BASE_URL}/budgets`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      cache: 'no-store', // avoid caching in server-side fetch
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch budgets');
    }
  
    return res.json();
  }