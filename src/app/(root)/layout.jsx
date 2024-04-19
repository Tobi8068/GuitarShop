import FooterComponent from "@/components/RootComponent/FooterComponent";
import HeaderComponent from "@/components/RootComponent/HeaderComponent";
import MobileComponent from "@/components/Design/MobileComponent/MobileComponent";


export default function RootLayout({
    children,
  }) {
    return (
      <div className="dark:bg-gray-900 ">
        <HeaderComponent/>
        {children}
        <MobileComponent/>
        <FooterComponent/>
      </div>
    )
  }