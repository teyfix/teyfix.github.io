import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function NotFound() {
  return (
    <div className="grid place-items-center h-screen w-screen">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>Not found</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The page you are looking for does not exist
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
