import Profile from "./components/profile";
import "bootstrap/dist/css/bootstrap.min.css";
import Nombre from "./components/nombre";
import Descripcion from "./components/descripcion";
import IconosSociales from "./components/iconosSociales";
import Allmy from "./components/allmy";
import Links from "./components/links";

export default function Home() {
  return (
    <>
      <div>
        <div className="imagen-fondo"></div>
        <div className="fade-in">
          <Profile />
          <Nombre />
          <Descripcion />
          <IconosSociales />
          <Allmy />
          <Links />
        </div>
      </div>
    </>
  );
}
