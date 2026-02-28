import React, { useState } from 'react';
import { CalendarDays, MessageSquare, ChevronDown, Gift, ArrowDownRight } from 'lucide-react';

export default function ReminderCard({ reminder }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState(reminder.scheduleTime);

    const times = ['Today', 'Tomorrow', 'This Week'];

    // Helpers for icons based on type
    const getTypeIcon = () => {
        switch (reminder.type) {
            case 'inactivity':
                return <img src={reminder.image} alt={reminder.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />;
            case 'birthday':
                if (reminder.image) return <img src={reminder.image} alt={reminder.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />;
                return <div className="w-12 h-12 rounded-xl bg-[#fef3c7] flex items-center justify-center shadow-sm"><Gift className="text-[#d97706]" size={22} /></div>;
            case 'emotional':
                return <div className="w-12 h-12 rounded-xl bg-[#f3e8ff] flex items-center justify-center shadow-sm"><ArrowDownRight size={24} className="text-[#9333ea]" /></div>;
            default:
                return <img src={reminder.image} alt={reminder.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />;
        }
    };

    return (
        <div className="bg-white/95 backdrop-blur-sm rounded-[24px] p-5 flex flex-col shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all flex-1 h-full relative">

            {/* Header Info */}
            <div className="flex gap-4 items-start mb-4">
                <div className="shrink-0 pt-0.5">
                    {getTypeIcon()}
                </div>
                <div>
                    <h3 className="text-[16px] font-extrabold text-gray-900 leading-tight mb-0.5">{reminder.name}</h3>
                    <p className="text-[13.5px] text-gray-800 leading-snug font-medium">
                        {reminder.type === 'inactivity' && !reminder.description.startsWith('Inactivity') && <span>Inactivity: </span>}
                        {reminder.description}
                    </p>
                </div>
            </div>

            {/* Message Bubble */}
            <div className="bg-[#f2eff8] rounded-[20px] rounded-tl-sm p-4 mb-5 relative flex-1">
                <p className="text-[14.5px] text-gray-800 font-medium leading-relaxed">'{reminder.message}'</p>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-5 mt-auto">
                <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white py-2 rounded-[14px] font-bold text-[14.5px] flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(139,92,246,0.25)] transition-colors">
                    <MessageSquare size={16} className="text-purple-200 fill-current opacity-80" />
                    Send
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-700 py-2 rounded-[14px] font-bold text-[14.5px] border border-gray-200 transition-colors shadow-sm">
                    Edit
                </button>
            </div>

            {/* Footer Schedule */}
            <div className="flex items-center pt-1 relative group z-30 w-full">
                <CalendarDays size={18} className="text-gray-500 mr-2" />
                <span className="text-[14px] font-semibold text-gray-700 mr-2">Schedule for</span>

                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex-1 flex items-center justify-between px-3 py-1.5 rounded-[10px] border cursor-pointer transition-all duration-200 ${isOpen
                        ? 'bg-[#f3e8ff] border-[#d8b4fe] rounded-t-none border-b-0'
                        : 'bg-transparent border-gray-200 hover:bg-gray-50'
                        }`}
                >
                    <span className="text-[14px] font-bold text-gray-800">{selectedTime}</span>
                    <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </div>

                {/* Actual Dropdown Menu - POSITIONED ABOVE */}
                {isOpen && (
                    <div className="absolute right-0 bottom-full mb-0 w-[145px] bg-[#f3e8ff] backdrop-blur-md rounded-t-[10px] border border-[#d8b4fe] border-b-0 shadow-[0_-10px_25px_rgba(0,0,0,0.1)] z-40 overflow-hidden">
                        {times.filter(t => t !== selectedTime).map((t, idx) => (
                            <div
                                key={t}
                                onClick={() => {
                                    setSelectedTime(t);
                                    setIsOpen(false);
                                }}
                                className={`px-3 py-2 text-[14px] font-bold text-gray-800 cursor-pointer hover:bg-white/40 transition-colors ${idx === 0 ? 'border-b border-[#d8b4fe]/30' : ''}`}
                            >
                                {t}
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}
