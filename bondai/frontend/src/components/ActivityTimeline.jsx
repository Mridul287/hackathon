import React from 'react';
import { MessageSquare, TrendingUp, Clock } from 'lucide-react';

export default function ActivityTimeline({ timeline }) {
    const getIcon = (type) => {
        switch (type) {
            case 'chat': return <MessageSquare size={18} />;
            case 'sentiment': return <TrendingUp size={18} />;
            case 'inactivity': return <Clock size={18} />;
            case 'event': return <span className="text-lg">🎤</span>;
            case 'health': return <span className="text-lg">❤️</span>;
            default: return <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />;
        }
    };

    return (
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 h-full">
            <h3 className="text-[18px] text-gray-900 font-semibold mb-8">Activity Timeline</h3>

            <div className="grid grid-cols-2 gap-x-12 gap-y-10 relative">
                {timeline.map((item, index) => (
                    <div key={index} className="flex gap-5 relative group">
                        {/* Custom Vertical Line connector for items in the same column */}
                        {index < timeline.length - 2 && (
                            <div className="absolute left-6 top-14 bottom-[-40px] w-[2px] bg-gray-100 -z-10"></div>
                        )}

                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-[3px] border-white shadow-sm z-10 ${item.type === 'empty' ? 'bg-gray-50' : 'bg-[#f3efff] text-[#7c5ff4]'
                            }`}>
                            {getIcon(item.type)}
                        </div>

                        {item.type !== 'empty' && (
                            <div className="pt-1 w-full">
                                <h4 className="text-[15px] font-semibold text-gray-900 mb-1">{item.title}</h4>
                                <p className="text-[14px] text-gray-600 mb-1">{item.description}</p>
                                {item.time && <p className="text-[13px] text-gray-400 font-medium">{item.time}</p>}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
