"use client"

import { ThemeProvider } from "next-themes"

interface ThemeProviderProps {
  children: React.ReactNode
}

export function Providers(props: ThemeProviderProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {props.children}
    </ThemeProvider>
  )
}
