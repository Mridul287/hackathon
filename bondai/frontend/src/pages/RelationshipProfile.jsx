import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import DashboardLayout from '../components/DashboardLayout';
import ProfileSummary from '../components/ProfileSummary';
import ActivityTimeline from '../components/ActivityTimeline';
import InsightsCard from '../components/InsightsCard';
import RecommendationCard from '../components/RecommendationCard';
import { MessageSquare } from 'lucide-react';

// Mock Data targeting the specifics of the image provided
const profileData = {
    name: "Rahul Mehta",
    type: "Close Friend",
    healthScore: 82,
    emotionalDrift: "Stable",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop"
};

const timelineData = [
    { type: 'chat', title: 'Last Chat Activity', time: '4 days ago', description: '' },
    { type: 'event', title: 'Mentioned Event', time: '8 days ago', description: 'Mentioned a job interview' },
    { type: 'sentiment', title: 'Sentiment Spike', time: '11 days ago', description: 'Shared news with positive sentiment' },
    { type: 'empty', title: '', time: '3 weeks ago', description: 'Extended gap in conversation' },
    { type: 'inactivity', title: 'Period of Inactivity', time: '3 weeks ago', description: '' }
];

const insightsData = [
    { type: 'time', text: 'Response time increased by 34%', trend: 'up' },
    { type: 'frequency', text: 'Message frequency dropped 22%', trend: 'down' },
    { type: 'tone', text: 'Emotional tone slightly less positive', trend: null }
];

const recommendationData = {
    message: "Hey! Sorry I've been caught up — how did your interview go?",
    actions: [
        { label: 'Send', primary: true, icon: <MessageSquare size={16} className="fill-current text-white/20" /> },
        { label: 'Edit', primary: false }
    ]
};

export default function RelationshipProfile() {
    const { id } = useParams();

    return (
        <DashboardLayout>
            <Sidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <TopNavbar />

                <div className="flex-1 overflow-y-auto px-10 pb-8 custom-scrollbar">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full min-h-[600px]">
                        {/* Left Column - Takes up 2/3 width */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            <div className="h-[230px]">
                                <ProfileSummary data={profileData} />
                            </div>
                            <div className="flex-1 min-h-[350px]">
                                <ActivityTimeline timeline={timelineData} />
                            </div>
                        </div>

                        {/* Right Column - Takes up 1/3 width */}
                        <div className="lg:col-span-1 flex flex-col gap-6">
                            <div className="flex-1 min-h-[250px]">
                                <InsightsCard insights={insightsData} />
                            </div>
                            <div className="flex-1 min-h-[250px]">
                                <RecommendationCard recommendation={recommendationData} />
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </DashboardLayout>
    );
}
