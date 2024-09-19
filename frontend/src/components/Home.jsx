import React from 'react'
import Notes from './Notes'

const Home = () => {

  return (
    <div className='container my-4'>
      <h2 className=''>Add a note</h2>

      {/* note input form */}
      <form action="/" className='mt-3 mb-4'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Note Title</label>
          <input type="title" className="form-control" id="exampleFormControlInput1" placeholder="Add title" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Note Description</label>
          <input className="form-control" id="exampleFormControlTextarea1" placeholder='Add description' />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Note Tag</label>
          <input type="tag" className="form-control" id="exampleFormControlInput1" placeholder="Add tag" />
        </div> */}

        {/* note submit button */}
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>

      <Notes />
    </div>
  )
}

export default Home
