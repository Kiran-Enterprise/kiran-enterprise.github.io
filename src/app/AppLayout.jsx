import { Outlet } from "react-router-dom";
import { Navbar, Footer, WhatsAppFab } from "@/shared/components";
import { useScrollToTop } from "@/shared/hooks";

export function AppLayout() {
  useScrollToTop();

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
