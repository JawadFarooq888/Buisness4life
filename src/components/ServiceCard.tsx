import Link from "next/link";
import ServiceIcon from "@/components/ui/ServiceIcon";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-surface group flex flex-col rounded-2xl p-7"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red/10 text-red">
        <ServiceIcon name={service.icon} />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-foreground">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {service.shortDescription}
      </p>
      <div className="mt-5 flex items-center justify-end border-t border-border pt-4">
        <span className="text-sm font-medium text-red transition-transform group-hover:translate-x-1">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
