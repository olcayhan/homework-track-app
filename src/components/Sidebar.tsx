import { Link } from "react-router-dom";
import { Book, User } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const navItems = [
    {
      icon: Book,
      title: "Courses",
      href: "/",
    },
    {
      icon: User,
      title: "Profile",
      href: "/profile",
    },
  ];
  return (
    <div className="relative w-72 p-4 h-full flex flex-col justify-between items-center border-r border-neutral-950">
      <div className="sticky top-4 w-full space-y-4">
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
