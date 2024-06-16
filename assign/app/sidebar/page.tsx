import Sidebar, { SidebarItem } from "./Sidebar"
import{
  LifeBuoy,
  Inbox,
  LayoutDashboard,
  Settings,
  Hourglass,
  Globe,
  CalendarDays,
  CopyCheck,
  ArrowLeftRight
} from "lucide-react"

export default function Navbar() {
  return (
    <main className="Home">
      <Sidebar>
        <SidebarItem  text="Location Name" alert={undefined} active={undefined} icon={<button><ArrowLeftRight /></button>}/>
        <SidebarItem icon={<Globe size={20} />} text="Time" alert={undefined} active={undefined}/>
        <SidebarItem icon={<Inbox size={20} />} text="Orders" alert active={undefined}/>        
        <SidebarItem icon={<CopyCheck size={20} />} text="Subscriptions" active={undefined} alert={undefined} />
        <SidebarItem icon={<CalendarDays size={20} />} text="Calendar" active={undefined} alert />
        <SidebarItem icon={<Hourglass size={20} />} text="Waitlist"  active alert={undefined} />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" active={undefined} alert={undefined} />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" active={undefined} alert={undefined} />
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard"  alert active={undefined} />
      </Sidebar>
    </main>
  )
}

