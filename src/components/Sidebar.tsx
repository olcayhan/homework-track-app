import { Link } from "react-router-dom";
import { File, Home, School, User } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const navItems = [
    {
      icon: Home,
      title: "Assignments",
      href: "/",
    },
    {
      icon: File,
      title: "Submissions",
      href: "/submission",
    },
    {
      icon: User,
      title: "Students",
      href: "/student",
    },
    {
      icon: School,
      title: "Courses",
      href: "/course",
    },
  ];
  return (
    <div className="w-64 p-4 h-full flex flex-col justify-between items-center border-r border-neutral-950">
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="ml-2 text-lg font-semibold">Homework App</span>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={"ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link to={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
}
