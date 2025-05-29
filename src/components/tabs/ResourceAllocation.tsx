
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus } from 'lucide-react';

const ResourceAllocation = () => {
  const [selectedProject, setSelectedProject] = useState('website-redesign');
  
  // Sample data - will be replaced with real data from Supabase
  const allocations = [
    { id: 1, employeeName: 'John Smith', role: 'Project Manager', hours: 40, costPerHour: 75, totalCost: 3000 },
    { id: 2, employeeName: 'Sarah Johnson', role: 'Frontend Developer', hours: 80, costPerHour: 65, totalCost: 5200 },
    { id: 3, employeeName: 'Mike Davis', role: 'Backend Developer', hours: 60, costPerHour: 70, totalCost: 4200 },
    { id: 4, employeeName: 'Lisa Chen', role: 'UI/UX Designer', hours: 50, costPerHour: 60, totalCost: 3000 },
  ];

  const projects = [
    { id: 'website-redesign', name: 'Website Redesign' },
    { id: 'mobile-app', name: 'Mobile App Development' },
    { id: 'data-migration', name: 'Data Migration' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>Resource Allocation</span>
            <Select value={selectedProject} onValueChange={setSelectedProject}>
              <SelectTrigger className="w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {projects.map(project => (
                  <SelectItem key={project.id} value={project.id}>
                    {project.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Allocate Resource
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Hours Allocated</TableHead>
              <TableHead className="text-right">Cost per Hour</TableHead>
              <TableHead className="text-right">Total Cost</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allocations.map((allocation) => (
              <TableRow key={allocation.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{allocation.employeeName}</TableCell>
                <TableCell>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    {allocation.role}
                  </span>
                </TableCell>
                <TableCell className="text-right">{allocation.hours}</TableCell>
                <TableCell className="text-right">${allocation.costPerHour}</TableCell>
                <TableCell className="text-right font-medium">${allocation.totalCost.toLocaleString()}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="destructive" size="sm">Remove</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total Resource Cost:</span>
            <span className="text-lg font-bold text-blue-600">
              ${allocations.reduce((sum, allocation) => sum + allocation.totalCost, 0).toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { ResourceAllocation };
