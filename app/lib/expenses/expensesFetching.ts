'use server'

import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export async function getExpenseById(budgetId:string, expenseId:string) {
    const jwt = (await cookies()).get('AUTH_JWT')?.value;

    const res = await fetch(`${process.env.API_BASE_URL}/budgets/${budgetId}/expenses/${expenseId}`, {
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

export async function deleteExpense(budgetId:string, expenseId:string) {
    const jwt = (await cookies()).get('AUTH_JWT')?.value;

    const res = await fetch(`${process.env.API_BASE_URL}/budgets/${budgetId}/expenses/${expenseId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      cache: 'no-store',
    });
    
    if (!res.ok) {
      throw new Error('Failed to delete expense');
    }
    
    return res.json();
  }
