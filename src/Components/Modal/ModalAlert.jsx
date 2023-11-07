import './ModalAlert.css';
import { Box, Modal, Typography } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '1px solid #eceff4',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
  };
export default function ModalAlert({alert,handleAlertClose}) {
    return (
        <>
        <Modal
        open={alert}
        onClose={handleAlertClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style} className="alert-box">
          <Typography id="modal-modal-title" variant="h6" 
          component="h2" sx={{fontSize: "14px",opacity: "0.8"}}
          className='typo'>
           Your account is already use. Please log in !
          </Typography>
        </Box>
        </Modal>
        </>
    )
}