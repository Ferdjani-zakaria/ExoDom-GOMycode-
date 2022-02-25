import React from 'react';
import {useState, useEffect, useContext} from 'react';


function ToDoContainer() {
    return (
        <div>
            <div className=''>
                <div className='bg-zinc-400 flex justify-center px-32 py-14'>
                    <div className=' flex justify-between items-center flex-row gap-44'>
                        <dir className="text-white text-5xl m-0 p-0 pt-1">
                            <h1>TODO</h1>
                        </dir>
                        <div>
                            <img src="../../icon-sun.svg" alt="sun" className='h-4'></img>
                        </div>
                    </div>  
                </div>
                <div className='bg-stone-800 flex flex-col items-center gap-2'>
                    <div className='bg-stone-600 w-96 px-4 flex flex-row items-center rounded-sm justify-between'>
                        <div>
                            <input type="text" name="text" id="input" placeholder="add to do to your list" className='bg-inherit text-white w-4/5'></input>
                        </div>
                        <div>
                            <button className='rounded-full h-10 p-5px border-stone-400'>+</button>
                        </div>
                    </div>
                    <div className='bg-stone-600 w-96 px-4 rounded-sm'>
                        <div className=''>
                            <ul></ul>
                        </div>
                        
                        <div className='py-2'>
                            <span className=''>0 items left</span>
                            <div className='flex flex-row justify-between '>
                                <div className='flex flex-row justify-evenly gap-5 '>
                                    <span>All</span>
                                    <span className=''>Active</span>
                                    <span className=''>Completed</span>
                                </div>
                                <div>
                                    <span className=''>Clear completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='mt-12'>
                    <p className=''>Drag and drop to reorder list</p>
                </div>
            </div>
            </div>  
            </div>
    )
}

export default ToDoContainer;
