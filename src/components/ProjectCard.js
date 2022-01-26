import React from "react";
// import placeholder from "http://placecorgi.com/260/180";
export default function ProjectCard() {
  return (
    <div className="card ">
      <div className="card-header">Project x</div>
      {/* <button data-bs-toggle="collapse" data-bs-target="#demo">
        Collapsible
      </button>

      <div id="demo" class="collapse">
        Lorem ipsum dolor text....
      </div> */}
      {/* <div className="card-body">Content</div> */}
      <div className="card-img-bottom">
        <img
          src="http://placecorgi.com/640/360"
          className="card-img-top rounded"
          alt="..."
        />
      </div>
    </div>
    // <div className="card m-3 text-white" style={{width: "150px"}}>
    //   <img src="http://placecorgi.com/640/360" className="card-img-top rounded" alt="..." />
    //   <div className="card-body">
    //     <p className="card-text">
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </p>
    //   </div>
    // </div>
  );
}
