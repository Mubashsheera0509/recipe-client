import React from "react";

const AddRecipe = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "500px", // Increased width for better layout
          maxHeight: "80vh", // Prevents overflow
          overflowY: "auto", // Enables scrolling if content exceeds height
          border: "2px solid yellow",
        }}
      >
        <h2 className="text-center mb-3">Add Recipe</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input type="text" className="form-control" id="title" required />
          </div>
          <div className="mb-3">
            <label htmlFor="instruction" className="form-label">
              Instructions
            </label>
            <textarea
              className="form-control"
              id="instruction"
              rows="3"
              required
            ></textarea>
          </div>
          
          {/* Ingredients & Quantity in Two Columns */}
          <div className="row">
            <div className="col-6">
              <label className="form-label">Ingredients</label>
              <input type="text" className="form-control mb-2" placeholder="Ingredient 1" required />
              <input type="text" className="form-control mb-2" placeholder="Ingredient 2" required />
              <input type="text" className="form-control mb-2" placeholder="Ingredient 3" required />
              <input type="text" className="form-control mb-2" placeholder="Ingredient 4" required />
            </div>
            <div className="col-6">
              <label className="form-label">Quantities</label>
              <input type="text" className="form-control mb-2" placeholder="Quantity 1" required />
              <input type="text" className="form-control mb-2" placeholder="Quantity 2" required />
              <input type="text" className="form-control mb-2" placeholder="Quantity 3" required />
              <input type="text" className="form-control mb-2" placeholder="Quantity 4" required />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="imgUrl" className="form-label">
              Image URL
            </label>
            <input type="text" className="form-control" id="imgUrl" required />
          </div>

          {/* Centered Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary mt-3">
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
