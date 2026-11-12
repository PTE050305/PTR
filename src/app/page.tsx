import { SiteChrome } from "@/components/layout/SiteChrome";
import { AboutPreview, ContactCta, JourneyPreview, LeadershipPreview, ProjectsPreview, StackPreview } from "@/components/sections/Sections";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return <SiteChrome><main><Hero /><AboutPreview /><ProjectsPreview /><JourneyPreview /><StackPreview /><LeadershipPreview /><ContactCta /></main></SiteChrome>;
}
