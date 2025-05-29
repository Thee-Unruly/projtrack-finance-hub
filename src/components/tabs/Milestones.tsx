
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus } from 'lucide-react';

const Milestones = () => {
  const [selectedProject, setSelectedProject] = useState('website-redesign');
  
  // Sample data - will be replaced with real data from Supabase
  const milestones = [
    { id: 1, name: 'Design Approval', dueDate: '2024-02-15', status: 'Completed', revenue: 5000 },
    { id: 2, name: 'Frontend Development', dueDate: '2024-03-01', status: 'In Progress', revenue: 8000 },
    { id: 3, name: 'Backend Integration', dueDate: '2024-03-15', status: 'Pending', revenue: 7000 },
    { id: 4, name: 'Testing & QA', dueDate: '2024-03-30', status: 'Pending', revenue: 3000 },
    { id: 5, name: 'Final Delivery', dueDate: '2024-04-10', status: 'Pending', revenue: 5000 },
  ];

  const projects = [
    { id: 'website-redesign', name: 'Website Redesign' },
    { id: 'mobile-app', name: 'Mobile App Development' },
    { id: 'data-migration', name: 'Data Migration' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'default';
      case 'In Progress': return 'secondary';
      case 'Pending': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>Project Milestones</span>
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
            Add Milestone
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Milestone Name</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Revenue</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {milestones.map((milestone) => (
              <TableRow key={milestone.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{milestone.name}</TableCell>
                <TableCell>{milestone.dueDate}</TableCell>
                <TableCell>
                  <Badge variant={getStatusColor(milestone.status)}>
                    {milestone.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">
                  ${milestone.revenue.toLocaleString()}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">
                      {milestone.status === 'Completed' ? 'Completed' : 'Mark Complete'}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-sm text-gray-600">Total Revenue</div>
              <div className="text-lg font-bold text-blue-600">
                ${milestones.reduce((sum, milestone) => sum + milestone.revenue, 0).toLocaleString()}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Completed</div>
              <div className="text-lg font-bold text-green-600">
                ${milestones.filter(m => m.status === 'Completed').reduce((sum, milestone) => sum + milestone.revenue, 0).toLocaleString()}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Remaining</div>
              <div className="text-lg font-bold text-orange-600">
                ${milestones.filter(m => m.status !== 'Completed').reduce((sum, milestone) => sum + milestone.revenue, 0).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { Milestones };
