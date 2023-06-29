import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({icon : Icon, label, active, href}) => {
  return (
    <Link href={href} className={twMerge(`flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer transition text-neutral-400 py-1 hover:text-white`, active && "text-white")}>
			<Icon size={26}></Icon>
			<p className="truncate w-full">{label}</p>
		</Link>
  )
}

export default SidebarItem;