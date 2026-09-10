type SiteMockProps = {
  bg: string
  accent: string
  className?: string
  framed?: boolean
}

export default function SiteMock({
  bg,
  accent,
  className = '',
  framed = true,
}: SiteMockProps) {
  return (
    <div
      className={`overflow-hidden bg-white ${
        framed ? 'rounded-xl border border-line shadow-xl' : ''
      } ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-white px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      <div style={{ backgroundColor: bg }} className="p-4">
        <div style={{ backgroundColor: accent }} className="mb-3 h-8 w-2/3 rounded-md" />
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded bg-white/70" />
          <div className="h-1.5 w-5/6 rounded bg-white/70" />
          <div className="h-1.5 w-4/6 rounded bg-white/70" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div style={{ backgroundColor: accent }} className="h-10 rounded-md opacity-70" />
          <div style={{ backgroundColor: accent }} className="h-10 rounded-md opacity-45" />
          <div style={{ backgroundColor: accent }} className="h-10 rounded-md opacity-25" />
        </div>
      </div>
    </div>
  )
}
