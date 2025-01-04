
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="primary" align="center" >
        {'Copyright © '}
        <Link color="primary" href="#">
          <div className='text-center'>
          Waithaka, Nairobi, Kenya. Phone Number: +254 714774503. Email: kagwaithakamission@gmail.com
Copyright © 2024 KAG Waithaka Mission Center

          </div>
          {' '}
          {new Date().getFullYear()}
        {'.'}

      
        </Link>
      </Typography>
    );
  }


  export default Copyright