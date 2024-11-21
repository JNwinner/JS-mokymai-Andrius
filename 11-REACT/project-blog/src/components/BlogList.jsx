

const BlogList = ({blogs, title}) => {
  return (
    <div >
            <h1 className="text-2xl font-bold ">{title}</h1>
          {
            blogs.map((blog) => {
            return (
                <div className="py-2.5 px-4 my-5 mx-0 border border-[solid] border-[#fafafa] hover:[box-shadow:1px_3px_5px_rgba(0,_0,_0,_0.1)]" key={blog.id}>
                    <h2 className="text-xl text-[#f1356d] mb-2">{blog.title}</h2>
                    <p>Autorius: {blog.autorius}</p>
                </div>
            )
            }
          )}
    </div>
  )
}

export default BlogList