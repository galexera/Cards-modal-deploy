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
      <div className="post-content-container" >
        <span className="post-content-main" onClick = {() => setShowmodal(true)} >
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 className="post-header">{post.postHeader}</h3>
              <div class="InternshipLink_remoteBadge__2pkxj" style={{ marginLeft: 30, marginTop: 5 }}>{post.level}</div>
            </div>
            <div className="post-header" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >

              {/* <div style = {{display : 'flex' , flexDirection : 'row'}} > */}
              <span style={{ display: 'flex', flexDirection: 'row' }} data-v-18568cdd="" class="feed-card--hover-item font__card-body--small feed-card--count-item">
                {/* <div>
                  <svg style={{ width: 15, height: 15 ,marginRight : 5, alignItems : 'center' }}
                    data-v-18568cdd="" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user-friends" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    class="feed-card--count-icon svg-inline--fa fa-user-friends fa-w-20">
                    <path data-v-18568cdd="" fill="currentColor"
                      d="M480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm0-160c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm0-192c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80zm80.1 212c-33.4 0-41.7 12-80.1 12-38.4 0-46.7-12-80.1-12-36.3 0-71.6 16.2-92.3 46.9C7.2 341.3 0 363.4 0 387.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM352 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 27.4 0 37.2 12 80.2 12s52.8-12 80.1-12c27.3 0 51.9 12.3 65.7 32.8 9.2 13.7 14.1 29.8 14.1 46.4V432zm271.7-114.9C606.4 291.5 577 278 546.8 278c-27.8 0-34.8 10-66.8 10s-39-10-66.8-10c-13.2 0-26.1 3-38.1 8.1 15.2 15.4 18.5 23.6 20.2 26.6 5.7-1.6 11.6-2.6 17.9-2.6 21.8 0 30 10 66.8 10s45-10 66.8-10c21 0 39.8 9.3 50.4 25 7.1 10.5 10.9 22.9 10.9 35.7V408c0 4.4-3.6 8-8 8H416c0 17.7.3 22.5-1.6 32H600c22.1 0 40-17.9 40-40v-37.3c0-19.9-6-38.3-16.3-53.6z"
                      class=""></path>
                  </svg> </div> */}

                <div style={{ margin: 5 }}>
                  31 applicants

                </div>


              </span>
              {/* </div> */}


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
