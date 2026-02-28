import React from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import DashboardLayout from '../components/DashboardLayout';
import RelationshipFilter from '../components/RelationshipFilter';
import RelationshipTable from '../components/RelationshipTable';

export default function Relationships() {
    return (
        <DashboardLayout>
            <Sidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <TopNavbar />

                <div className="flex-1 overflow-y-auto px-10 pb-8 custom-scrollbar">
                    <h2 className="text-[22px] font-semibold text-gray-900 mb-6 tracking-tight">Your Relationships</h2>

                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60">
                        <RelationshipFilter />
                        <div className="mt-8">
                            <RelationshipTable />
                        </div>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    );
}
