import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Sobre from "../Pages/Sobre";
import Navbar from "../Components/Navbar";
import HomeLogado from "../Pages/HomeLogado";
import Pessoas from "../Pages/Pessoas";

export default function Router() {

  const logado = sessionStorage.getItem("logado");

  return (
    <BrowserRouter>
         <Navbar />

        <Routes>
           <Route 
            path="/" 
            element={
              sessionStorage.getItem("logado") === "true"
              ? <Navigate to="/homeLogado" />
              : <Login />
            } 
          />

           <Route 
            path="/sobre" 
            element={
              sessionStorage.getItem("logado") === "true"
              ? <Sobre />
              : <Navigate to="/" />
            } 
          />

           <Route 
            path="/homeLogado" 
            element={
              sessionStorage.getItem("logado") === "true"
              ? <HomeLogado />
              : <Navigate to="/" />
            } 
          />

          <Route
            path="/pessoas"
            element={
              sessionStorage.getItem("logado") === "true" 
              ? <Pessoas /> 
              : <Navigate to="/" replace /> 
            }
          />

          // Rota para redirecionar qualquer rota não encontrada para a página de login

          <Route path="*" element={<Navigate to="/" replace />} />
           
        </Routes>
    </BrowserRouter>
  )
}