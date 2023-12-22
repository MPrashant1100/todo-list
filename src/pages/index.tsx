import { useState } from "react"


 const Home = () => {
  const [title, setTitle] = useState()
  const blogPosts = [
    {
      id: 1,
      title: "First Blog",
      content: "This regarding my coding work"
    },
    {
      id: 2,
      title: "Next Blog",
      content: "This regarding my lifestyle"
    }
  ] 
  const handleAddTitle = () => {

  }
  const handleAddContent = () => {

  }
  return (
      <div className="bg-green-500 text-white flex flex-col items-center">
        <div className="flex">
        <input placeholder="Enter Title here"/>
        <button onClick={handleAddTitle} className="bg-red-600 p-1 mx-1">Add Title</button>
        </div>
        <div className="flex">
        <input placeholder="Enter Title here"/>
        <button onClick={handleAddContent} className="bg-red-600 p-1 mx-1">Add Content</button>
        </div>
        <h1 className="font-bold ">Hello and welcome here</h1>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>
              <a className="font-semibold">{post.title}</a>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Home;
