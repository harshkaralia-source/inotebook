import React from 'react'

const Home = () => {
  return (
    <div className='container my-4'>
      <h2 className=''>Add a note</h2>

      {/* note input form */}
      <form action="/" className='mt-3 mb-4'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Note Title</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Add title" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Note Description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Add description' rows="5"></textarea>
        </div>

        {/* note submit button */}
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
      
      <h2>Your notes</h2>
    </div>
  )
}

export default Home
