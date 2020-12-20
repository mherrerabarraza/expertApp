import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            setCategories(cate => [inputValue, ...cate]);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    //obliga a enviar el componente con la función incluída
    //de otra manera no se podría importar
    setCategories: PropTypes.func.isRequired
}

