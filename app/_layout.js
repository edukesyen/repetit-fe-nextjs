import { SideNav } from './_sections/SideNav';
import { SideBarRight } from './_sections/SideBarRight';

export function DashboardLayout({children}) {
  return (
    <main className="min-h-dvh flex">
      <div className="flex-none  max-w-[256px] min-h-dvh">
        <SideNav />
      </div>
      <div className="flex-1 max-w-3xl mx-auto px-8 py-12 ">
        {children}
      </div>
      <div className="flex-none w-[500px]">
        <SideBarRight />
      </div>
    </main>
  );
}