import config from "../business.config.json";

const badges = [
  { icon: "🛡️", label: "Licensed & Insured" },
  { icon: "💬", label: "Free Estimates" },
  { icon: "⭐", label: "5-Star Rated" },
  { icon: "📍", label: "Locally Owned" },
];

export default function TrustBar() {
  return (
    <div className="py-5 px-6" style={{ backgroundColor: config.primaryColor }}>
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {badges.map((b) => (
          <div
            key={b.label}
            className="flex items-center gap-2.5 text-white"
          >
            <span className="text-xl">{b.icon}</span>
            <span className="font-semibold text-sm tracking-wide whitespace-nowrap">
              {b.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
