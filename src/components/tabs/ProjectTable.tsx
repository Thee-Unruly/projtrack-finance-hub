
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const ProjectTable = () => {
  // Sample data - will be replaced with real data from Supabase
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      budget: 20000,
      costs: 15000,
      revenue: 18000,
      profit: 3000,
      status: 'Active',
      manager: 'John Smith',
      category: 'Web Development'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      budget: 30000,
      costs: 35000,
      revenue: 32000,
      profit: -3000,
      status: 'Active',
      manager: 'Sarah Johnson',
      category: 'Mobile Development'
    },
    {
      id: 3,
      name: 'Data Migration',
      budget: 10000,
      costs: 8000,
      revenue: 12000,
      profit: 4000,
      status: 'Completed',
      manager: 'Mike Davis',
      category: 'Data Services'
    },
    {
      id: 4,
      name: 'Cloud Infrastructure',
      budget: 15000,
      costs: 12000,
      revenue: 0,
      profit: -12000,
      status: 'Planning',
      manager: 'Lisa Chen',
      category: 'Infrastructure'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'default';
      case 'Completed': return 'secondary';
      case 'Planning': return 'outline';
      default: return 'default';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>All Projects</span>
          <div className="flex gap-3">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search projects..." 
                className="pl-10"
              />
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead className="text-right">Budget</TableHead>
              <TableHead className="text-right">Costs</TableHead>
              <TableHead className="text-right">Revenue</TableHead>
              <TableHead className="text-right">Profit</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell className="text-right">${project.budget.toLocaleString()}</TableCell>
                <TableCell className="text-right">${project.costs.toLocaleString()}</TableCell>
                <TableCell className="text-right">${project.revenue.toLocaleString()}</TableCell>
                <TableCell className={`text-right font-medium ${project.profit < 0 ? 'text-red-600' : 'text-green-600'}`}>
                  ${project.profit.toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </TableCell>
                <TableCell>{project.manager}</TableCell>
                <TableCell>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                    {project.category}
                  </span>
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

export { ProjectTable };
