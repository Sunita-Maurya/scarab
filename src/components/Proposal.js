import React from 'react'

const Proposal = () => {
  
  return (
    <div className='max-w-[1400px] mx-auto border'>
      <div className='flex gap-20'>
        <select name="" id="" className='bg-transparent'>
            <option value="sort by">sort by</option>
        </select>
        <div className='flex gap-2 image-border p-1'>
            <button>Live</button>
            <button>Pending</button>
            <button>Completed</button>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-10'>

      <div className='p-8 border rounded-2xl'>
      <div className='flex justify-between items-center mt-10'>
            <h2>Test the system</h2>
            <h2>Act ( 250 )</h2>
        </div>
        <div>
            <input type="range" />
            <div className='flex justify-between items-center mt-2'>
            <div>
                <p>Approved</p>
                <h2> 76% ( 120 )</h2>
            </div>
            <div>
            <p>Approved</p>
                <h2> 76% ( 120 )</h2>
            </div>
            </div>
        </div>
        <div className='flex justify-between items-center mt-10'>
        <div>
        <p>Result</p>
        <h6>Pending</h6>
        </div>
        <div>
        <p>Ending</p>
        <h6>N/A</h6>
        </div><div>
        <p>Total Votes</p>
        <h6>16</h6>
        </div>
        </div>
      </div>
      <div className='p-8 border rounded-2xl'>
      <div className='flex justify-between items-center mt-10'>
            <h2>Test the system</h2>
            <h2>Act ( 250 )</h2>
        </div>
        <div>
            <input type="range" />
            <div className='flex justify-between items-center mt-2'>
            <div>
                <p>Approved</p>
                <h2> 76% ( 120 )</h2>
            </div>
            <div>
            <p>Approved</p>
                <h2> 76% ( 120 )</h2>
            </div>
            </div>
        </div>
        <div className='flex justify-between items-center mt-10'>
        <div>
        <p>Result</p>
        <h6>Pending</h6>
        </div>
        <div>
        <p>Ending</p>
        <h6>N/A</h6>
        </div><div>
        <p>Total Votes</p>
        <h6>16</h6>
        </div>
        </div>
      </div>
      <div className='p-8 border rounded-2xl'>
      <div className='flex justify-between items-center mt-10'>
            <h2>Test the system</h2>
            <h2>Act ( 250 )</h2>
        </div>
        <div>
            <input type="range" />
            <div className='flex justify-between items-center mt-2'>
            <div>
                <p>Approved</p>
                <h2> 76% ( 120 )</h2>
            </div>
            <div>
            <p>Approved</p>
                <h2> 76% ( 120 )</h2>
            </div>
            </div>
        </div>
        <div className='flex justify-between items-center mt-10'>
        <div>
        <p>Result</p>
        <h6>Pending</h6>
        </div>
        <div>
        <p>Ending</p>
        <h6>N/A</h6>
        </div><div>
        <p>Total Votes</p>
        <h6>16</h6>
        </div>
        </div>
      </div>
      </div>
    

    </div>
  )
}

export default Proposal
