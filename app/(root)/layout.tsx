import { NavbarAdmin, NavbarUser } from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { ThemeProvider } from "@/components/ui/theme-provider";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  // const { data } = useSWR(`/api/auth/user/role`, fetcher);
  // const [data, setData] = useState<UserData>();
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await getUserRole();
  //     if (res && typeof res === "object" && "role" in res) {
  //       setData(res as UserData);
  //     }
  //   };
  //   setIsClient(true);
  //   fetchData();
  // }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col items-center gap-4 justify-center">
        <div className="flex flex-col justify-between gap-7 w-full">
          <Header />
          <div className="flex w-full justify-between">
            <aside className="w-1/4 px-8 hidden lg:block sticky top-20 h-full">
              <NavbarUser />
            </aside>
            <main className="px-8 lg:w-3/4 w-full">{children}</main>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
