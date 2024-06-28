import { SideNav, Header } from "./_components";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }) {
  return (
    <div className="w-full">
      <div className="md:w-72 fixed md:block hidden">
        <SideNav />
      </div>
      <div className="ml-72">
        <Header />
        {children}
        <Toaster />
      </div>
    </div>
  );
}
