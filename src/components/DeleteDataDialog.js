import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogTitle
} from '@mui/material';
import {useEffect} from 'react';

function DeleteDataDialog(props){
  const {
    dstrg,
    strg,
    set,
    navigate,
    _
  } = window.web;
  const deleteData = e => {
    window.localStorage.clear();
    navigate('/');
  };
  return (
    <Dialog
      open={props.open}
      fullWidth>
      <DialogTitle children={_('delete_data')}/>
      <DialogContent children={_('delete_data_msg')}/>
      <DialogActions>
        <Button
          variant="text"
          children={_('cancel')}
          onClick={props.onClose}/>
        <Button
          variant="text"
          children={_('delete')}
          onClick={deleteData}/>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDataDialog;
