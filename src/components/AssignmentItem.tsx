import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export type Assignment = {
  id: string;
  title: string;
  description: string;
  images: string[];
  expiredDate: string;
  status: string;
};

const AssignmentItem = ({ assignment }: { assignment: Assignment }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          <p>{assignment.title}</p>
          <p className="text-sm">Expired date: {assignment.expiredDate}</p>
        </CardTitle>
        <CardDescription>{assignment.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row gap-2 justify-start items-center flex-wrap">
        {assignment.images.map((image) => (
          <img key={image} src={image} alt={image} className="w-32" />
        ))}
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Edit</Button>
      </CardFooter>
    </Card>
  );
};

export default AssignmentItem;
