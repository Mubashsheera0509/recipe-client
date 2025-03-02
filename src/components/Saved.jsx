import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import FetchRecipeById from "./FetchRecipeById";

const Saved = () => {
  const { savedRecipe } = useContext(AppContext);
  console.log(savedRecipe);

  return (
    <div className="container my-5">
      <h2 className="text-center text-light mb-4">Saved Recipes</h2>
      {savedRecipe?.length === 0 ? (
        <p className="text-center text-muted">No saved recipes yet.</p>
      ) : (
        <div className="row justify-content-center">
          {savedRecipe.map((data) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={data.recipe}>
              <div className="card recipe-card">
                <FetchRecipeById id={data.recipe} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;
