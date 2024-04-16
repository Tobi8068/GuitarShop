import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import MobileComponent from "@/components/MobileComponent/MobileComponent";


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