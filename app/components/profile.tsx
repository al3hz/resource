import Image from "next/image";
import profile from "../../public/imagenes/iconos/Foto de perfil/Foto de perfil.jpg";

export default function Profile() {
  return (
    <div className="text-center mt-5">
      <Image src={profile} alt="Profile picture" className="foto-de-perfil" />
    </div>
  );
}
