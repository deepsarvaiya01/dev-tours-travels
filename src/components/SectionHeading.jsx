function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-slate-600">{subtitle}</p> : null}
    </div>
  )
}

export default SectionHeading
