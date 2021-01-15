import React from 'react'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import { useDispatch,useSelector} from 'react-redux'
import {deleteComment} from '../../actions/post'

export const CommentItem = ({postId,comment:{_id,text,name,avatar,user,date}}) => {
    const  dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    return (
        <div class="comments">
        <div class="post bg-white p-1 my-1">
         
            <Link to={`/profile/${user}`}>
              <img
                class="round-img"
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <p class="my-1">
             {text}
            </p>
             <p class="post-date">
                Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
            </p>
            {!auth.loading && user===auth.user._id && (
          <button onClick={()=>dispatch(deleteComment(postId,_id))}     
          type="button"
          class="btn btn-danger"
        > <i class="fas fa-times"></i>
        </button>)}
          </div>
        </div>
    )
}
