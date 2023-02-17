import classes from './button.module.css'
const Button = ({ title }) =>  {
    return (
        <div className={classes.button}>
           <button className='button'>{title}</button>
        </div>
    )
  }
  
  
  
  export default Button;