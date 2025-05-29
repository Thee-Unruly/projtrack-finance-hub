
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';

const EmployeeTab = () => {
  // Sample data - will be replaced with real data from Supabase
  const employees = [
    { id: 'EMP001', name: 'John Smith', role: 'Project Manager', hourlyRate: 75, department: 'Management' },
    { id: 'EMP002', name: 'Sarah Johnson', role: 'Frontend Developer', hourlyRate: 65, department: 'Development' },
    { id: 'EMP003', name: 'Mike Davis', role: 'Backend Developer', hourlyRate: 70, department: 'Development' },
    { id: 'EMP004', name: 'Lisa Chen', role: 'UI/UX Designer', hourlyRate: 60, department: 'Design' },
    { id: 'EMP005', name: 'David Wilson', role: 'QA Engineer', hourlyRate: 55, department: 'Quality Assurance' },
    { id: 'EMP006', name: 'Emily Brown', role: 'Business Analyst', hourlyRate: 65, department: 'Analysis' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Employee Directory</span>
          <div className="flex gap-3">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search employees..." 
                className="pl-10"
              />
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Employee
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead className="text-right">Hourly Rate</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id} className="hover:bg-gray-50">
                <TableCell className="font-mono text-sm font-medium">
                  {employee.id}
                </TableCell>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {employee.role}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                    {employee.department}
                  </span>
                </TableCell>
                <TableCell className="text-right font-medium">
                  ${employee.hourlyRate}/hr
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View</Button>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export { EmployeeTab };
