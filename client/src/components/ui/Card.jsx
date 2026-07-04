function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-lg border border-[#E4E4E1] bg-white p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
