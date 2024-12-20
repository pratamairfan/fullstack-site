import { signIn } from "@/auth";
import { Button } from "./button";
import Link from "next/link";

export function SignIn() {
  return (
    <Link href="/sign-in">
      <Button variant="link" type="submit" className="hover:text-teal-500">
        Sign in
      </Button>
    </Link>
  );
}

export function SignUp() {
  return (
    <Link href="/sign-up">
      <Button variant="custom" type="submit">
        Sign up
      </Button>
    </Link>
  );
}