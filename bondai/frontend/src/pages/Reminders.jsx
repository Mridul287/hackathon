import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import AutomationBar from '../components/AutomationBar';
import ReminderCard from '../components/ReminderCard';

const remindersData = [
    {
        id: 1,
        type: 'inactivity',
        name: 'Rahul Mehta',
        description: 'Inactivity: No contact with Close Friend for 10 days',
        message: "Hey Sarah! Saw you're on a trip — hope it's amazing!",
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80',
        scheduleTime: 'Today'
    },
    {
        id: 2,
        type: 'inactivity',
        name: 'Aditi Sharma',
        description: "Sarah Johnson's tripe Family",
        message: "Hey Sarah! Sarah Johnson's trip next week.",
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80',
        scheduleTime: 'Tomorrow'
    },
    {
        id: 3,
        type: 'birthday',
        name: 'Birthday',
        description: "Rahul Mehta's birthday is tomorrow",
        message: "Happy Birthday Rahul! What a milestone — let's celebrate!",
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80',
        scheduleTime: 'Today'
    },
    {
        id: 4,
        type: 'inactivity',
        name: 'Sarah Johnson',
        description: "Colleague",
        message: "Happy Birthday Rahul! What a milestone — let's celebrate!",
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80',
        scheduleTime: 'Tomorrow'
    },
    {
        id: 5,
        type: 'birthday',
        name: 'Birthday:',
        description: "No contact with - Johnson for 10 days",
        message: "Happy Birthday, Mahul Mehta's birthday - tomorrow!",
        scheduleTime: 'Today' // Uses generic yellow gift icon by omitting image
    },
    {
        id: 6,
        type: 'emotional',
        name: 'Emotional Drop:',
        description: "Significant drop in tone with Sarah Johnson",
        message: "Happy birthday Significant a message - Sarah Johnson.",
        scheduleTime: 'Today'
    }
];

export default function Reminders() {
    return (
        <DashboardLayout>
            <Sidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <TopNavbar />

                <div className="flex-1 overflow-y-auto px-10 pb-10 custom-scrollbar">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-[28px] font-bold text-gray-900 tracking-tight">Smart Reminders</h2>
                    </div>

                    <AutomationBar />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        {remindersData.map(reminder => (
                            <ReminderCard key={reminder.id} reminder={reminder} />
                        ))}
                    </div>

                </div>
            </main>
        </DashboardLayout>
    );
}
