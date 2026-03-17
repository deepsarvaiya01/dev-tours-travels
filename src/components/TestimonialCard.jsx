function TestimonialCard({ name, location, message }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="italic text-slate-700">“{message}”</p>
      <p className="mt-4 font-semibold text-slate-900">{name}</p>
      <p className="text-sm text-slate-500">{location}</p>
    </article>
  )
}

export default TestimonialCard
