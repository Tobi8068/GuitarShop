import SidebarComponent from "@/components/RootComponent/SidebarComponent";
import { ThemeSwitcher } from "@/components/UI/ThemeSwitch";

export default function RootLayout({
    children,
  }) {
    return (
        <>
            <SidebarComponent/>
            <div className="sm:ml-64 dark:bg-gray-900">
                <div className="w-full bg-gray-100 dark:bg-gray-900 dark:border-b border-gray-700 py-4 px-8 flex justify-end gap-3">
                    <div className="text-3xl grid items-center">
                        <ThemeSwitcher/>
                    </div>
                    <div className="rounded-full aspect-square bg-gray-200 w-12"></div>
                </div>
                <div className="px-8 py-5">
                    {children}
                </div>
            </div>
        </>
    )
  }