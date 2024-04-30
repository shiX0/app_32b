import{useState} from 'react'


function Registerpage() {
    // State management
    // format(variable.changing var)=state
    const [firstName,setFirstname]=useState();
    const [lasrNamer,setLastname]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    // MAke a funciton to save the state
    const handelFirstName =(e)=>
    {
      setFirstname(e.target.value)
    }


  return (
    <>
    <div className='m-3 align-items-center m-auto d-flex flex-column justify-content-center'>
    <h1>Register</h1>
    <div className="d-flex">
      <form action="">
        <label onChange={handelFirstName} htmlFor="">First Name</label>
        <input type="text" className='form-control ' placeholder='Enter your First Name'/>
        <label className='mt-2' htmlFor="">last Name</label>
        <input type="text" className='form-control' placeholder='Enter your Last Name'/>
        <label className='mt-2' htmlFor="">Email</label>
        <input type="email" className='form-control' placeholder='Enter your Email'/>
        <label className='mt-2' htmlFor="">Password</label>
        <input type="password" className='form-control' placeholder='Enter your Password'/>
        <button className='btn btn-outline-danger'>Register</button>
        </form>
    </div>  

    </div>
    </>
  )
}

export default Registerpage
