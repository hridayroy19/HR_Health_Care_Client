import StatsCount from "@/components/ui/statscount";
const stats = [
  { value: 1700, suffix: "+", label: "BMDC verified doctors" },
  { value: 12, suffix: "K+", label: "10 Minutes" },
  {
    value: 700,
    suffix: "K",
    label: "People have trusted us with their health",
  },
  { value: 95, suffix: "%", label: "Users gave 5 star rating" },
  { value: 1, suffix: "M", label: "App download on Playstore" },
];
const Counter = () => {
  return (
    <div className="bg-purple-50 lg:px-12 md:px-14 px-5 border">
      <StatsCount stats={stats} showDividers={true} className="" />
    </div>
  );
};

export default Counter;
