export interface Transaction {
  id: number;
  description: string;
  amount: number;
  due_date: string;
  is_recurring: boolean;
  total_installments: number;
  category?: string;
  installments?: {
    id: number;
    transaction_id: number;
    installment_number: number;
    installment_amount: string;
    due_date: string;
    paid: boolean;
  }[];
}
