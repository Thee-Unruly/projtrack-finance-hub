
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Search } from 'lucide-react';

const ClientsTab = () => {
  // Sample data - will be replaced with real data from Supabase
  const clients = [
    { 
      id: 1, 
      name: 'TechCorp Solutions', 
      contactPerson: 'Alice Johnson',
      email: 'alice@techcorp.com',
      phone: '+1 (555) 123-4567',
      associatedProjects: ['Website Redesign', 'Mobile App Development'],
      totalValue: 50000,
      status: 'Active'
    },
    { 
      id: 2, 
      name: 'Global Industries', 
      contactPerson: 'Bob Smith',
      email: 'bob@globalind.com',
      phone: '+1 (555) 987-6543',
      associatedProjects: ['Data Migration'],
      totalValue: 12000,
      status: 'Active'
    },
    { 
      id: 3, 
      name: 'StartupXYZ', 
      contactPerson: 'Carol Davis',
      email: 'carol@startupxyz.com',
      phone: '+1 (555) 456-7890',
      associatedProjects: ['Cloud Infrastructure'],
      totalValue: 15000,
      status: 'Prospect'
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Client Management</span>
          <div className="flex gap-3">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search clients..." 
                className="pl-10"
              />
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Client
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client Name</TableHead>
              <TableHead>Contact Person</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Associated Projects</TableHead>
              <TableHead className="text-right">Total Value</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>{client.contactPerson}</TableCell>
                <TableCell className="text-blue-600">{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {client.associatedProjects.map((project, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                        {project}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">
                  ${client.totalValue.toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge variant={client.status === 'Active' ? 'default' : 'secondary'}>
                    {client.status}
                  </Badge>
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

export { ClientsTab };
