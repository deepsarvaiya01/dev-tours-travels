function ServiceCard({ title, description, icon }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 text-2xl">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </article>
  )
}

export default ServiceCard
