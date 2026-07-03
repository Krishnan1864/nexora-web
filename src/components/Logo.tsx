export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative">
        <svg width="38" height="42" viewBox="0 0 38 42" fill="none">
          <path d="M19 1L36.3205 11V31L19 41L1.67949 31V11L19 1Z" fill="#FFD400" stroke="#FFD400" strokeWidth="1.5" />
          <path d="M12 29V13L19 22V13M26 13V29L19 20" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="leading-none">
        <div className={`text-[19px] font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>NEXORA</div>
        <div className={`text-[9px] font-semibold tracking-[0.22em] mt-0.5 ${light ? "text-brand" : "text-brand"}`}>IT SOLUTIONS</div>
      </div>
    </div>
  );
}
