import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";
import { Card } from "@/components/ui/card";
import { useState } from "react";
const SalaryRevinewHistory = () => {
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

  const [range, setRange] = useState("Monthly");

  const chartData =
    (range === "Daily" ? salesDataDaily : salesDataMonthly) || [];

  return (
    <div className="lg:col-span-2 space-y-6">
      <Card className="p-4 bg-[#500563]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm text-slate-300">Sales Analytics</h3>
          <div className="flex items-center gap-2">
            {/* Tabs: clicking changes the range state */}
            <Tabs defaultValue="Monthly">
              <TabsList>
                <TabsTrigger value="Daily" onClick={() => setRange("Daily")}>
                  Daily
                </TabsTrigger>
                <TabsTrigger value="Weekly" onClick={() => setRange("Weekly")}>
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
                  Object.prototype.hasOwnProperty.call(chartData[0], "visitors")
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

      <Card className="p-4 bg-[#57056b]">
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
  );
};

export default SalaryRevinewHistory;
