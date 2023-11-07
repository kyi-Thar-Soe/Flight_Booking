import './Modal.css';
import { Modal } from "@mui/material";
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { FormGroup } from '@mui/material';
import Box from '@mui/material/Box';
import {  useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #eceff4',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};
export default function ModalPage({open,login,register,handleSubmit,handleClose,errors,onSubmit}){
  const [showPassword,setShowPassword] = useState(false);
  const [inputUsername, setInputUsername] = useState('');

    return(
        <>
          <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style} className='loginAndRegister'>
              <form onSubmit={handleSubmit((data) => onSubmit(data, login ? "Log in" : "Sign Up"))}>
                <h1 className='text-primary fw-bold mb-4 fs-3'>{login ? "Log in" : "Sign Up"}</h1>
                <FormGroup className='formGroup'>
                  <label className='labels'>Name</label>
                <input type='text' placeholder='Enter Your Name' className='form-control textfield-control'
                onChange={(e) => setInputUsername(e.target.value)}
                name="text"
                  {...register("text", { required: true })}/>
                  {errors.text && <span className='text-danger'>This field is required</span>}
                  <br/>
                </FormGroup>
                <FormGroup className='formGroup'>
                  <label className='labels'>Email</label>
                  <input type='email'  placeholder='Enter your Email' className='form-control textfield-control'
                  {...register("email", { required: true })}/>
                  {errors.email && <span className='text-danger'>This field is required</span>}
                  <br/>
                </FormGroup>
                <FormGroup>
                  <label className='labels'>Password</label>
                  <input type={showPassword ? 'text' : 'password'}  placeholder='Enter Your Password' className='form-control
                  textfield-control'
                  {...register("password", { required: true })}/>
                  {errors.password && <span className='text-danger'>This field is required</span>}<br/>
                </FormGroup>
                 <FormGroup className='d-flex flex-row mt-2 mb-4'>
                 <input type='checkbox' onChange={()=>setShowPassword((prePassword)=>(!prePassword))}/>
                 <span className='ms-2'>Show Password</span>
                 </FormGroup>
                 <button className='btn btn-primary w-100'>{login ? "Log in" : "Sign Up"}</button>
              </form>
               
              </Box>
            </Fade>
          </Modal>
          </div>
        </>
    )
}