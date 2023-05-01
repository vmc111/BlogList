// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogsList = props => {
  const {blogsArray} = props

  return (
    <div className="blogs-container">
      <ul className="blogs-container">
        {blogsArray.map(eachBlog => (
          <BlogItem item={eachBlog} key={eachBlog.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogsList
