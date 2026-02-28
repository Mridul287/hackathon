import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

export default function ProfileSummary({ data }) {
    // Simple gauge calculation for SVG
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (data.healthScore / 100) * (circumference / 2);

    return (
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 flex gap-8 h-full">
            <div className="w-[180px] h-[180px] rounded-2xl overflow-hidden shrink-0 shadow-sm border border-gray-100">
                <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 flex flex-col pt-2">
                <div className="mb-6">
                    <p className="text-[13px] text-gray-500 font-medium tracking-wide mb-1">Name:</p>
                    <h2 className="text-[26px] font-bold text-gray-900 leading-none mb-3">{data.name}</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-[14.5px] text-gray-700">Relationship Type:</span>
                        <span className="bg-gray-100/80 px-3 py-1 rounded-md text-gray-700 text-sm font-medium">
                            {data.type}
                        </span>
                    </div>
                </div>

                <div className="flex items-end gap-12 mt-auto pb-2">
                    <div className="relative w-[160px] h-[90px] flex flex-col justify-end items-center overflow-hidden pb-1">
                        <svg className="absolute top-0 w-[160px] h-[160px]" viewBox="0 0 160 160">
                            <defs>
                                <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
                                    <stop offset="100%" stopColor="#4ade80" /> {/* Green */}
                                </linearGradient>
                            </defs>
                            {/* Background Arc */}
                            <circle
                                cx="80"
                                cy="80"
                                r={70}
                                fill="transparent"
                                stroke="#e2e8f0"
                                strokeWidth="12"
                                strokeDasharray={`${Math.PI * 70} ${Math.PI * 70 * 2}`}
                                strokeDashoffset={0}
                                strokeLinecap="round"
                                className="transform origin-center rotate-180"
                            />
                            {/* Foreground Arc */}
                            <circle
                                cx="80"
                                cy="80"
                                r={70}
                                fill="transparent"
                                stroke="url(#healthGradient)"
                                strokeWidth="12"
                                strokeDasharray={`${Math.PI * 70} ${Math.PI * 70 * 2}`}
                                strokeDashoffset={Math.PI * 70 - (data.healthScore / 100) * (Math.PI * 70)}
                                strokeLinecap="round"
                                className="transform origin-center rotate-180 transition-all duration-1000 ease-out"
                            />
                        </svg>
                        <div className="flex flex-col items-center z-10 pt-6 mt-1">
                            <span className="text-[13px] text-gray-500 font-medium mb-0.5 mt-2">Health Score</span>
                            <div className="flex items-baseline">
                                <span className="text-[36px] font-bold text-gray-900 leading-none">{data.healthScore}</span>
                                <span className="text-[15px] text-gray-400 font-semibold ml-1">/100</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-gray-100 p-2.5 rounded-full text-gray-600">
                            <SlidersHorizontal size={20} />
                        </div>
                        <div>
                            <p className="text-[13px] text-gray-500 font-medium tracking-wide">Emotional Drift:</p>
                            <p className="text-[16px] font-semibold text-gray-900">{data.emotionalDrift}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
