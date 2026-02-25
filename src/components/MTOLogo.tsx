export default function MTOLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center">
        {/* Abstract Trillium */}
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-current" aria-hidden="true">
          <path d="M50 10 C 30 30, 30 50, 45 55 C 50 50, 50 50, 50 50 C 50 50, 50 50, 55 55 C 70 50, 70 30, 50 10 Z" />
          <path d="M20 45 C 10 70, 25 90, 45 80 C 45 70, 45 70, 45 70 C 45 70, 50 65, 40 60 C 25 55, 20 45, 20 45 Z" />
          <path d="M80 45 C 90 70, 75 90, 55 80 C 55 70, 55 70, 55 70 C 55 70, 50 65, 60 60 C 75 55, 80 45, 80 45 Z" />
          <circle cx="50" cy="35" r="4" />
          <circle cx="35" cy="65" r="4" />
          <circle cx="65" cy="65" r="4" />
        </svg>
        <div className="flex flex-col justify-center ml-1">
          <span className="text-[2rem] font-normal tracking-tight leading-none" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Ontario</span>
          <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase leading-tight mt-1">Ministry of Transportation</span>
        </div>
      </div>
      <div className="border-[3px] border-current rounded px-2 py-0.5 transform -rotate-[8deg] ml-3 mt-1 opacity-90">
        <span className="text-lg font-black uppercase tracking-widest" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>Approved</span>
      </div>
    </div>
  );
}
