import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import ProfileForm from "@/components/profile/ProfileForm";

export default function Profile() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-3">
      <div className="w-full max-w-3xl py-6">
        <Alert variant="default" className=" mb-6">
          <AlertDescription className="flex flex-row justify-start items-center">
            <Info className="h-4 w-4 mr-2" />
            Changes to your profile will apply to all of your workspaces.
          </AlertDescription>
        </Alert>
        <ProfileForm />
      </div>
    </div>
  );
}
