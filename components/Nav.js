import Image from "next/image";
function Nav({ logout }) {
  return (
    <nav className="flex  flex-col sm:flex-row m-5  justify-between items-center h-auto ">
      <Image
        className="ml-1 object-contain hover:animate-bounce float-left"
        alt="C16"
        width={200}
        height={100}
        src="http://images.squarespace-cdn.com/content/v1/57692339e4fcb58e1ae387bb/1466512509090-FE4C8HYB8AO240P4UX8R/C16+copy1.png"
      />
      <div
        className="flex flex-row 
       justify-between items-center"
      >
   

        <h1>UserName here</h1>

      </div>
      
      <div onClick={() => logout()}>
      <Image
        className="ml-1 object-contain float-right"
        alt="logout"
        width={200}
        height={100}
        src="https://www.kindpng.com/picc/m/312-3120740_logout-hd-png-download.png"
      />
      </div>
    </nav>
  );
}

export default Nav;
