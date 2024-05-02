import{useState} from 'react'


function Registerpage() {
    // State management
    // format(variable.changing var)=state
    const [firstName,setFirstname]=useState('');
    const [lastNamer,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

  // State for handeling error
    const [firstNameError,setFirstnameError]=useState();
    const [lastNamerError,setLastnameError]=useState();
    const [emailError,setEmailError]=useState();
    const [passwordError,setPasswordError]=useState();

    // MAke a funciton to save the state
    const handelFirstName =(e)=>
    {
      setFirstname(e.target.value)
    }
    const handelLastName =(e)=>
    {
      setLastname(e.target.value)
    }
    const handelEmail =(e)=>
    {
      setEmail(e.target.value)
    }
    const handelPassword =(e)=>
    {
      setPassword(e.target.value)
    }

    const validate=()=>{
      var isValid=true;
      if(firstName.trim()===''){
        setFirstnameError('please enter first name')
        isValid=false;
      }
      if(lastNamer.trim()===''){
        setLastnameError('please enter last name')
        isValid=false;
      }
      if(email.trim()===''){
        setEmailError('please enter email')
        isValid=false;
      }
      if(password.trim()===''){
        setPasswordError('please enter password')
        isValid=false;
      }
      return isValid;
    } 


    // For button
    const handelSubmit=(e)=>{
      e.preventDefault();
      const isvalid = validate();
      if(!isvalid){
        return
      }
      // console.log(firstName,lastNamer,email,password);
    }


  return (
    <>
    <div className='m-3 align-items-center m-auto d-flex flex-column justify-content-center'>
    <h1>Register</h1>
    <div className="d-flex">
      <form action="">
        <label  htmlFor="">First Name: </label>
        <input onChange={handelFirstName} type="text" className='form-control ' placeholder='Enter your First Name'/>
        {
          firstNameError && <p className='text-danger'>{firstNameError}</p>
        }

        <label className='mt-2' htmlFor="">last Name</label>
        <input onChange={handelLastName} type="text" className='form-control' placeholder='Enter your Last Name'/>
        {
          lastNamerError && <p className='text-danger'>{lastNamerError}</p>
        }
        <label className='mt-2' htmlFor="">Email</label>
        <input onChange={handelEmail} type="email" className='form-control' placeholder='Enter your Email'/>
        {
          emailError && <p className='text-danger'>{emailError}</p>
        }
        <label className='mt-2' htmlFor="">Password</label>
        <input onChange={handelPassword} type="text" className='form-control' placeholder='Enter your Password'/>
        {
          passwordError && <p className='text-danger'>{passwordError}</p>
        }
        <button onClick={handelSubmit} className='btn btn-outline-danger'>Register</button>
        </form>
    </div>  

    </div>
    </>
  )
}

export default Registerpage
