import { Award, Globe, Headphones, Rocket, Star, Users } from "lucide-react";
import { stats } from "@/data/site";

const icons = [Award, Rocket, Users, Globe, Star, Headphones];

export function StatsBar() {
  return (
    <section className="container-x py-6">
      <div className="rounded-3xl yellow-gradient px-6 md:px-10 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <div key={s.label} className="flex items-center gap-3">
              <div className="grid place-items-center size-11 rounded-full border-2 border-ink/15 text-ink shrink-0">
                <Icon className="size-5" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-ink leading-none">{s.value}</div>
                <div className="text-[11px] mt-1 font-semibold text-ink/75 tracking-wide">{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
