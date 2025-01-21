import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Dashboard: React.FC = () => {
    // Sample data for the chart
    const chartData = [
        { date: '13 Mar', time: 40, budget: 10 },
        { date: '14 Mar', time: 35, budget: 15 },
        { date: '15 Mar', time: 45, budget: 20 },
        { date: '16 Mar', time: 30, budget: 25 },
        { date: '17 Mar', time: 25, budget: 15 },
        { date: '18 Mar', time: 20, budget: 10 },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Main grid container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Profile Card */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-600 rounded-full"></div>
                        <div>
                            <h2 className="font-semibold">Joe Black</h2>
                            <p className="text-sm text-gray-500">PROJECT MANAGER</p>
                        </div>
                    </div>
                </div>

                {/* Statistics Circle */}
                <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center justify-center">
                    <div className="relative w-32 h-32">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold">350.5k</span>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1 text-xs rounded-full bg-purple-100">Accounting</span>
                        <span className="px-3 py-1 text-xs rounded-full bg-blue-100">HR</span>
                        <span className="px-3 py-1 text-xs rounded-full bg-green-100">IT Support</span>
                        <span className="px-3 py-1 text-xs rounded-full bg-orange-100">Marketing</span>
                    </div>
                </div>

                {/* Team Members */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                <div>
                                    <p className="text-sm font-medium">Martin Boss</p>
                                    <p className="text-xs text-gray-500">Marketing</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full py-2 bg-amber-400 text-white rounded-lg text-sm">
                            Add new user
                        </button>
                    </div>
                </div>

                {/* Chat Section - Spans 2 columns */}
                <div className="bg-white rounded-xl p-4 shadow-sm md:col-span-2">
                    <h3 className="font-medium mb-4">Chat with Hannah</h3>
                    <div className="h-48 bg-gray-50 rounded-lg"></div>
                </div>

                {/* Time Track Chart */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h3 className="font-medium mb-4">Time track</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={chartData}>
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Line
                                type="monotone"
                                dataKey="time"
                                stroke="#ff6b6b"
                                strokeWidth={2}
                                dot={false}
                            />
                            <Line
                                type="monotone"
                                dataKey="budget"
                                stroke="#4ecdc4"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Bottom Stats Section - Spans full width */}
                <div className="grid grid-cols-3 gap-4 md:col-span-3">
                    {/* Task Counter */}
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold">56/72</h3>
                            <div className="mt-2 h-2 bg-gray-100 rounded-full">
                                <div className="w-3/4 h-full bg-purple-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold">35h 12m</h3>
                            <div className="mt-2 h-2 bg-gray-100 rounded-full">
                                <div className="w-1/2 h-full bg-orange-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Date Display */}
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold">24th Apr</h3>
                            <div className="mt-2 h-2 bg-gray-100 rounded-full">
                                <div className="w-2/3 h-full bg-yellow-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;