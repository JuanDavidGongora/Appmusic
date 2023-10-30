import { Link, useNavigate } from "react-router-dom"
import ContainerAuth from "../components/layouts/ContainerAuth"
import { axiosMusic } from "../utils/configAxios";

const Register = () => {
  const navigate = useNavigate()

const handleSubmit  = (e) => {
  e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
   

    axiosMusic
    .post ("/api/auth/register", data)
    .then(() => {
      alert("Usuario registrado correctamente, ingresa en el login");
      navigate("/login");
    })
    .catch((err) => console.log(err))

};


  return (
      <ContainerAuth>

        {/*Baner de imagen*/}
        <div className="hidden md:block ">
          <img src="/images/bannerRegister.png" alt="" />
        </div>

        {/*Formulario*/}
        <form 
        onSubmit={handleSubmit}
        className="[&>label]:grid [&>label]:gap-7
         grid gap-6 w-[min(100%,300px)] mx-auto items-center">
          <h1 className="text-3xl uppercase font-semibold">Cuenta Nueva</h1>

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
          text-sm">Nombre de usuario</span>
          <input className="bg-transparent border-b
           border-secondary outline-none" type="text" 
           name="name"
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
         text-sm" type="submit"> Crear </button>
         <Link className="text-center underline" to="/login">O iniciar sesión </Link>

        </form>
        </ContainerAuth>
  )
}

export default Register