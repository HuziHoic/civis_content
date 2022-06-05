import React from 'react';
import './Rewards.css';

export default function Rewards() {
  return ( 
     <div className="bg">
      <div className='container'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
         <div className="col">
            <div className="card mb-3 h-100 rewardCard" >
               <img src="https://i.etsystatic.com/5145561/r/il/c3ab61/3548172693/il_fullxfull.3548172693_tsme.jpg" className="card-img-top" alt="" />
               <div className="card-body">
               <h5 className="card-title">OVER ACHIEVER</h5>
               <p className="card-text">Rise above the #1 by obtaining this badge by crossing 800 coins.</p>
               {/* <a href="#" className="btn btn-primary">BUY</a> */}
               </div>
            </div>
         </div>

         <div className="col">
            <div className="card mb-3 h-100 rewardCard" >
               <img src="https://img.freepik.com/free-vector/number-one-leadership-business-golden-badge_1419-2081.jpg?w=2000" className="card-img-top" alt=""/>
               <div className="card-body">
               <h5 className="card-title">#1</h5>
               <p className="card-text">Wish to be more than just a marathoner? Get this badge by earning 650 coins.</p>
               {/* <a href="#" className="btn btn-primary">BUY</a> */}
               </div>
            </div>
         </div>

         <div className="col">
            <div className="card mb-3 h-100 rewardCard" >
               <img src="https://www.graphicsprings.com/filestorage/stencils/c6eba7224b5cd16c54c6d26e55397ae6.png?width=500&height=500" className="card-img-top" alt="" />
               <div className="card-body">
               <h5 className="card-title">MARATHONER</h5>
               <p className="card-text">Be known in the community as an marathon achiever by getting this badge at 500 coins.</p>
               {/* <a href="#" className="btn btn-primary">BUY</a> */}
               </div>
            </div>
         </div>

         <div className="col">
            <div className="card mt-3 h-100 rewardCard" >
               <img src="https://yt3.ggpht.com/ytc/AKedOLTeD0NeWluZQBwAchoUa2vAvrm21UqCIMYBg-L26g=s900-c-k-c0x00ffffff-no-rj" className="card-img-top" alt=""/>
               <div className="card-body">
               <h5 className="card-title">WEEKEND WARRIOR</h5>
               <p className="card-text">Prove your passion for the law by contributing consistently and crossing 400 coins to get this badge.</p>
               {/* <a href="#" className="btn btn-primary">BUY</a> */}
               </div>
            </div>
         </div>

         <div className="col">
            <div className="card mt-3 h-100 rewardCard" >
               <img src="https://ih1.redbubble.net/image.3127772595.4022/ur,pin_large_front,square,600x600.u1.jpg" className="card-img-top" alt=""/>
               <div className="card-body">
               <h5 className="card-title">OVERSHARE</h5>
               <p className="card-text">Move beyond your first steps by being active and getting this badge at 300 coins.</p>
               {/* <a href="#" className="btn btn-primary">BUY</a> */}
               </div>
            </div>
         </div>


         <div className="col">
            <div className="card mt-3 h-100 rewardCard" >
               <img src="https://juststickers.in/wp-content/uploads/2018/06/every-adventure-requires-a-first-step-badge.png" className="card-img-top" alt=""/>
               <div className="card-body">
               <h5 className="card-title">FIRST STEPS</h5>
               <p className="card-text">Earn your first 100 coins to get your first badge and be recognized within the community.</p>
               {/* <a href="#" className="btn btn-primary">BUY</a> */}
               </div>
            </div>
         </div>

        </div>
      </div>
      <br />
      <br />
      <div className='container'></div>
      </div>


   );
}


