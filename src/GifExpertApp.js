import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Dragon Ball']

    const [categories, setCategories] = useState(['One Punch'])

    const handleAdd = () => {
        //forma 1
        //setCategories([...categories, 'HunterXHunter'])
        //forma 2, con callback
        // setCategories(cate => [...cate, 'HunterXHunter'])
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(cate => (
                        <GifGrid
                            key = {cate} 
                            category={cate} 
                        />
                    ))
                }
            </ol>
        </>
    )
}