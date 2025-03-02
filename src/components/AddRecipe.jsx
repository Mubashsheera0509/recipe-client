import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const navigate = useNavigate();
  const { addRecipe } = useContext(AppContext);

  const [formData, setFormData] = useState({
    title: "",
    ist: "",
    ing1: "",
    ing2: "",
    ing3: "",
    ing4: "",
    qty1: "",
    qty2: "",
    qty3: "",
    qty4: "",
    imgurl: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await addRecipe(
      formData.title,
      formData.ist,
      formData.ing1,
      formData.ing2,
      formData.ing3,
      formData.ing4,
      formData.qty1,
      formData.qty2,
      formData.qty3,
      formData.qty4,
      formData.imgurl
    );

    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <ToastContainer />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div
          className="card p-4 shadow-lg"
          style={{ width: "500px", maxHeight: "80vh", overflowY: "auto", border: "2px solid yellow" }}
        >
          <h2 className="text-center mb-3">Add Recipe</h2>
          <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" name="title" value={formData.title} onChange={onChangeHandler} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Instructions</label>
              <textarea className="form-control" name="ist" rows="3" value={formData.ist} onChange={onChangeHandler} required></textarea>
            </div>
            <div className="row">
              <div className="col-6">
                <label className="form-label">Ingredients</label>
                {["ing1", "ing2", "ing3", "ing4"].map((ing, index) => (
                  <input key={index} type="text" className="form-control mb-2" name={ing} value={formData[ing]} onChange={onChangeHandler} placeholder={`Ingredient ${index + 1}`} required />
                ))}
              </div>
              <div className="col-6">
                <label className="form-label">Quantities</label>
                {["qty1", "qty2", "qty3", "qty4"].map((qty, index) => (
                  <input key={index} type="text" className="form-control mb-2" name={qty} value={formData[qty]} onChange={onChangeHandler} placeholder={`Quantity ${index + 1}`} required />
                ))}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input type="text" className="form-control" name="imgurl" value={formData.imgurl} onChange={onChangeHandler} required />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary mt-3">Add Recipe</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
