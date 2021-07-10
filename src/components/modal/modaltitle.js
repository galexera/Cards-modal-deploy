import { React ,useState} from 'react'
import '../modal/modal.css'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

const Modal = () => {
    // const [onclose , setOnclose] = useState(true)
 
    // const handleclose = () => {
    //   setOnclose(false)
    // }
    // const DialogTitle = withStyles((theme) => ({
    //     root: {
    //       padding: 0,
    //       margin : 0
    //     },
    //     closeButton: {
    //       position: 'absolute',
    //       right: theme.spacing(1),
    //       top: theme.spacing(1),
    //       color: theme.palette.grey[500],
    //     },
    //   }))(MuiDialogTitle);
   return ( 
       
    <div data-v-eee0e284="" data-v-4d89d098="" class="feed-card feed-expanded-view--header section-card" style = {{margin: 0}} >
 {/* {onclose && (
        <IconButton aria-label="close" className={DialogTitle.closeButton} onClick={handleclose}>
          <CloseIcon />
        </IconButton>
      ) } */}
    <div data-v-18568cdd="" class="feed-card--content-container feed-card--type-job" data-v-eee0e284="">

       <div data-v-18568cdd="" class="feed-card--image-extra-wrapper">
          <div data-v-18568cdd="" class="feed-card__image cursor__pointer" ></div>

       </div>
       <div data-v-18568cdd="" title="Talent Acquisition Coordinator" class="feed-card--title font__card-header">
          Talent Acquisition Coordinatorss
       </div>
       <div data-v-18568cdd="" class="feed-card--subtitle-wrapper"><span data-v-18568cdd="" class="
     accent-hover
     cursor__pointer
     feed-card--subtitle-strong
     font__card-body
     ">Degreed</span> <span data-v-18568cdd="" title=" • Full Time • Posted 3 days ago" class="font__card-body--light"> • Full Time • Posted 3 days ago</span></div>
       <div data-v-18568cdd="" class="feed-card--list-item util__truncate">
          <span data-v-18568cdd="" title="Remote" class="feed-card--list-item-text font__card-body--small">
             {/* <svg data-v-18568cdd="" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="feed-card--list-item-icon svg-inline--fa fa-map-marker-alt fa-w-12">
           <path data-v-18568cdd="" fill="currentColor" d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z" class=""></path>
        </svg> */}
             <span data-v-18568cdd="">Remote</span>
          </span>
       </div>

    </div>
    <hr data-v-eee0e284="" class="section-card--hr" />

    <div data-v-e094b45c="" class="feed-card--footer__icon-action" data-v-eee0e284="">
       <div data-v-e094b45c="" class="feed-card--footer-left">

          <button data-v-4a7785f2="" data-v-e094b45c="" class="link--no-underline square-button feed-card--footer-left-share ui-14-regular square-button--secondary cursor__pointer" data-test="share">

             <span data-v-4a7785f2="" class="square-button__icon">
                <svg data-v-4a7785f2="" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-share fa-w-18">
                   <path data-v-4a7785f2="" fill="currentColor" d="M564.907 196.35L388.91 12.366C364.216-13.45 320 3.746 320 40.016v88.154C154.548 130.155 0 160.103 0 331.19c0 94.98 55.84 150.231 89.13 174.571 24.233 17.722 58.021-4.992 49.68-34.51C100.937 336.887 165.575 321.972 320 320.16V408c0 36.239 44.19 53.494 68.91 27.65l175.998-184c14.79-15.47 14.79-39.83-.001-55.3zm-23.127 33.18l-176 184c-4.933 5.16-13.78 1.73-13.78-5.53V288c-171.396 0-295.313 9.707-243.98 191.7C72 453.36 32 405.59 32 331.19 32 171.18 194.886 160 352 160V40c0-7.262 8.851-10.69 13.78-5.53l176 184a7.978 7.978 0 0 1 0 11.06z" class=""></path>
                </svg>
             </span>
             <span data-v-4a7785f2="" class="square-button__title">
                Share
             </span>
          </button>
       </div>
       <div data-v-e094b45c="" class="feed-card__footer--right">
          <div data-v-e094b45c="" class="v-popover">
             <div aria-describedby="popover_lql938o5uz" class="trigger" style={{ display: 'inline-block' }}>
                <button data-v-4a7785f2="" data-v-e094b45c="" class="link--no-underline square-button square-button--primary cursor__pointer" color="messenger">

                   <span data-v-4a7785f2="" class="square-button__icon">
                      <svg data-v-4a7785f2="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-bolt fa-w-10">
                         <path data-v-4a7785f2="" fill="currentColor" d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z" class=""></path>
                      </svg>
                   </span>
                   <span data-v-4a7785f2="" class="square-button__title">
                      Quick Apply
                   </span>
                </button>
             </div>
          </div>

       </div>
    </div>
 </div>
 
   ) }

   export default Modal;