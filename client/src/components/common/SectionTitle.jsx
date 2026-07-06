function SectionTitle({ index, total, title, subtitle }) {
  return (
    <div className="mb-5">
      <span
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        className="text-[11px] tracking-[0.15em] text-[#9C9EA3]"
      >
        {index} / {total}
      </span>
      <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#ffffff]">
        {title}
      </h2>
      <p className="mt-1 text-sm text-[#5B5D63]">{subtitle}</p>
    </div>
  );
}

export default SectionTitle;
