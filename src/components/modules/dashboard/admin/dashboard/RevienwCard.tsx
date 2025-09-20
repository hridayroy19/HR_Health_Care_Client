import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { PieChart } from "lucide-react";
import { Cell, Pie, ResponsiveContainer } from "recharts";

const RevienwCard = () => {
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

  return (
    <div className="lg:col-span-1 space-y-6">
      <Card className="p-4 bg-[#610c83]/40">
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
            <div className="text-sm text-slate-400">Total sales made today</div>
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

      <Card className="p-4 bg-[#490457]">
        <h3 className="text-sm text-slate-300 mb-4">Top 5 Users Balances</h3>
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
  );
};

export default RevienwCard;
