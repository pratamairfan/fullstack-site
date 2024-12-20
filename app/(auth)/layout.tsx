import { ThemeProvider } from "@/components/ui/theme-provider";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="bg-[url('/images/pattern.svg')]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
        <div className="w-full max-w-md py-4 text-foreground">
          <Link href="/" className="hover:underline hover:text-teal-500">
            ⇤ <span>back</span>
          </Link>
        </div>
          <div className="w-full bg-background rounded-lg shadow-md mt-0 max-w-md">
            {children}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AuthLayout;
