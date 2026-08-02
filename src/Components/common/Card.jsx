const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
