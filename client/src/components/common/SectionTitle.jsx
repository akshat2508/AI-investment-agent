function SectionTitle({ title, subtitle, index, total }) {
  return (
    <div className="mb-5 flex items-baseline justify-between border-b border-[#212B35] pb-4">
      <div>
        {index && total && (
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#7C93F5]">
            Stage {index} / {total}
          </span>
        )}
        <h2
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="mt-1 text-2xl font-semibold text-[#E7ECF1]"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-[#8A99A8]">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export default SectionTitle;