import React from "react";
import Usefetch from "./UseFetch";

function ProductPage() {
  const { vijay } = Usefetch("https://fakestoreapi.com/products");

  return (
    <div>
      <div className="row">
        {vijay.map((da) => (
          <div class="card col-3">
            <img class="card-img-top h-50 w-50 "  src={da.image} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title"> {da.title} </h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
