import { React } from 'react';
import { useState } from 'react';
import './RegistrationPage.css';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Textarea from '@mui/joy/Textarea';

const LoginPage = () => {
  // let history = useHistory();
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [disableSignup, setDisableSignup] = useState(false);

  const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  });

  function BpRadio(props) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }

  const onInputChange = () => {

  }

  const handleClick = () => {
    navigate("/login");
  };
  const message = () => {

    console.log(" Login Successfull");
    console.log(username);
    localStorage.setItem('userInfo', JSON.stringify({ userName: username, email: email }));
    // put navigation logic here
    // history.push('/profile');
    // window.open("/profile")

    navigate('/profilePage');
  }
  return (
    <div class="container">
      <div id="login-form">
        <h1>Registration Page</h1><br />
        <div class="input-control">
          <TextField id="outlined-basic" label="FirstName" />
          <div class="error"></div>
        </div>
        <div class="input-control">
          <TextField id="outlined-basic" label="LastName" />
          <div class="error"></div>
        </div>
        <div class="input-control">
          <TextField id="outlined-basic" label="Email" />
          <div class="error"></div>
        </div>
        <div class="input-control">
          <TextField id="outlined-basic" label="PhoneNumber" />
          <div class="error"></div>
        </div>
        <FormControl>
          <div class="input-control">
            <TextField id="outlined-basic" label="Age" />
            <div class="error"></div>
          </div>
          <FormLabel id="demo-customized-radios">Gender</FormLabel>
          <RadioGroup
            defaultValue="male"
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
          >
            <FormControlLabel value="male" control={<BpRadio />} label="Male" />
            <FormControlLabel value="female" control={<BpRadio />} label="Female" />
            <FormControlLabel value="other" control={<BpRadio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <div>
          <Textarea name="Soft" placeholder="Skills....." variant="soft" />
        </div>

        <Button variant="contained"
          type="submit"
          className="login-button"
          onClick={() => handleClick()}>Register</Button>
      </div>
    </div>
  );
}

export default LoginPage