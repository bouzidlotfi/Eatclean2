import React, { useContext } from 'react'
import { GeneralContext } from '../../../context/context'
import './Details.css'

const Details = () => {

    const { currentProduct } = useContext(GeneralContext)

    console.log(currentProduct)
    const { id, nom, image, ingredient, allergens, facts, freeof } = currentProduct


    return (
        <div className='product_details'>

                <div id='PicDetails'>
            {
                image?.map((image)=>{
                    return(
                        <div> {image} </div>
                        // <img src={image[0]} />
                    )
                })

            }
                </div>
                {/* <img src={require('ici tu met le chemin de limage')} alt="signification" className="" /> */}

                <div id='InfoDetails'>
            <div className='name' >
                <h2>{nom} :</h2>
            </div>

            <div className='ingredient' >
                <h3>Ingredient :</h3>
                <p>{ingredient}</p>
            </div>

            <div className='allergens' >
                <h3>Allergens :</h3>
                <p>{allergens}</p>
            </div>

            <div className='facts' >
                <h3>Facts :</h3>
                <p>{facts}</p>
            </div>

            <div className='freeof' >
                <h3>Free of :</h3>
                <p>{freeof}</p>
            </div>
                </div>
        </div>
    )
}

export default Details