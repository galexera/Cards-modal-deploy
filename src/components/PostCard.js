import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./postCard.css";
import { Heart, HeartFill, Comment } from "./icons";
// import { alpha } from '@material-ui/core/styles';

import Modalcontent from './modal/modelcontent'
import ModalTitle from './modal/modaltitle.js'
import  {Dialog ,DialogTitle, DialogContent , makeStyles} from '@material-ui/core';
import MuiDialog from '@material-ui/core/Dialog';
// import { Dialog } from '@material-ui/core';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';

function PostCard({ post, isCommentaLink }) {

  const [Showmodal , setShowmodal] = useState(false)

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: 0,
    },
  }))(MuiDialogContent);

  const DialogTitle = withStyles((theme) => ({
    root: {
      padding: 0,
      margin : 0
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  }))(MuiDialogTitle);

  const Dialog = withStyles((theme) => ({
    root: {
      padding: 0,
      margin : 0,
      
    },
    paperWidthMd : {
      maxWidth : "75%",
      borderRadius : 10
    }
  }))(MuiDialog);
  const [open, setOpen] = useState(false);

  
  const [liked, setLiked] = useState(false);
  const [postDescription, setPostDescription] = useState(post.postDescription);
  const createMarkup = html => ({ __html: html });
  useEffect(() => {
    const hideContent = () => {
      setPostDescription(() => {
        return post.postDescription.substr(0, 150) + (post.postDescription.length > 151 && "...");
      });
    };
    if (window.innerWidth < 700) {
      hideContent();
    }
  }, []);
  return (
    <>
    <article className="card-container card-font">
      <div className="post-content-container" style = {{ marginTop : 0}} >
        <span className="post-content-main" onClick = {() => setShowmodal(true)} >
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
            <div style={{ display: 'flex', flexDirection: 'column' , justifyContent :'space-between' }}>
              <div class="InternshipLink_remoteBadge__2pkxj" style={{ marginLeft: 30, marginTop: 5 ,paddingTop : 0 ,marginBottom :5 }}>{post.level}</div>
              <h3 className="post-header">{post.postHeader}</h3>

            </div>
            <div className="post-header" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >

              {/* <div style = {{display : 'flex' , flexDirection : 'row'}} >
              <span style={{ display: 'flex', flexDirection: 'row' }} data-v-18568cdd="" class="feed-card--hover-item font__card-body--small feed-card--count-item">
        

                <div style={{ margin: 5 }}>
                  31 applicants

                </div>


              </span>
              </div> */}


              {/* <div>
                <a class="InternshipLink_externalLink__7I2P-" target="_blank" rel="noopener noreferrer">
                  <div class="InternshipLink_tooltip__3u0Wm">Go to apply</div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="#0B0B14" stroke-width="2"></path>
                    <path d="M11 7H17V13" stroke="#0B0B14" stroke-width="2" stroke-linejoin="bevel"></path>
                  </svg>
                </a>
              </div> */}

            </div>

          </div>
          <div className="post-description">
            {postDescription && postDescription.split("\n").map((description, index) => <p key={index} dangerouslySetInnerHTML={createMarkup(description)}></p>)}
          </div>
          {post.postImg && (
            <div className="post-img">
              <img src={post.postImg} alt="" />
            </div>
          )}
        </span>
        <div className="action-buttons-container flex" >

          <button style={{ marginLeft: '2rem' }} className={"like-button flex align-center link " + (liked && "liked")} onClick={() => setLiked(prev => !prev)}>
            {(!liked && <Heart />) || <HeartFill />}

            {post.likesCount != 0 && <span className="likes-count">{post.likesCount + ((liked && 1) || 0)}</span>}
          </button>

        </div>
      </div>
    </article>
    <Dialog open = {Showmodal} maxWidth = 'md' >
      <DialogTitle  >
        <ModalTitle />
      </DialogTitle>
        <DialogContent >
        <Modalcontent />   
        </DialogContent>
      </Dialog> 

    </>

  );
}

export default PostCard;
