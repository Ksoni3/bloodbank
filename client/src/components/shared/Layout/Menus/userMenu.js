import { FaWarehouse, FaHospitalSymbol } from "react-icons/fa";
import { BiDonateBlood, BiBuildingHouse } from "react-icons/bi";

const userMenu = [
  {
    name: "Inventory",
    path: "/homepage",
    icon: <FaWarehouse />,
  },
  {
    name: "Donor",
    path: "/donor",
    icon: <BiDonateBlood />,
  },
  {
    name: "Hospital",
    path: "/hospital",
    icon: <FaHospitalSymbol />,
  },
  {
    name: "Organisation",
    path: "/organisation",
    icon: <BiBuildingHouse />,
  },
];

export default userMenu;
