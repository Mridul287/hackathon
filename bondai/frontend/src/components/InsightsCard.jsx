import React from 'react';
import { Clock, MessageSquare, Hand } from 'lucide-react';

export default function InsightsCard({ insights }) {
    const getIcon = (type) => {
        switch (type) {
            case 'time': return <Clock size={18} className="text-gray-600" />;
            case 'frequency': return <MessageSquare size={18} className="text-[#7c5ff4]" />;
            case 'tone': return <Hand size={18} className="text-orange-500" />;
            default: return null;
        }
    };

    const getBgColor = (type) => {
        switch (type) {
            case 'time': return 'bg-gray-100';
            case 'frequency': return 'bg-[#f3efff]';
            case 'tone': return 'bg-orange-50';
            default: return 'bg-gray-50';
        }
    };

    return (
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 flex flex-col h-full">
            <h3 className="text-[16px] text-gray-900 font-semibold mb-6">AI Insights Card</h3>

            <div className="space-y-4 flex-1">
                {insights.map((insight, index) => (
                    <div key={index}>
                        <div className="flex items-center gap-4 py-1">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${getBgColor(insight.type)}`}>
                                {getIcon(insight.type)}
                            </div>
                            <p className="text-[14.5px] text-gray-800 font-medium leading-snug flex-1">
                                {insight.text}
                                {insight.trend === 'up' && <span className="text-emerald-500 ml-1">↑</span>}
                                {insight.trend === 'down' && <span className="text-red-400 ml-1">↓</span>}
                            </p>
                        </div>
                        {index < insights.length - 1 && (
                            <div className="h-[1px] w-full bg-gray-100 mt-4 ml-[56px]"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
