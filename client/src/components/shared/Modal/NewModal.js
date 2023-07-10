import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputType from "../SharedForm/InputType";
import API from "../../../services/API";

function NewModal({ openBloodModal, setOpenBloodModal }) {
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState();
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("6496db47913a7258bdd7ebe6");
  const { user } = useSelector((state) => state.auth);

  //hnadle modal data

  const handleModalSubmit = async () => {
    try {
      if (!bloodGroup || !quantity) {
        return alert("Please Provide All Fields");
      }
      const { data } = await API.post("/inventory/create-inventory", {
        email,
        organisation,
        donor: user?._id,
        inventoryType,
        bloodGroup,
        quantity,
      });
      if (data?.success) {
        alert("New Record Created");
        setQuantity("");
        setEmail("");
        setBloodGroup("");

        setOpenBloodModal(false);
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  const closeModal = () => {
    setOpenBloodModal(false);
  };

  return (
    <div
      className={`w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 ${
        openBloodModal ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <div className="bg-white p-10 rounded-md shadow-md">
        <h1 className="font-bold text-center text-lg mb-3">
          Manage Blood Records{" "}
        </h1>
        <hr />
        <form>
          <h2 className="my-3">Blood Type:</h2>
          <div className="flex gap-4 justify-center my-3">
            <div>
              <input
                type="radio"
                defaultChecked
                value={"in"}
                onChange={(e) => setInventoryType(e.target.value)}
              />
              <label> IN</label>
            </div>
            <div>
              {" "}
              <input
                type="radio"
                name="inRadio"
                value={"out"}
                onChange={(e) => setInventoryType(e.target.value)}
              />
              <label> OUT</label>
            </div>
          </div>
          <select
            className="mb-3 p-2 border rounded-md outline-none lg:w-full"
            aria-label="Default select example"
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option defaultValue={"Open this select menu"} className="p-3">
              Choose Blood Type
            </option>
            <option value={"O+"}>O+</option>
            <option value={"O-"}>O-</option>
            <option value={"AB+"}>AB+</option>
            <option value={"AB-"}>AB-</option>
            <option value={"A+"}>A+</option>
            <option value={"A-"}>A-</option>
            <option value={"B+"}>B+</option>
            <option value={"B-"}>B-</option>
          </select>

          <InputType
            placeholder="Donor Email"
            inputType="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputType
            placeholder={"Quanitity in ML"}
            inputType={"Number"}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </form>

        <div className="flex justify-between gap-4 mt-5">
          <button
            className=" w-32 bg-rose-500 hover:bg-rose-700 text-white font-semibold py-2 px-4  rounded-md"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className=" w-32 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4  rounded-md"
            onClick={handleModalSubmit}
          >
            Add blood
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewModal;

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//         onClick={openModal}
//       >
//         Open Modal
//       </button>

//       <Modal isOpen={isOpen} onClose={closeModal} title="Sample Modal">
//         <p>This is a sample modal content.</p>
//         <p>You can add any content you want here.</p>
//         <button
//           className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mt-4"
//           onClick={closeModal}
//         >
//           Close Modal
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default App;
