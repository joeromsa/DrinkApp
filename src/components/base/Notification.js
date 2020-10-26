/*
* Notification component displays notification about events.
* message- string containing the message to be displayed.
* type- string containing the severity of the message dictating the color of the notification.
*/

import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

const Notification = ({ message, type }) => {
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false)
    }

    if (message === null) {
      return null
    }

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    )
  }

export default Notification