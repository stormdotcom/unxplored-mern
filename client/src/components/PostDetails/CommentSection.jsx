import React, {useState, useRef} from 'react';
import { Typography, Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { commentPost} from "../../actions/posts"
import useStyles  from "./styles";

function CommentSection( {post}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [comments, setComments]= useState(post?.comments);
    const [comment, setComment] = useState("");
    const user = JSON.parse(localStorage.getItem("profile"));
    const commentsRef = useRef()

    const handleClickComment = async ()=> {
       const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));


       setComments(newComments);
       setComment("");
       commentsRef.current.scrollIntoView({behavior: "smooth"})
    }
    return (
        <div>
           <div className={classes.commentsOuterContainer}>
               <div className={classes.commentsInnerContainer} >
                    <Typography gutterBottom variant="subtitle1"> Comments</Typography>
                    {comments && (
                    comments.map((c, i)=> (
                        <Typography key={i} gutterBottom variant="subtitle2" >
                            <strong>{c.split(": ")[0]}  </strong> 
                             {c.split(": ")[1]}
                        </Typography>
                                            ))
                    )}

                    <div ref={commentsRef}> </div>
               </div>
               {user?.result?.name && (
                <div style={{width: "50%", leftMargin: "3rem"}}>
                <Typography gutterBottom variant="subtitle1"> Write a comment</Typography> 
                <TextField fullWidth row={4} variant="outlined" label="Comment" multiline 
                value={comment}
                onChange={(e) => setComment(e.target.value)} /> 
                <Button style={{marginTop: "10px"}} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleClickComment} > Comment 
                </Button>
                </div>
               )}


           </div>
        </div>
    )
}

export default CommentSection;
