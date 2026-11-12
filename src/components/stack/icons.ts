import type { ComponentType, SVGProps } from "react";
import {
  SiC,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
  BugPlay,
  ClipboardList,
  Database,
  FileText,
  Flag,
  Handshake,
  Kanban,
  MessageSquare,
  RefreshCw,
} from "lucide-react";
import type { StackIconKey } from "@/data/stack";

export type StackIconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export const iconRegistry: Partial<Record<StackIconKey, StackIconComponent>> = {
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  c: SiC,
  java: FaJava,
  php: SiPhp,
  laravel: SiLaravel,
  mysql: SiMysql,
  database: Database,
  documentation: FileText,
  qa: BugPlay,
  coordination: Kanban,
  agile: RefreshCw,
  communication: MessageSquare,
  leadership: Flag,
  requirements: ClipboardList,
  collaboration: Handshake,
};

export function getStackIcon(icon: StackIconKey) {
  const Icon = iconRegistry[icon];
  if (!Icon) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[stack] Unknown icon key: ${icon}`);
    }
    return Database as StackIconComponent;
  }
  return Icon;
}
