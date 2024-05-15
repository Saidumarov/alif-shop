import { Adna, Fasebook, Instagram, Teligram, Tiktok } from "@/constants";
import { Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center bg-slate-900 pb-20">
        <Container maxW={"1200px"}>
          <div className="w-full flex justify-between flex-wrap items-center">
            <div className="w-[25%] h-[250px] max-[800px]:w-[50%] max-[500px]:w-[100%]">
              <p className="text-slate-500 pt-10">Hujjatlar</p>
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                Sotish uchun umumiy shartlar
              </p>
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                Ofertalar arxivi
              </p>
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                Nizom
              </p>
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                Guvohnoma
              </p>
            </div>
            <div className="w-[25%] h-[250px] max-[800px]:w-[50%] max-[500px]:w-[100%]">
              <p className="text-slate-500 pt-10">Servis</p>{" "}
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                Namoz vaqti
              </p>
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                {" "}
                Muddatli to'lov islomda
              </p>{" "}
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                alif shopda soting!
              </p>{" "}
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                Qaytarish
              </p>
            </div>
            <div className="w-[25%] h-[250px] max-[800px]:w-[50%] max-[500px]:w-[100%]">
              <p className="text-slate-500 pt-10"> Tovarlar katalogi</p>
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                Smartfonlar va telefonlar
              </p>
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                Gadjetlar
              </p>
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                Smartfonlar uchun aksessuarlar
              </p>
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                Tegishli tovarlar
              </p>
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                Soat va aksessuarlar
              </p>
            </div>
            <div className="w-[25%] h-[250px] max-[800px]:w-[50%] max-[500px]:w-[100%]">
              <p className="text-slate-500 pt-10">
                Biz ijtimoiy axborot vositalarida
              </p>
              <div className="flex gap-2 mt-5">
                <Instagram />
                <Fasebook />
                <Teligram />
                <Adna />
                <Tiktok />
              </div>
              <p className="text-slate-500 pt-5">Axborot xizmati</p>
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                @alifshop_uz
              </p>
              <p className="text-white cursor-pointer py-2 hover:text-blue-400">
                +998 555 12 12 12
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
