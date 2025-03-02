import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";

const Profile = () => {
  const { user, userRecipe } = useContext(AppContext);

  return (
    <>
      {/* User Information Section */}
      <div className="container text-center my-4">
        <div
          className="p-4 shadow-lg"
          style={{
            background: "#fff8dc", // Light yellow background
            borderRadius: "15px",
            border: "2px solid yellow",
            maxWidth: "600px",
            margin: "auto",
          }}
        >
          <h1 className="fw-bold text-dark">Welcome, {user.name} 👋</h1>
          <h4 className="text-muted">{user.gmail}</h4>
        </div>
      </div>

      {/* Recipes Section */}
      <div className="container">
        <h2 className="text-center my-4 fw-bold">Your Recipes</h2>

        {userRecipe?.length === 0 ? (
          <p className="text-center text-muted">No recipes added yet.</p>
        ) : (
          <div className="row d-flex justify-content-center">
            {userRecipe.map((data) => (
              <div key={data._id} className="col-md-4 col-sm-6 my-3">
                <div
                  className="card shadow-lg p-3"
                  style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <img
                      src={data.imgurl}
                      className="card-img-top"
                      alt={data.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{data.title}</h5>
                    <button className="btn btn-warning mt-2">View Recipe</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
