import { useEffect, useState } from 'react';

const UserRegistration = () =>{
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    const userdata = {fname, lname};
    localStorage.setItem('userdata', JSON.stringify(userdata));
    setFname("");
    setLname("");
    //alert('userdata has been saved');
    
  }

  return(
    <UserForm
      fname={fname}
      lname={lname}
      handleSubmit={handleSubmit}
      setFname={setFname}
      setLname={setLname}
    />
  )

}

const UserForm = ({ fname, lname, setFname, setLname, handleSubmit }) =>{
  return (
    <form onSubmit={handleSubmit}>
    <div className='userform'>
      <input 
        name="firstname" 
        placeholder='firstname' 
        type='text'
        value={fname} 
        onChange={(e)=> setFname(e.target.value)}/>
      <input 
        name="lastname" 
        placeholder='lastname' 
        type='text'
        value={lname} 
        onChange={(e)=> setLname(e.target.value)}/>
      <button type='submit'> add data </button>
    </div>
    </form>
  )
}

export default UserRegistration;