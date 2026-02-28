import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function AlertFilter() {
    const tabs = ['All Alerts', 'High Risk', 'Medium Risk', 'Low Risk'];

    return (
        <div className="flex items-center gap-1">
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-gray-700 font-medium hover:bg-white/50 transition-colors">
                Filter
                <ChevronDown size={18} className="text-gray-500" />
            </button>

            <div className="flex bg-white/60 p-1 rounded-xl shadow-sm border border-white/40 backdrop-blur-md">
                {tabs.map((tab, index) => (
                    <button
                        key={tab}
                        className={`px-4 py-1.5 rounded-lg text-[14.5px] font-medium transition-colors ${index === 0
                                ? 'bg-white text-gray-900 shadow-[0_2px_4px_rgba(0,0,0,0.02)]'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
}
