import Link from "next/link";
import { stackGroups } from "@/data/stack";
import { StackCard } from "@/components/stack/StackCard";

function StackHeading() {
  return <div className="section-heading"><span className="section-index">04</span><h2>— stack</h2></div>;
}

export function Stack({ full = false }: { full?: boolean }) {
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <div className="section-topline">
          <StackHeading />
          <Link className="text-link" href="/stack">{full ? "back home ←" : "what I use →"}</Link>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {stackGroups.map((group, index) => <StackCard group={group} index={index} key={group.id} />)}
        </div>
      </div>
    </section>
  );
}
