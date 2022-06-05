import React , {useState} from 'react';
import {useForm} from 'react-hook-form';
import './DiscussionForum.css';

function DiscussionForum() {

    
    const{register, handleSubmit, formState:{errors}} = useForm()

    const [comments, setComments] = useState([])

    const[like,setlike]=useState(0)
    const[dislike,setdislike]=useState(0)


    function countLike(){
        setlike(like+1)
    }


    function countDislike(){
       setdislike(dislike+1)
    }

   


    const onFormSubmit = (Post) => {
        console.log(Post)
        setComments([...comments,Post.comment])
    }

    return ( 
        <div className='container'>
            <h1 className='text-center'>DISCUSSION FORUM</h1>
            <h6 className='text-center'>Talk with the community.</h6>
            <br/><br/>

            {/* <input className="file-upload-input" type='file' onChange='readURL(this)' accept='Image/*' /> */}

            <div>
                <div className="row">
                    <div className="col-md-2"></div>

                    <div className="col-md-8">
                        <div className="card postcomment">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onFormSubmit)}>
                                <textarea name="comment" id="comment" rows="6" className='form-control mt-2' placeholder='Post your comment here ........' {...register("comment", {required:true})}></textarea>
                                <button type='submit' className='btn post mt-2'>POST</button>
                                </form>
                            </div>
                        </div>
                        {/* <img src="https://provost.tufts.edu/celt/files/Dialogue-Abstract-Balloons-Word-Clouds-Clouds-1852499-copy.png" alt="" width='100%'/> */}
                    </div>
        
                    <div className="col-md-2"></div>
                </div>
            </div>
            <hr />
            <div>
                <br/><br/>
            <h1 className='text-center'>COMMENT SECTION</h1>
            {
                comments.map((comment,index)=>
                <div className='row comment'>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="card commentCard mb-3">
                        <div className="card-body commentBody">
                            <h4 className='text-light' key={index}>{comment}</h4>
                        </div>
                        <div className="card-footer">
                            <button onClick={countLike} className='btn btn-light m-1'>{like} Likes</button>

                            <button onClick={countDislike} className='btn btn-secondary m-1'>{dislike} Dislikes</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                )
            }
            </div>

        </div>
     );
}

export default DiscussionForum;