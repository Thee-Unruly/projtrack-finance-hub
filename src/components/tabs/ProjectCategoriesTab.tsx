
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';

const ProjectCategoriesTab = () => {
  // Sample data - will be replaced with real data from Supabase
  const categories = [
    { 
      id: 1, 
      name: 'Web Development', 
      description: 'Website design and development projects',
      projectCount: 5,
      totalValue: 125000
    },
    { 
      id: 2, 
      name: 'Mobile Development', 
      description: 'Mobile application development for iOS and Android',
      projectCount: 3,
      totalValue: 95000
    },
    { 
      id: 3, 
      name: 'Data Services', 
      description: 'Data migration, analysis, and management services',
      projectCount: 2,
      totalValue: 45000
    },
    { 
      id: 4, 
      name: 'Infrastructure', 
      description: 'Cloud infrastructure and DevOps services',
      projectCount: 4,
      totalValue: 80000
    },
    { 
      id: 5, 
      name: 'Consulting', 
      description: 'Business and technical consulting services',
      projectCount: 6,
      totalValue: 150000
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Project Categories</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Category</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="category-name">Category Name</Label>
                  <Input id="category-name" placeholder="e.g., Web Development" />
                </div>
                <div>
                  <Label htmlFor="category-description">Description</Label>
                  <Input id="category-description" placeholder="Brief description of the category" />
                </div>
                <Button className="w-full">Add Category</Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Project Count</TableHead>
              <TableHead className="text-right">Total Value</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    {category.name}
                  </div>
                </TableCell>
                <TableCell className="text-gray-600">{category.description}</TableCell>
                <TableCell className="text-right">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {category.projectCount}
                  </span>
                </TableCell>
                <TableCell className="text-right font-medium">
                  ${category.totalValue.toLocaleString()}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="destructive" size="sm">Delete</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total Portfolio Value:</span>
            <span className="text-lg font-bold text-blue-600">
              ${categories.reduce((sum, category) => sum + category.totalValue, 0).toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { ProjectCategoriesTab };
