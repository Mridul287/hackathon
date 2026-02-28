import React from 'react';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const tableData = [
    { id: 1, name: 'Rahul Kumar', type: 'Friend', health: 90, lastInteraction: '4 days ago', status: 'Stable', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop' },
    { id: 2, name: 'Aditi Sharma', type: 'Family', health: 65, lastInteraction: '1 day ago', status: 'Declining', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', highlighted: true },
    { id: 3, name: 'Sarah Johnson', type: 'Colleague', health: 30, lastInteraction: 'Yesterday', status: 'Critical', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop', highlighted: true },
    { id: 4, name: 'Rahul Kumar', type: 'Colleague', health: 60, lastInteraction: 'Yesterday', status: 'Critical', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop' },
    { id: 5, name: 'Aditi Sharma', type: 'Family', health: 85, lastInteraction: '1 hour ago', status: 'Declining', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop' },
    { id: 6, name: 'Sarah Johnson', type: 'Colleague', health: 25, lastInteraction: 'Yesterday', status: 'Critical', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop' },
    { id: 7, name: 'Rahul Kumar', type: 'Friend', health: 95, lastInteraction: '1 hour ago', status: 'Declining', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop' },
];

export default function RelationshipTable() {
    const getStatusStyle = (status) => {
        switch (status) {
            case 'Stable': return 'bg-[#4ade80] text-white';
            case 'Declining': return 'bg-[#fbbf24] text-white';
            case 'Critical': return 'bg-[#f87171] text-white';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getHealthBarColor = (health) => {
        if (health >= 80) return 'bg-[#4ade80] shadow-[0_0_12px_rgba(74,222,128,0.5)]';
        if (health >= 50) return 'bg-[#fbbf24] shadow-[0_0_12px_rgba(251,191,36,0.5)]';
        return 'bg-[#f87171] shadow-[0_0_12px_rgba(248,113,113,0.5)]';
    };

    return (
        <div className="w-full">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-100">
                        <th className="pb-4 font-semibold text-gray-900 text-[15px] pl-4 w-[25%]">Name</th>
                        <th className="pb-4 font-semibold text-gray-900 text-[15px] w-[15%]">Relationship Type</th>
                        <th className="pb-4 font-semibold text-gray-900 text-[15px] w-[20%]">Health Score</th>
                        <th className="pb-4 font-semibold text-gray-900 text-[15px] w-[15%]">Last Interaction</th>
                        <th className="pb-4 font-semibold text-gray-900 text-[15px] w-[12%]">Status</th>
                        <th className="pb-4 font-semibold text-gray-900 text-[15px] text-center w-[13%]">Action button</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr
                            key={row.id}
                            onClick={() => window.location.href = `/relationships/${row.id}`}
                            className={`border-b border-gray-50 transition-colors group cursor-pointer ${row.highlighted
                                ? 'bg-white shadow-[0_4px_25px_rgb(0,0,0,0.06)] rounded-2xl relative z-10 scale-[1.01]'
                                : 'hover:bg-gray-50/50'
                                }`}
                        >
                            <td className="py-4 pl-4">
                                <div className="flex items-center gap-3">
                                    <img src={row.image} alt={row.name} className="w-10 h-10 rounded-full object-cover" />
                                    <span className="font-medium text-gray-800">{row.name}</span>
                                </div>
                            </td>
                            <td className="py-4">
                                <span className="bg-gray-100 px-3 py-1 rounded-md text-gray-600 text-sm font-medium">
                                    {row.type}
                                </span>
                            </td>
                            <td className="py-4">
                                <div className="w-32 h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${getHealthBarColor(row.health)} transition-all duration-500`}
                                        style={{ width: `${row.health}%` }}
                                    ></div>
                                </div>
                            </td>
                            <td className="py-4">
                                <span className="text-gray-600 text-[15px]">{row.lastInteraction}</span>
                            </td>
                            <td className="py-4">
                                <span className={`px-4 py-1 rounded-md text-sm font-medium ${getStatusStyle(row.status)}`}>
                                    {row.status}
                                </span>
                            </td>
                            <td className="py-4 text-center">
                                <Link to={`/relationships/${row.id}`} onClick={(e) => e.stopPropagation()} className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl border border-gray-200 text-[#7c5ff4] font-medium hover:bg-gray-50 transition-colors w-full max-w-[100px]">
                                    <Eye size={16} />
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
