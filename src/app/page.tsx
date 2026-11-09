import { SiteChrome } from "@/components/layout/SiteChrome";
import { AboutPreview, ContactCta, Hero, JourneyPreview, LeadershipPreview, ProjectsPreview, StackPreview } from "@/components/sections/Sections";

export default function Home() {
  return <SiteChrome><main><Hero /><AboutPreview /><ProjectsPreview /><JourneyPreview /><StackPreview /><LeadershipPreview /><ContactCta /></main></SiteChrome>;
}
