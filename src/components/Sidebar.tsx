import { Link } from "react-router-dom";
import { File, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <div className="w-64 p-4 h-full flex flex-col justify-between items-center border-r border-neutral-950">
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="ml-2 text-lg font-semibold">Homework App</span>
        </div>
        <nav className="space-y-2">
          <Button variant={"ghost"} className="w-full justify-start" asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Assignments
            </Link>
          </Button>
          <Button variant={"ghost"} className="w-full justify-start" asChild>
            <Link to="/">
              <File className="mr-2 h-4 w-4" />
              Submission
            </Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}
