import { GrUserExpert } from "react-icons/gr";
import { GiGuitarBassHead } from "react-icons/gi";
import { MdOutlineDashboardCustomize,MdOutlineSecurity } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const iconMap = {
  "GrUserExpert": GrUserExpert,
  "GiGuitarBassHead": GiGuitarBassHead,
  "MdOutlineDashboardCustomize": MdOutlineDashboardCustomize,
  "FaMoneyCheck": FaMoneyCheck,
  "MdOutlineSecurity": MdOutlineSecurity,
  "FaGoogleScholar": FaGoogleScholar
};

const ServiceComponent = ({service}) => {
const IconComponent = iconMap[service.icon];
  return (
    <div className="p-10 flex flex-col items-center text-center lg:aspect-square lg:justify-center  dark:border-gray-700 dark:border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
    <IconComponent className="text-3xl mb-4 lg:mb-10 lg:text-4xl"  /> 
    <h1 className="text-xl font-bold mb-4 ">{service.title}</h1>
    <p className="text-gray-500 dark:text-gray-400 font-semibold">
        {service.description}
    </p>
  </div>
  )
}

export default ServiceComponent