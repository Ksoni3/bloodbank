import React, { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import { AiFillPlusSquare } from "react-icons/ai";
import NewModal from "../../components/shared/Modal/NewModal";

const Homepage = () => {
  const [openBloodModal, setOpenBloodModal] = useState(false);
  const { loading, error } = useSelector((state) => state.auth);

  const handleOpenBloodModal = () => {
    setOpenBloodModal(true);
  };
  return (
    <Layout>
      {error && <span> {error} </span>}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div
          className="my-10 py-2 pl-5 text-3xl font-semibold flex items-center gap-3 w-60 cursor-pointer"
          onClick={handleOpenBloodModal}
        >
          <AiFillPlusSquare className="text-5xl text-blue-500 " />
          Add blood
        </div>
      )}
      <NewModal
        openBloodModal={openBloodModal}
        setOpenBloodModal={setOpenBloodModal}
      />
    </Layout>
  );
};

export default Homepage;
