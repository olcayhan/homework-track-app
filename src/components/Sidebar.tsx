import { Link } from "react-router-dom";
import { Book, File, Paperclip, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import useRole from "@/hooks/useRole";

export default function Sidebar() {
  const { role } = useRole();
  const navItems = [
    {
      icon: Book,
      title: "Courses",
      href: "/",
      roles: ["student", "teacher"],
    },
    {
      icon: File,
      title: "Assignments",
      href: "/assignment",
      roles: ["student", "teacher"],
    },
    {
      icon: Paperclip,
      title: "Submissions",
      href: "/submission",
      roles: ["student"],
    },
    {
      icon: User,
      title: "Profile",
      href: "/profile",
      roles: ["student", "teacher"],
    },
  ];
  return (
    <div className="relative w-72 p-4 h-full flex flex-col justify-between items-center border-r border-neutral-950">
      <div className="sticky top-4 w-full space-y-4">
        <div className="flex items-center">
          <span className="ml-2 text-lg font-semibold">Homework App</span>
        </div>
        <nav className="space-y-2">
          {navItems
            .filter((item) => item.roles.includes(role))
            .map((item) => (
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
