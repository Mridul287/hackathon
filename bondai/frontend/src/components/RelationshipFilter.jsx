import React from 'react';
import { Search } from 'lucide-react';

export default function RelationshipFilter() {
    const filters = ['All', 'Friends', 'Family', 'Professional'];

    return (
        <div className="flex items-center justify-between mb-2">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                    type="text"
                    placeholder="Search"
                    className="pl-9 pr-4 py-2 bg-gray-50/80 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#7c5ff4]/20 focus:bg-white w-[240px] text-sm transition-all placeholder-gray-400"
                />
            </div>

            <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-100 p-1">
                {filters.map((filter, index) => (
                    <React.Fragment key={filter}>
                        <button
                            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${index === 0
                                    ? 'bg-[#e9e3fe] text-[#7c5ff4]'
                                    : 'text-gray-600 hover:text-gray-900 flex items-center gap-2'
                                }`}
                        >
                            {index !== 0 && <span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span>}
                            {filter}
                        </button>
                        {index < filters.length - 1 && (
                            <div className="w-[1px] h-4 bg-gray-200 mx-1"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
