import { services } from "@/data/services";

export default function Marquee() {
  const items = services.map((s) => s.name);
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border-dark bg-background-dark py-4">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="text-sm font-semibold tracking-widest text-muted-invert">
              {item.toUpperCase()}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-red shadow-[0_0_8px_2px_rgba(224,30,43,0.7)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
