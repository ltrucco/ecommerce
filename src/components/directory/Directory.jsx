import React from 'react'
import MenuItem from '../menuItem/MenuItem'
import './DirectoryStyles.scss'

const Directory = () => {

    const [sections, setSections] = React.useState([
        {
            title: 'hats',
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            id: 1,
            
        },
        {
            title: 'jackets',
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            id: 2
        },
        {
            title: 'Sneakers',
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            id: 3
        },
        {
            title: 'Womens',
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            id: 4,
            size: 'large'
        },
        {
            title: 'Men',
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
            id: 5,
            size: 'large'
        },
])

    return (
        <div className="directoryMenu">
            {
                sections.map(({title, imageUrl, id, size}) => {
                    return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}  />
                })
            }
        </div>

    )
}

export default Directory
