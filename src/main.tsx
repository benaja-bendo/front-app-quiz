import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {Router} from "@/routes";
import {Landing} from "@/components/Landing.tsx";
import '@/css/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={Router} fallbackElement={<Landing/>} />
  </React.StrictMode>,
)
