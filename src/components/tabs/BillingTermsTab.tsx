
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Plus } from 'lucide-react';

const BillingTermsTab = () => {
  // Sample data - will be replaced with real data from Supabase
  const billingTerms = [
    { 
      id: 1, 
      name: 'Net 30', 
      description: 'Payment due within 30 days of invoice',
      daysToPayment: 30,
      projectCount: 8,
      isDefault: true
    },
    { 
      id: 2, 
      name: 'Net 60', 
      description: 'Payment due within 60 days of invoice',
      daysToPayment: 60,
      projectCount: 3,
      isDefault: false
    },
    { 
      id: 3, 
      name: 'Milestone-based', 
      description: 'Payment tied to milestone completion',
      daysToPayment: null,
      projectCount: 5,
      isDefault: false
    },
    { 
      id: 4, 
      name: 'Immediate', 
      description: 'Payment due upon invoice receipt',
      daysToPayment: 0,
      projectCount: 2,
      isDefault: false
    },
    { 
      id: 5, 
      name: 'Net 15', 
      description: 'Payment due within 15 days of invoice',
      daysToPayment: 15,
      projectCount: 4,
      isDefault: false
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Billing Terms</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Billing Term
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Billing Term</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="term-name">Term Name</Label>
                  <Input id="term-name" placeholder="e.g., Net 30" />
                </div>
                <div>
                  <Label htmlFor="term-description">Description</Label>
                  <Input id="term-description" placeholder="Description of payment terms" />
                </div>
                <div>
                  <Label htmlFor="days-payment">Days to Payment (optional)</Label>
                  <Input id="days-payment" type="number" placeholder="e.g., 30" />
                </div>
                <Button className="w-full">Add Billing Term</Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Term Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Days to Payment</TableHead>
              <TableHead className="text-right">Projects Using</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {billingTerms.map((term) => (
              <TableRow key={term.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {term.name}
                    {term.isDefault && (
                      <Badge variant="secondary" className="text-xs">Default</Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-gray-600">{term.description}</TableCell>
                <TableCell className="text-right">
                  {term.daysToPayment !== null ? (
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {term.daysToPayment} days
                    </span>
                  ) : (
                    <span className="text-gray-500">Variable</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {term.projectCount}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant={term.projectCount > 0 ? 'default' : 'outline'}>
                    {term.projectCount > 0 ? 'Active' : 'Unused'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button 
                      variant={term.isDefault ? 'outline' : 'secondary'} 
                      size="sm"
                      disabled={term.isDefault}
                    >
                      {term.isDefault ? 'Default' : 'Set Default'}
                    </Button>
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

export { BillingTermsTab };
