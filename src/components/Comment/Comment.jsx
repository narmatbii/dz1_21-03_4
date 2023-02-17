import classes from './comment.module.css'

function Comment(props) {
    return (
        <div className={classes.comment}>
          <h1>{props.title}</h1>
        </div>
    )
}


export default Comment;