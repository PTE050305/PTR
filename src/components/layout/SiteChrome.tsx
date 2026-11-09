import { CommandPalette } from "./CommandPalette";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return <div className="site-shell"><Navbar />{children}<Footer /><CommandPalette /></div>;
}
