import { LucideIcon } from "lucide-react";

type NotFound = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

export default function NotFound({ Icon, title, description }: NotFound) {
  return (
    <div className="flex flex-col items-center justify-center gap-2  w-full h-full">
      <Icon className="w-24 h-24" />
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
