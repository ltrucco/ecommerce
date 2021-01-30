import React from 'react'
import './ShopPageStyles.scss'
import { ShopCollections } from './ShopCollections'
import CollectionPreview from '../../components/previewCollection/PreviewCollection'

const ShopPage = ( props ) => {

    const [collections, setCollections] = React.useState( ShopCollections )

    return (
        <div className='shop-page'>
            {
                collections.map( ( { id, ...otherCollectionProps } ) => (


                    <CollectionPreview key={id} {...otherCollectionProps} />
                    
                ) )
            }
        </div>
    )
}

export default ShopPage
