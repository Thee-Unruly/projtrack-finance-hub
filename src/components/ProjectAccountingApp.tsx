
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExpenseTable } from './tabs/ExpenseTable';
import { ExpensesTab } from './tabs/ExpensesTab';
import { ProjectTable } from './tabs/ProjectTable';
import { ResourceAllocation } from './tabs/ResourceAllocation';
import { Milestones } from './tabs/Milestones';
import { EmployeeTab } from './tabs/EmployeeTab';
import { ClientsTab } from './tabs/ClientsTab';
import { ProjectManagerTab } from './tabs/ProjectManagerTab';
import { ProjectCategoriesTab } from './tabs/ProjectCategoriesTab';
import { BillingTermsTab } from './tabs/BillingTermsTab';

const ProjectAccountingApp = () => {
  const [activeTab, setActiveTab] = useState('exp-table');

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Project Accounting Management
            </CardTitle>
            <p className="text-gray-600">
              Track and manage financial performance across all your projects
            </p>
          </CardHeader>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-5 lg:grid-cols-10 gap-1 h-auto p-2 bg-white rounded-lg shadow-sm mb-6">
            <TabsTrigger 
              value="exp-table" 
              className="text-xs px-2 py-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Exp Table
            </TabsTrigger>
            <TabsTrigger 
              value="expenses" 
              className="text-xs px-2 py-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Expenses
            </TabsTrigger>
            <TabsTrigger 
              value="project-table" 
              className="text-xs px-2 py-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Project Table
            </TabsTrigger>
            <TabsTrigger 
              value="resource-allocation" 
              className="text-xs px-2 py-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Resource Allocation
            </TabsTrigger>
            <TabsTrigger 
              value="milestones" 
              className="text-xs px-2 py-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Milestones
            </TabsTrigger>
            <TabsTrigger 
              value="employee-id" 
              className="text-xs px-2 py-3 data-[state=active]:bg-red-500 data-[state=active]:text-white"
            >
              Employee ID
            </TabsTrigger>
            <TabsTrigger 
              value="clients" 
              className="text-xs px-2 py-3 data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              Clients
            </TabsTrigger>
            <TabsTrigger 
              value="project-manager" 
              className="text-xs px-2 py-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Project Manager
            </TabsTrigger>
            <TabsTrigger 
              value="project-categories" 
              className="text-xs px-2 py-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Project Categories
            </TabsTrigger>
            <TabsTrigger 
              value="billing-terms" 
              className="text-xs px-2 py-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Billing Terms
            </TabsTrigger>
          </TabsList>

          <TabsContent value="exp-table" className="mt-0">
            <ExpenseTable />
          </TabsContent>

          <TabsContent value="expenses" className="mt-0">
            <ExpensesTab />
          </TabsContent>

          <TabsContent value="project-table" className="mt-0">
            <ProjectTable />
          </TabsContent>

          <TabsContent value="resource-allocation" className="mt-0">
            <ResourceAllocation />
          </TabsContent>

          <TabsContent value="milestones" className="mt-0">
            <Milestones />
          </TabsContent>

          <TabsContent value="employee-id" className="mt-0">
            <EmployeeTab />
          </TabsContent>

          <TabsContent value="clients" className="mt-0">
            <ClientsTab />
          </TabsContent>

          <TabsContent value="project-manager" className="mt-0">
            <ProjectManagerTab />
          </TabsContent>

          <TabsContent value="project-categories" className="mt-0">
            <ProjectCategoriesTab />
          </TabsContent>

          <TabsContent value="billing-terms" className="mt-0">
            <BillingTermsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectAccountingApp;
