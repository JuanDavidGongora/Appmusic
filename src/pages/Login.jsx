import { Link, useNavigate } from "react-router-dom"
import ContainerAuth from "../components/layouts/ContainerAuth"
import { loginThunk } from "../store/slices/user.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

 const token = useSelector((store)=> store.user.token);

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
 
dispatch(loginThunk(data));

};

useEffect(()=>{
  if(token !== ""){
    //? Ya el usuario esta logeado
    navigate("/");
  }

}, [token]);


  return (
    <ContainerAuth>
       {/*Baner de imagen*/}
       <div className="hidden md:block ">
          <img src="/images/bannerLogin.png" alt="" />
        </div>

        {/*Formulario*/}
        <form
        onSubmit={handleSubmit}
        
        className="[&>label]:grid [&>label]:gap-7
         grid gap-6 w-[min(100%,300px)] mx-auto items-center">
          <h1 className="text-3xl uppercase font-semibold">Iniciar sesión </h1>

         <label>
          <span className="text-white/50
          text-sm" >E-mail</span>
          <input className="bg-transparent border-b
           border-secondary outline-none" type="email" 
           name="email"
           />
         </label>


         <label >
          <span className="text-white/50
          text-sm">Contraseña</span>
          <input className="bg-transparent border-b
           border-secondary outline-none" type="password" 
           name="password"
           />
         </label>

         <button className="bg-primary-light hover:bg-primary-dark rounded-full py-1 px-10
          max-w-max mx-auto uppercase font-semibold shadow-lg shadow-purple-400/40 
          hover:tracking-widest transition-all mt-6
         text-sm" type="submit"> Entrar </button>
         <Link className="text-center underline" to="/register">O crear una cuenta nueva</Link>

        </form>
    </ContainerAuth>
  )
}

export default Login