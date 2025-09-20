"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";

const stats = [
  {
    title: "Total Revenue",
    value: "$58,947",
    subtitle: "Total sales made today",
  },
  { title: "Today's Sales", value: "127", subtitle: "New orders" },
  { title: "Conversion", value: "0.58%", subtitle: "Conversion rate" },
  { title: "Today's Visits", value: "78.41k", subtitle: "Visitors" },
];

const salesDataDaily = [
  { name: "Mon", sales: 400, visitors: 240 },
  { name: "Tue", sales: 600, visitors: 300 },
  { name: "Wed", sales: 700, visitors: 200 },
  { name: "Thu", sales: 500, visitors: 280 },
  { name: "Fri", sales: 800, visitors: 320 },
  { name: "Sat", sales: 900, visitors: 400 },
  { name: "Sun", sales: 750, visitors: 360 },
];

const salesDataMonthly = [
  { name: "Jan", sales: 2400, visitors: 2400 },
  { name: "Feb", sales: 1398, visitors: 2210 },
  { name: "Mar", sales: 9800, visitors: 2290 },
  { name: "Apr", sales: 3908, visitors: 2000 },
  { name: "May", sales: 4800, visitors: 2181 },
  { name: "Jun", sales: 3800, visitors: 2500 },
];

const pieData = [
  { name: "Revenue", value: 75 },
  { name: "Other", value: 25 },
];
const COLORS = ["#6EE7B7", "#1F2937"];

const topUsers = [
  { name: "Tomaslau", amount: "0.008617 BTC", email: "tomas@example.com" },
  {
    name: "Erwin E. Brown",
    amount: "0.008114 BTC",
    email: "erwin@example.com",
  },
  { name: "Sarah Doe", amount: "$1,200", email: "sarah@example.com" },
  { name: "Mariam", amount: "$1,000", email: "mariam@example.com" },
  { name: "John Deo", amount: "$900", email: "john@example.com" },
];

export default function DashboardClient() {
  const [range, setRange] = useState("Monthly");

  const chartData =
    (range === "Daily" ? salesDataDaily : salesDataMonthly) || [];

  return (
    <div className=" bg-gradient-to-br  from-[#d345e6] via-[#b446e7] to-[#ae24d1] p-6 px-8 text-white">
 
      {/* Top stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <Card
            key={i}
            className="p-4 bg-gradient-to-r from-[#111827]/60 via-[#0f1724]/40 to-[#0b1220]/40 border border-[#1f2937]"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-300">{s.title}</div>
                <div className="text-xl font-bold">{s.value}</div>
              </div>
              <div className="text-slate-400 text-sm">{s.subtitle}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: Revenue donut + Top Users */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-4 bg-[#0b1220]/60">
            <h3 className="text-sm text-slate-300 mb-4">Total Revenue</h3>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div style={{ width: 160, height: 160 }}>
                <ResponsiveContainer width="100%" height={160}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      innerRadius={48}
                      outerRadius={72}
                      startAngle={90}
                      endAngle={-270}
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="flex-1 text-left">
                <div className="text-3xl font-bold">75%</div>
                <div className="text-sm text-slate-400">
                  Total sales made today
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div>
                    Today: <span className="font-semibold">$178</span>
                  </div>
                  <div>
                    Yesterday: <span className="font-semibold">$170</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-[#0b1220]/60">
            <h3 className="text-sm text-slate-300 mb-4">
              Top 5 Users Balances
            </h3>
            <ul className="space-y-3">
              {topUsers.map((u, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <div className="h-8 w-8 rounded-full bg-slate-600 flex items-center justify-center text-xs">
                        {u.name[0]}
                      </div>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">{u.name}</div>
                      <div className="text-xs text-slate-400">{u.email}</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">{u.amount}</div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Right column: Sales Analytics + Revenue History */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-4 bg-[#0b1220]/60">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-slate-300">Sales Analytics</h3>
              <div className="flex items-center gap-2">
                {/* Tabs: clicking changes the range state */}
                <Tabs defaultValue="Monthly">
                  <TabsList>
                    <TabsTrigger
                      value="Daily"
                      onClick={() => setRange("Daily")}
                    >
                      Daily
                    </TabsTrigger>
                    <TabsTrigger
                      value="Weekly"
                      onClick={() => setRange("Weekly")}
                    >
                      Weekly
                    </TabsTrigger>
                    <TabsTrigger
                      value="Monthly"
                      onClick={() => setRange("Monthly")}
                    >
                      Monthly
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <div style={{ width: "100%", height: 280 }}>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={chartData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Bar dataKey="sales" barSize={18} radius={[6, 6, 0, 0]} />
                  <Line
                    type="monotone"
                    // Choose visitors if present on the data item, otherwise fallback to sales
                    dataKey={
                      chartData[0] &&
                      Object.prototype.hasOwnProperty.call(
                        chartData[0],
                        "visitors"
                      )
                        ? "visitors"
                        : "sales"
                    }
                    stroke="#60a5fa"
                    strokeWidth={2}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-4 bg-[#0b1220]/60">
            <h3 className="text-sm text-slate-300 mb-3">Revenue History</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-slate-400 text-xs uppercase">
                  <tr>
                    <th className="py-2">Marketplace</th>
                    <th className="py-2">Date</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody className="text-slate-200">
                  <tr className="border-t border-slate-800">
                    <td className="py-3">ThemeMarket</td>
                    <td className="py-3">Oct 15, 2025</td>
                    <td className="py-3">$245.25</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full bg-green-700 text-xs">
                        Paid
                      </span>
                    </td>
                    <td className="py-3">
                      {" "}
                      <Button size="sm">View</Button>{" "}
                    </td>
                  </tr>
                  <tr className="border-t border-slate-800">
                    <td className="py-3">Finances</td>
                    <td className="py-3">Oct 11, 2025</td>
                    <td className="py-3">$193.45</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full bg-yellow-700 text-xs">
                        Pending
                      </span>
                    </td>
                    <td className="py-3">
                      {" "}
                      <Button size="sm">View</Button>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>

      <footer className="mt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Your Company
      </footer>
    </div>
  );
}
