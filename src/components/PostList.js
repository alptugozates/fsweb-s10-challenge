import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { notlariSifirla } from "../actions";
import { toast } from "react-toastify";

const PostList = () => {
  const notlar = useSelector(state => state.notlar);
  const dispatch = useDispatch();
  console.log("notlar", notlar)

  useEffect(() => {
    localStorage.setItem("s10ch", JSON.stringify(notlar))
  }, [notlar])

  const tumNotlarıSifirla = () => {
    dispatch(notlariSifirla())
    toast.success('Tüm notlar sıfırlandı', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
        onClick={tumNotlarıSifirla}
      >
        Listeyi Temizle
      </button>
    </div>
  );
};

export default PostList;
