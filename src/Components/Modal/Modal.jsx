import React, { useState } from "react";
import "./Modal.css";
export default function Modal() {
  const [toggle, setToggle] = useState(false);

  const toggleModal = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {toggle && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                itaque quasi ipsa, cumque magni assumenda nihil consequuntur!
                Voluptas, magni quasi dolore unde asperiores quae , pariatur
                consequatur voluptates esse magnam ab distinctio quas numquam
                porro. Consequatur perferendis nisi minus quia corporis maxime
                fuga eum, enim possimus reiciendis ipsum unde harum ex.
              </p>
              <button onClick={toggleModal} className="close-modal">
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
