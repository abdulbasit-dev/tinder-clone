import React, {useState} from 'react'
import firebase from 'firebase'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import {makeStyles} from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Box,
  Button,
  Link,
  Avatar,
  CssBaseline,
  TextField,
} from '@material-ui/core'
import {db} from '../firebase'
import {useHistory} from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function AddCard() {
  const history = useHistory()

  const [info, setInfo] = useState({
    name: '',
    url: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    if (info.name !== '' && info.url !== '') {
      db.collection('people').add({
        name: info.name,
        url: info.url,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      history.push('/')
      setInfo({name: '', url: ''})
    } else {
      alert('please fill both field')
    }
  }

  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddCircleIcon fontSize='large' />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Add New Card
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            label='name'
            name='name'
            autoComplete='name'
            autoFocus
            type='text'
            value={info.name}
            onChange={e => setInfo({...info, name: e.target.value})}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            value={info.url}
            onChange={e => setInfo({...info, url: e.target.value})}
            name='url'
            label='url'
            type='text'
            id='url'
            autoComplete='current-password'
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Add
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

// export default AddCard
