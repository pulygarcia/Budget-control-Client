'use server'

import { ParamValue } from "next/dist/server/request/params";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

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

export async function getBudgetById(id:string) {
    const jwt = (await cookies()).get('AUTH_JWT')?.value;

    const res = await fetch(`${process.env.API_BASE_URL}/budgets/${id}`, {
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

export async function deleteBudget(id:string) {
    const jwt = (await cookies()).get('AUTH_JWT')?.value;

    const res = await fetch(`${process.env.API_BASE_URL}/budgets/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      cache: 'no-store', // avoid caching in server-side fetch
    });
  
    if (!res.ok) {
      throw new Error('Failed to delete budget');
    }
  
    return res.json();
  }