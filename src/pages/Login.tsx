import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/Auth";
import useAuth from "@/hooks/useAuth";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ExclamationTriangleIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function Login() {
  const [error, setError] = useState<Error | null>();
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data: any) => {
      setAuth(data);
      navigate("/");
      form.reset();
    },
    onError(error) {
      setError(error);
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null);
    mutate(values);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            {error && (
              <Alert variant="destructive">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>{error.name}</AlertTitle>
                <AlertDescription>{error.message}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isPending} type="submit" className="w-full">
                {isPending && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Sign In
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 hidden sm:inline-block">
              Don&apos;t have an account?
            </span>
            <Link
              to="/signup"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Sign up
            </Link>
          </div>
          <Link
            to="/forgot-password"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Forgot password?
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
