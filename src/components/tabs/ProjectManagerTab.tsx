
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const ProjectManagerTab = () => {
  // Sample data - will be replaced with real data from Supabase
  const projectAssignments = [
    { 
      projectId: 1, 
      projectName: 'Website Redesign', 
      currentManager: 'John Smith',
      managerId: 'EMP001',
      status: 'Active',
      assignedDate: '2024-01-01'
    },
    { 
      projectId: 2, 
      projectName: 'Mobile App Development', 
      currentManager: 'Sarah Johnson',
      managerId: 'EMP002',
      status: 'Active',
      assignedDate: '2024-01-15'
    },
    { 
      projectId: 3, 
      projectName: 'Data Migration', 
      currentManager: 'Mike Davis',
      managerId: 'EMP003',
      status: 'Completed',
      assignedDate: '2023-12-01'
    },
    { 
      projectId: 4, 
      projectName: 'Cloud Infrastructure', 
      currentManager: 'Unassigned',
      managerId: null,
      status: 'Planning',
      assignedDate: null
    },
  ];

  const availableManagers = [
    { id: 'EMP001', name: 'John Smith' },
    { id: 'EMP002', name: 'Sarah Johnson' },
    { id: 'EMP003', name: 'Mike Davis' },
    { id: 'EMP004', name: 'Lisa Chen' },
    { id: 'EMP006', name: 'Emily Brown' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Manager Assignments</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead>Current Manager</TableHead>
              <TableHead>Manager ID</TableHead>
              <TableHead>Assigned Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projectAssignments.map((assignment) => (
              <TableRow key={assignment.projectId} className="hover:bg-gray-50">
                <TableCell className="font-medium">{assignment.projectName}</TableCell>
                <TableCell>
                  {assignment.currentManager === 'Unassigned' ? (
                    <span className="text-gray-500 italic">Unassigned</span>
                  ) : (
                    assignment.currentManager
                  )}
                </TableCell>
                <TableCell>
                  {assignment.managerId ? (
                    <span className="font-mono text-sm">{assignment.managerId}</span>
                  ) : (
                    <span className="text-gray-500">-</span>
                  )}
                </TableCell>
                <TableCell>
                  {assignment.assignedDate || <span className="text-gray-500">-</span>}
                </TableCell>
                <TableCell>
                  <Badge variant={
                    assignment.status === 'Active' ? 'default' : 
                    assignment.status === 'Completed' ? 'secondary' : 'outline'
                  }>
                    {assignment.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2 items-center">
                    <Select defaultValue={assignment.managerId || ""}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Assign manager" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableManagers.map(manager => (
                          <SelectItem key={manager.id} value={manager.id}>
                            {manager.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">Update</Button>
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

export { ProjectManagerTab };
