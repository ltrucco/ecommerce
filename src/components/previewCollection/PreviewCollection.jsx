import React from 'react'
import './PreviewCollectionStyles.scss'
import CollectionItem from '../collectionItem/CollectionItem'

const PreviewCollection = ({title, items}) => {
    return (
        <div className='collectionPreview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, idx) => idx < 4)
                    .map(({id, ...otherColletionItemProps})=>(
                        <CollectionItem key={id} {...otherColletionItemProps} />
                            
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection
