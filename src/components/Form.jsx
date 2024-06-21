import React, {  useState } from "react";

const Form = ({submitBtn}) => {

  const [userTasks, setUserTasks] = useState('')
  const [checkStatus, setcheckStatus] = useState(false)

    const submitBtnHandling = () => {
      if (userTasks !== '') {
          submitBtn(userTasks)
        setUserTasks('')
        setcheckStatus(false)
      } else {
        setcheckStatus(true)
       }
    }
  return (
    <div className="my-5">
        <div className="row">
              <input value={userTasks} onChange={e => setUserTasks(e.target.value)} type="text"
          placeholder="Enter Tasks......" className="form-control col me-3" />
       
          <button type="submit" onClick={()=>submitBtnHandling(userTasks)} className="btn btn-primary col-2">
            <i className="fa-solid fa-plus me-1"></i>
            Add
          </button>
      </div>
      <div className={ checkStatus ? 'd-block' : 'd-none'}>
        <small className="text-danger">You must fill that field</small>
      </div>
    </div>
  );
};

export default Form;
