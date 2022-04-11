import { alpha, makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  
  title: {
    display: 'none',
    //color:'Black',
    
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.20),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.18) },
    marginRight: theme.spacing(100),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(2), width: 'auto' },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    //color:'black',
    height: '100%',
    position: 'absolute', 
    pointerEvents: 'none', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'white',
  },
  inputInput: {
    padding: theme.spacing(2, 6, 2, 0), 
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, 
    transition: theme.transitions.create('width'), 
    width: '100%', 
    [theme.breakpoints.up('md')]: { width: '25ch' },
  },
  toolbar: {
    display: 'flex', 
    justifyContent: 'space-between',
    //backgroundColor: 'lightGreen',
    
  },
}));