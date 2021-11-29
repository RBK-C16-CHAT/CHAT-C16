import {useState , useEffect} from "react";
import axios from 'axios'


function Card({user}) {
const [messageInput,setMessageInput]= useState('')
const [message,setMessage]= useState([])

useEffect(()=>{
   fetch()
},[])

  const handleChange = (e) => {
	e.preventDefault();
	setMessageInput(e.target.value)
};

const fetch=()=>{
axios.get('http://localhost:3000/api/chat').then((data)=>{
   setMessage(data.data)
})
.catch((err)=>console.log(err))
}


const handleSubmit = (e) =>{
   e.preventDefault()
	axios.post('http://localhost:3000/api/chat',{message:messageInput , user:user})
   .then(()=>{setMessageInput('')})
}
  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
   <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
      <div className="flex items-center space-x-4">
         <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"/>
         <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex items-center">
               <span className="text-gray-700 mr-3">Anderson Vanhron</span>
               <span className="text-green-500">
                  <svg width="10" height="10">
                     <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                  </svg>
               </span>
            </div>
            <span className="text-lg text-gray-600">Junior Developer</span>
         </div>
      </div>
   </div>

   <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      <div className="chat-message">
      {/* {posts.map((post) => ( */}
         {message.length>= 1 ? message.map((e,key)=>{
                  return (
            <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               
               <div k={key}><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600" >{e.message} {e.user}</span></div>

              
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-1"/>
         </div>
     
     )}):"send a message"}
        
      </div>
      <div className="chat-message">
      {message.length>= 1 ? message.map((e,key)=>{
                  return (
         <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div  k={key}><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-green-500 text-white ">{e.message} {e.user}</span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-2"/>
         </div>
          )}):"send a message"}
      </div>
     
   </div>
   <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <div className="relative flex">
         <form className="w-full" onChange={handleChange}>
         <input value={messageInput} type="text" placeholder="Write Something" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3"/>
         <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button onClick={handleSubmit} type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 mb-6 transition duration-500 ease-in-out text-white bg-red-400 hover:bg-yellow-400 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
            </button>
         </div>
         </form >
         
      </div>
   </div>
</div>

  );
}

export default Card;



