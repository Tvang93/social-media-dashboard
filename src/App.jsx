import { useState } from 'react'
import './App.css'
import './index.css'
import DashboardComponent from './components/dashboardComponent'
import { DarkThemeToggle, Flowbite } from "flowbite-react";

function App() {

  return (
    <>
    <Flowbite>
      <DashboardComponent />
      <DarkThemeToggle />
    </Flowbite>
      
    </>
  )
}

export default App
