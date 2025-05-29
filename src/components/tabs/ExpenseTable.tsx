
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const ExpenseTable = () => {
  // Sample data - will be replaced with real data from Supabase
  const expenseData = [
    { project: 'Website Redesign', totalExpenses: 15000, budget: 20000, variance: 5000, status: 'on-track' },
    { project: 'Mobile App Development', totalExpenses: 35000, budget: 30000, variance: -5000, status: 'over-budget' },
    { project: 'Data Migration', totalExpenses: 8000, budget: 10000, variance: 2000, status: 'on-track' },
    { project: 'Cloud Infrastructure', totalExpenses: 12000, budget: 15000, variance: 3000, status: 'on-track' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Expense Summary by Project</span>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search projects..." 
              className="pl-10"
            />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead className="text-right">Total Expenses</TableHead>
              <TableHead className="text-right">Budget</TableHead>
              <TableHead className="text-right">Variance</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenseData.map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="font-medium">{row.project}</TableCell>
                <TableCell className="text-right">${row.totalExpenses.toLocaleString()}</TableCell>
                <TableCell className="text-right">${row.budget.toLocaleString()}</TableCell>
                <TableCell className={`text-right font-medium ${row.variance < 0 ? 'text-red-600' : 'text-green-600'}`}>
                  ${Math.abs(row.variance).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge variant={row.status === 'over-budget' ? 'destructive' : 'secondary'}>
                    {row.status === 'over-budget' ? 'Over Budget' : 'On Track'}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export { ExpenseTable };
