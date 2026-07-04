function Card({ children, className = "" }) {
  return (
    <div
      className={`relative rounded-lg border border-[#212B35] bg-[#10161D] p-6 shadow-[0_0_0_1px_rgba(124,147,245,0.03)] ${className}`}
    >
      {/* instrument-panel corner brackets */}
      <span className="pointer-events-none absolute -left-px -top-px h-3 w-3 rounded-tl-lg border-l-2 border-t-2 border-[#7C93F5]/50" />
      <span className="pointer-events-none absolute -right-px -top-px h-3 w-3 rounded-tr-lg border-r-2 border-t-2 border-[#7C93F5]/50" />
      <span className="pointer-events-none absolute -left-px -bottom-px h-3 w-3 rounded-bl-lg border-b-2 border-l-2 border-[#7C93F5]/50" />
      <span className="pointer-events-none absolute -right-px -bottom-px h-3 w-3 rounded-br-lg border-b-2 border-r-2 border-[#7C93F5]/50" />
      {children}
    </div>
  );
}

export default Card;