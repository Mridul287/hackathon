import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import RadarChartCard from '../components/RadarChartCard';
import PieChartCard from '../components/PieChartCard';
import LineGraphCard from '../components/LineGraphCard';
import GaugeChartCard from '../components/GaugeChartCard';

export default function Insights() {
    return (
        <DashboardLayout>
            <Sidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <TopNavbar />

                <div className="flex-1 overflow-y-auto px-10 pb-10 custom-scrollbar">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-[28px] font-bold text-gray-900 tracking-tight">System Insights & Analytics</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <RadarChartCard />
                        <PieChartCard />
                        <LineGraphCard />
                        <GaugeChartCard />
                    </div>
                </div>
            </main>
        </DashboardLayout>
    );
}
