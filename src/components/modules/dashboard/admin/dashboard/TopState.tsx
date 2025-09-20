import { Card } from "@/components/ui/card";

const TopState = () => {
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((s, i) => (
        <Card
          key={i}
          className="p-4 bg-gradient-to-r from-[#4a0366] via-[#6f068a] to-[#c333e0] text-white border border-[#fdfeff]"
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
  );
};

export default TopState;
