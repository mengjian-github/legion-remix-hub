import Link from 'next/link';

type NextStepLink = {
  label: string;
  href: string;
  reason: string;
  eventAction: string;
};

type NextStepCtaProps = {
  page: string;
  eyebrow?: string;
  title: string;
  description: string;
  links: NextStepLink[];
};

export default function NextStepCta({
  page,
  eyebrow = 'Recommended next step',
  title,
  description,
  links,
}: NextStepCtaProps) {
  return (
    <section className="my-8 rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/50 via-gray-900/80 to-amber-950/30 p-5 shadow-2xl shadow-emerald-950/20 sm:p-6">
      <div className="grid gap-5 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">{eyebrow}</p>
          <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-200">{description}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              data-track-event="next_step_cta_click"
              data-track-prop-page={page}
              data-track-prop-action={link.eventAction}
              data-track-prop-destination={link.href}
              data-track-prop-position={index + 1}
              className="group rounded-2xl border border-gray-700 bg-gray-950/70 p-4 transition hover:border-emerald-400/70 hover:bg-emerald-950/30"
            >
              <span className="text-sm font-black text-white group-hover:text-emerald-100">{link.label} →</span>
              <span className="mt-2 block text-xs leading-relaxed text-gray-400">{link.reason}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
