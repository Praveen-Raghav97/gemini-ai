import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'
const Main = () => {

  

  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);

  const handleCardClick = (promptText) => {
		setInput(promptText);
	};


  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini 1.0</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult
        ?<>
  <div className="greet">
            <p><span>Hello...</span></p>
            <p>How Can I Help You To Day?</p>
        </div>
        <div className="cards">
         <div className="card" onClick={() =>
									handleCardClick("Suggest beutifull place for road trip")
								}>
            <p>Suggest beutifull place for road trip</p>
            <img src={assets.compass_icon} alt="" />
         </div>
         <div className="card" onClick={() =>
									handleCardClick("Briefy summarize this concept: urban Planning")
								}>
            <p>Briefy summarize this concept: urban Planning</p>
            <img src={assets.bulb_icon} alt="" />
         </div>
         <div className="card" onClick={() =>
									handleCardClick("Brainstrom team bonding activities for work retreat")
								}>
            <p>Brainstrom team bonding activities for work retreat</p>
            <img src={assets.message_icon} alt="" />
         </div>
         <div className="card " onClick={() =>
									handleCardClick("Improve the readability of the following code")
								}>
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
         </div>
        </div>

        </>:
       <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
              ? (<div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
              )
              :(<p dangerouslySetInnerHTML={{__html:resultData}}></p>
             ) }
             
            </div>
       </div>
      }
      
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text"  placeholder='Enter your promt here'/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                </div>
            </div>
            <div className="bottom-info">
                <p>GainAi may dispaly inaccurate info , Including about people , So double check,its responses , Your privacy and GainAI Apps</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
