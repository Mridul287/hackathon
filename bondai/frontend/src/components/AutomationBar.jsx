import React from 'react';
import { CheckCircle2, Radio } from 'lucide-react';

export default function AutomationBar() {
    return (
        <div className="flex items-center gap-4 mb-8">
            {/* Main Control Pill */}
            <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60">
                <span className="text-[18px] font-bold text-gray-900">AI Automation Controls</span>

                {/* Toggle Switch */}
                <div className="w-[42px] h-[22px] bg-[#8b5cf6] rounded-full relative cursor-pointer flex items-center transition-colors">
                    <div className="w-[18px] h-[18px] bg-white rounded-full absolute right-[2px] shadow-sm"></div>
                </div>

                <div className="flex items-center gap-1.5 text-[15.5px] font-semibold">
                    <span className="text-gray-800">Auto-trigger</span>
                    <span className="text-emerald-500 flex items-center gap-1 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">ON <CheckCircle2 size={16} className="fill-emerald-100" /></span>
                    <span className="text-gray-400">/ OFF</span>
                </div>
            </div>

            {/* Decorative Radio Icons */}
            <div className="flex items-center gap-6 px-1">
                <Radio size={22} className="text-[#8b5cf6] opacity-80" strokeWidth={2.5} style={{ filter: 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.4))' }} />
                <Radio size={22} className="text-[#8b5cf6] opacity-80" strokeWidth={2.5} style={{ filter: 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.4))' }} />
            </div>

            {/* Secondary Status Pill */}
            <div className="bg-white/95 backdrop-blur-sm rounded-full pl-2 pr-4 py-2 flex items-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 ml-2">
                <div className="flex items-center gap-2 text-[15px] font-bold">
                    <div className="bg-emerald-400 text-white px-3 py-1.5 rounded-[10px] flex items-center gap-1.5 shadow-[0_2px_12px_rgba(52,211,153,0.4)]">
                        Auto-trigger ON <CheckCircle2 size={16} className="text-white fill-emerald-600" />
                    </div>
                    <span className="text-gray-500">/ OFF</span>
                </div>
            </div>
        </div>
    );
}
