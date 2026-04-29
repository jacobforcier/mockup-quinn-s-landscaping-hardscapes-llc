import config from "../business.config.json";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/80 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <span className="font-extrabold text-gray-900 text-lg tracking-tight truncate max-w-[200px] sm:max-w-none">
          {config.name}
        </span>
        <nav className="hidden md:flex items-center gap-7">
          {["Services", "Gallery", "Reviews", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${config.phone}`}
          className="flex-shrink-0 text-sm px-5 py-2.5 rounded-full text-white font-bold shadow-sm hover:brightness-110 hover:scale-105 transition-all duration-200"
          style={{ backgroundColor: config.primaryColor }}
        >
          <span className="hidden sm:inline">📞 </span>
          {config.phone}
        </a>
      </div>
    </header>
  );
}
