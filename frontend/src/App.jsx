import React from "react"
import { ToggleTheme } from "./components/Themes"
import { ThemedContainer } from "./components/ThemedContainer"


export default function App() {
  return (
    <div className="flex justify-center items-center h-screen gap-5">
      <ToggleTheme />
      <ThemedContainer />
    </div>
  )
}