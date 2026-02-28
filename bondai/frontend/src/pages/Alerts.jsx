import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import AlertFilter from '../components/AlertFilter';
import AlertCard from '../components/AlertCard';

const alertsData = [
    {
        id: 1,
        icon: 'chat-clock',
        title: 'Inactivity Alert.',
        description: 'No interaction with <strong>Aditi</strong> (Family)<br/>for 7 days.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
        person: 'Aditi',
        riskLevel: 'High Risk',
        primaryAction: 'Send',
        showColHeaders: true // Only true for the first item to show headers
    },
    {
        id: 2,
        icon: 'heart-rate',
        title: 'Emotional Drift Alert.',
        description: 'Emotional warmth decreased by 23% in recent<br/>messages with <strong>Sarah</strong> (Friend).',
        riskLevel: 'Medium Risk',
        primaryAction: 'Send',
    },
    {
        id: 3,
        icon: 'calendar',
        title: 'Missed Plan Alert.',
        description: 'A plan was mentioned with <strong>Rahul</strong> (Professional)<br/>but not confirmed in the last message.',
        riskLevel: 'Low Risk',
        primaryAction: 'Confirm',
    },
    {
        id: 4,
        icon: 'cake',
        title: 'Birthday Alert.',
        description: '<strong>Sarah\'s</strong> birthday is tomorrow.',
        riskLevel: 'Opportunity',
        primaryAction: 'Plan a Message',
    }
];

export default function Alerts() {
    return (
        <DashboardLayout>
            <Sidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <TopNavbar />

                <div className="flex-1 overflow-y-auto px-10 pb-10 custom-scrollbar">

                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-[28px] font-bold text-gray-900 tracking-tight">Relationship Alerts</h2>
                        <AlertFilter />
                    </div>

                    {/* Table Headers */}
                    <div className="flex items-center px-6 mb-3 text-[15px] font-bold text-gray-900">
                        <div className="w-[60px] mr-6">Type</div>
                        <div className="flex-1"></div>
                        <div className="w-[120px] text-center pl-6">Risk Level</div>
                        <div className="w-[200px] text-center pl-6">Suggested Action</div>
                    </div>

                    <div className="flex flex-col gap-4 pb-8">
                        {alertsData.map((alert) => (
                            <AlertCard key={alert.id} alert={alert} />
                        ))}
                    </div>

                </div>
            </main>
        </DashboardLayout>
    );
}
