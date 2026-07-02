import { Outlet } from "react-router-dom";
import { PortfolioTocRail } from "@/components/PortfolioRightNav";

export function PortfolioLayout() {
  return (
    <div className="mx-auto flex w-full max-w-[min(1200px,calc(100%-2rem))] flex-col gap-6 px-4 pb-24 pt-[4.5rem] md:flex-row md:gap-8 md:px-6 md:pb-20 md:pt-[5.5rem] print:max-w-none print:p-0">
      <main className="min-w-0 flex-1">
        <Outlet />
      </main>
      <PortfolioTocRail />
    </div>
  );
}
