import React from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import DashboardLayout from '../components/DashboardLayout';
import StatsCard from '../components/StatsCard';
import ChartSection from '../components/ChartSection';
import AlertsPreview from '../components/AlertsPreview';

// Mock Data
const healthTrendData = [
    { name: 'Spm', value: 30 },
    { name: '', value: 65 },
    { name: '', value: 35 },
    { name: '', value: 95 },
    { name: '', value: 55 },
    { name: '', value: 100 },
    { name: '', value: 65 },
    { name: 'Time', value: 85 }
];

const responseTimeData = [
    { name: 'Jan', value: 42 },
    { name: 'Feb', value: 51 },
    { name: 'Mar', value: 36 },
    { name: 'Apr', value: 60 },
    { name: 'May', value: 68 },
    { name: 'Jun', value: 43 }
];

const actionAlerts = [
    {
        message: "You haven't replied to Rahul in 4 days",
        actions: [
            { label: 'Send', primary: true },
            { label: 'Edit', primary: false }
        ]
    },
    {
        message: "Aditi mentioned a trip next week - no follow-up detected",
        actions: [
            { label: 'Send', primary: true },
            { label: 'Edit', primary: false }
        ]
    }
];

export default function Dashboard() {
    return (
        <DashboardLayout>
            <Sidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <TopNavbar />

                <div className="flex-1 overflow-y-auto px-10 pb-8 custom-scrollbar">
                    <h2 className="text-[20px] font-medium text-gray-800 mb-6 tracking-tight">Analytics</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <StatsCard
                            title="Healthy Relationships"
                            value="12"
                            type="success"
                        />
                        <StatsCard
                            title="At Risk"
                            value="5"
                            type="warning"
                        />
                        <StatsCard
                            title="Critical"
                            value="2"
                            type="critical"
                        />
                        <StatsCard
                            title="Cognitive Load Score"
                            value="27"
                            subtitle="Active conversations"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                                <ChartSection
                                    title="Relationship Health Trend"
                                    type="area"
                                    data={healthTrendData}
                                />
                                <ChartSection
                                    title="Response Time Trend"
                                    type="bar"
                                    data={responseTimeData}
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-1 flex flex-col">
                            <AlertsPreview alerts={actionAlerts} />
                        </div>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    );
}
