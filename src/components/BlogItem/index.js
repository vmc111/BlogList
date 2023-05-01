// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {id, title, description, publishedDate} = item
  const line = <hr className="line" />

  return (
    <li className="list-element" key={id}>
      <div className="title-date">
        <h1 className="blog-title">{title}</h1>
        <p className="time">{publishedDate}</p>
      </div>
      <p className="item-description">{description}</p>
      {line}
    </li>
  )
}

export default BlogItem
