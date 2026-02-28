import React from 'react';
import { MessageSquare, CalendarDays, LineChart } from 'lucide-react';

export default function AlertCard({ alert }) {
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'chat-clock': return <MessageSquare size={22} className="text-gray-500" />;
            case 'heart-rate': return <LineChart size={22} className="text-red-400" />;
            case 'calendar': return <CalendarDays size={22} className="text-amber-600" />;
            case 'cake': return <span className="text-xl">🎂</span>;
            default: return null;
        }
    };

    const getIconBg = (iconName) => {
        switch (iconName) {
            case 'chat-clock': return 'bg-gray-200';
            case 'heart-rate': return 'bg-red-100';
            case 'calendar': return 'bg-amber-100';
            case 'cake': return 'bg-emerald-100';
            default: return 'bg-gray-100';
        }
    };

    const getRiskStyle = (level) => {
        switch (level) {
            case 'High Risk': return 'bg-red-300/40 text-red-900 shadow-[0_0_15px_rgba(248,113,113,0.4)]';
            case 'Medium Risk': return 'bg-amber-300/40 text-amber-900 shadow-[0_0_15px_rgba(251,191,36,0.4)]';
            case 'Low Risk': return 'bg-yellow-200/50 text-yellow-900 shadow-[0_0_15px_rgba(250,204,21,0.3)]';
            case 'Opportunity': return 'bg-emerald-300/40 text-emerald-900 shadow-[0_0_15px_rgba(52,211,153,0.4)]';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getButtonPrimaryStyle = (actionType) => {
        switch (actionType) {
            case 'Send': return 'bg-[#A388FF] hover:bg-[#8e6cf6] text-white shadow-[0_4px_14px_rgba(163,136,255,0.4)]';
            case 'Confirm': return 'bg-[#A388FF] hover:bg-[#8e6cf6] text-white shadow-[0_4px_14px_rgba(163,136,255,0.4)]';
            case 'Plan a Message': return 'bg-[#A388FF] hover:bg-[#8e6cf6] text-white shadow-[0_4px_14px_rgba(163,136,255,0.4)]';
            default: return 'bg-gray-800 hover:bg-gray-900 text-white';
        }
    };

    return (
        <div className="bg-white/95 backdrop-blur-sm px-6 py-5 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 flex items-center gap-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] transition-shadow">

            {/* Type Icon */}
            <div className="flex flex-col gap-2 min-w-[60px]">
                {alert.showColHeaders && <span className="text-[14px] font-bold text-gray-900 hidden">Type</span>}
                <div className={`w-14 h-14 rounded-[14px] flex items-center justify-center shrink-0 ${getIconBg(alert.icon)}`}>
                    {getIcon(alert.icon)}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                {alert.showColHeaders && <span className="text-[14px] font-bold text-gray-900 mb-2 block">Alert Content</span>}
                <h3 className="text-[16px] font-bold text-gray-900 mb-1">{alert.title}</h3>
                <div className="flex items-center gap-2">
                    {alert.image && (
                        <img src={alert.image} alt={alert.person} className="w-7 h-7 rounded-full object-cover" />
                    )}
                    <p className="text-[15px] text-gray-800 leading-snug" dangerouslySetInnerHTML={{ __html: alert.description }}></p>
                </div>
            </div>

            {/* Risk Level */}
            <div className="w-[120px] flex flex-col items-center justify-center border-l border-gray-100 pl-6 h-full">
                {alert.showColHeaders && <span className="text-[14px] font-bold text-gray-900 mb-3 w-full text-center">Risk Level</span>}
                <div className={`px-3 py-1.5 rounded-xl text-sm font-semibold whitespace-nowrap ${getRiskStyle(alert.riskLevel)}`}>
                    {alert.riskLevel}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="w-[200px] flex flex-col items-center justify-center border-l border-gray-100 pl-6 h-full">
                {alert.showColHeaders && <span className="text-[14px] font-bold text-gray-900 mb-3 w-full text-center">Suggested Action</span>}
                <div className="flex gap-2 w-full">
                    <button className={`flex-1 py-2 rounded-xl text-[14px] font-semibold flex items-center justify-center gap-1.5 transition-colors ${getButtonPrimaryStyle(alert.primaryAction)}`}>
                        {alert.primaryAction === 'Send' && <MessageSquare size={16} className="fill-current text-white/20" />}
                        {alert.primaryAction === 'Confirm' && <span className="text-lg leading-none">✓</span>}
                        {alert.primaryAction}
                    </button>
                    <button className="px-4 py-2 rounded-xl text-[14px] font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                        Edit
                    </button>
                </div>
            </div>

        </div>
    );
}
