import React from 'react'
import MenuItem from '../menuItem/MenuItem'
import './DirectoryStyles.scss'

const Directory = () => {

    const [sections, setSections] = React.useState([
        {
            title: 'hats',
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            id: 1,
            linkUrl: 'hats'
            
        },
        {
            title: 'jackets',
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            id: 2,
            linkUrl: ''
        },
        {
            title: 'Sneakers',
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            id: 3,
            linkUrl: ''
        },
        {
            title: 'Womens',
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            id: 4,
            size: 'large',
            linkUrl: ''
        },
        {
            title: 'Men',
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
            id: 5,
            size: 'large',
            linkUrl: ''
        },
])

    return (
        <div className="directoryMenu">
            {
                sections.map(({id, ...otherSectionProps }) => {
                    return <MenuItem key={id} {...otherSectionProps}  />
                })
            }
        </div>

    )
}

export default Directory
