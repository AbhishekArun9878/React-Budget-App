import { useBudgets } from "../context/BudgetsContext";
import BudgetCard from "./BudgetCard";

export default function TotalBudgetCard() {
  const { budgets, getBudgetExpenses } = useBudgets();
  const totalExpenses = budgets.flatMap(budget => getBudgetExpenses(budget.id));
  const amount = totalExpenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budget) => total + budget.max, 0);
  
  if (max === 0) return null;
  
  return <BudgetCard amount={amount} name="Total" gray max={max} hideButtons />;
}
