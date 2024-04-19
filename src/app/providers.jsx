'use client'
// dark mode provider 
import { ThemeProvider } from "next-themes"

export function Providers({children}){
    return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}</ThemeProvider>
}