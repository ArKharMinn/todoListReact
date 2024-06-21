import React from "react";

const Cart = ({ tasks,deleteBtn,updateTask }) => {
  const deleteBtnHandling = (id) => {
    if ( window.confirm("Are you sure you want to delete this task?")) {
      deleteBtn(id)
    }
  }
  const updateBtnHandling = (id, status) => {
    updateTask(id,status)
  }
  return (
    <div>
      <div className="mt-3">
        {tasks.map((tasks, index) => (
          <div key={index} className={tasks.status === true ?
            'row border shadow-sm rounded py-2 my-2 bg-success text-decoration-line-through text-white'
            : 'row border shadow-sm rounded py-2 my-2'}>
            <div className="col-1">
              <input type="checkbox" className="" checked={tasks.status}
                onClick={() => updateBtnHandling(tasks.id, !tasks.status)} />
            </div>
            <h5 className="col ps-5">{tasks.task }</h5>
            <button className="col-1 btn " onClick={()=>deleteBtnHandling(tasks.id)}>
              <i className="fa-solid fa-square-xmark text-danger"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
