const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-sky-400 text-slate-950',
    secondary: 'border border-white/15 bg-white/5 text-white hover:border-sky-400/50',
    ghost: 'border border-white/10 bg-slate-950/60 text-white',
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
