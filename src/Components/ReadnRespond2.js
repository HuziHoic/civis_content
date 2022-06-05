import React, { useState,useEffect} from 'react';
import {useForm} from 'react-hook-form';
import { useParams } from "react-router-dom";
import './ReadnRespond.css';

function ReadnRespond2() {
    let params = useParams();
    const{register, handleSubmit, formState:{errors}} = useForm()

    let [feedback, setFeedback] = useState()
    const [posts, setPosts] = useState([])
  const [lawDescription, setLawDescription] = useState()

  useEffect(() => {
    getLaw();
  }, [])
  
    const onFormSubmit = async(userData) => {
        console.log(userData)
        await setFeedback(userData)
        createPost(userData);
        await setPosts([...posts,userData.response])
       
    }

    const getLaw = async () => {
        const res = await fetch(`http://127.0.0.1:8000/get_law/${params.category}/`);
        const data = await res.json();
        await setLawDescription(data.content);
        // console.log("1",lawDescription)
      };

    const createPost = async (userData) => {
        var pair = {name: localStorage.getItem("name")};
        feedback = {...userData, ...pair};
        console.log("11",feedback);
        
        fetch(`http://127.0.0.1:8000/create_post/${params.category}/`, {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(feedback),
       
       })
     }

     const getDate=()=>{
        var currentTime = new Date();

        var currentOffset = currentTime.getTimezoneOffset();
        
        var ISTOffset = 330;   
        
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
        
        
        var hoursIST = ISTTime.getHours()
        var minutesIST = ISTTime.getMinutes()
        
        return hoursIST + ":" + minutesIST ;
     }

    return ( 
        <div className='container'>
            <div className="row">
            <div className="col-md-4">
                <div class="card policy text-light h-100">
                    <div class="card-header policyHeader">
                        <h3>Measures relating to the Safety and Electric Supply (2019)</h3>  
                    </div>
                    <div class="card-body">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/NITI_Aayog_logo.svg/1200px-NITI_Aayog_logo.svg.png" alt="" width='15%' className='nitiaayoglogo p-1' />
                        <a href="https://www.niti.gov.in/" className='nitiaayog'>   NITI AAYOG</a>
                        <br />
                        <br />
                        <p className='policyGoal'>With an aim to achieve net-zero emissions by 2070, India plans to de-carbonise high greenhouse gas emissions in the industrial and energy sector. The Act recently taken for that is the Central Electricity Authority - Measures relating to the Safety and Electric Supply- Regulations 2019.</p>

                        <a href="https://www.niti.gov.in/sites/default/files/2022-04/20220420_Battery_Swapping_Policy_Draft.pdf" className='referdoc'>Click here to Refer the Policy</a>
                        <br />
                        <h6 className='text-dark'>Posted on 1 June, 2022</h6>
                        <hr />
                        
                    </div>
                </div>
            </div>



            <div className="col-md-8">
                <div className="card">
                    <div className="card-header descriptionHeader">Description</div>
                    <div className="card-body descriptionBody">
                        {lawDescription}
                    </div>
                </div>
            </div>
       
        


        <div className="row">
            <div className="card mt-3 response">
                <div className="card-body responseHeader">
                    <h2>Enter your view...</h2>
                    <hr className='line'/>
                    <form onSubmit={handleSubmit(onFormSubmit)}>

                    <label htmlFor="category">Select a Category</label>
                    <select id="category" className='form-select' {...register("category", {required:true})} defaultValue={'Electric Vehicles'}>
                    <option value="Electric Vehicles">Electric Vehicles</option>
                    <option value="Motor Vehicles">Motor Vehicles</option>
                    <option value="Motor Vehicles">Food Safety and Standards</option>
                    </select>
                    {errors.branch?.type==='required' && <p className='text-danger'>*Select any branch</p>}

                        
                        <label htmlFor="response" className='mt-2'>Type your Response here</label>
                        <textarea name="response" id='response' className='form-control' rows='6' {...register("response", {required:true})}></textarea>
                        

                        <button className='btn btn-success mt-2' type='submit'>SUBMIT RESPONSE</button>
                    </form>
                    
                </div>
            </div>
        </div>

        <hr />
        <br/><br/>
        <div>
            <h1 className='text-center'>LIST OF RESPONSES</h1>
            {
                posts?.map((response,index)=>

                <div  key={index} className='row userResponse'>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card responseCard mb-3">
                    <div className="card-body responseBody">
                    <span className='text-name'>{localStorage.getItem("name")}</span>
                    <span className='text-muted'> at {getDate()} wrote-</span>
                    <h3 className='text-response'>{response}</h3>-
                    </div>
                
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
                )
            }
        </div>


        </div>
        </div>
     );
}

export default ReadnRespond2;

