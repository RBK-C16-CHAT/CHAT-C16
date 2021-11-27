function Card() {
  const posts = ["post1", "post2", "post3", "post4"];

  

  return (
    <div className="w-96 p-80 mx-96 border border-gray-900">
      {posts.map((post) => (
        <div>{post}</div>
      ))}

      <div className="flex flex-row-auto">
        <input
          className="  border border-gray-900 "
          placeholder="add your post here..."
          type="text"
        />
        <button type="submit" className=" border border-gray-900">
          POST
        </button>
      </div>
    </div>
  );
}

export default Card;
