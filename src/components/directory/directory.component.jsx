import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';


class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            sections:[
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id:1,
                    urlLink:'/hat'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id:2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id:3,
                    urlLink:''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id:4,
                    urlLink:''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id:5,
                    urlLink:''
                }
            ],
        };

    }
    render() {
        return (
                <div className="directory-menu">
                    {this.state.sections.map(({id, ...otherSectionProps}) =>(
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))}
                </div>
            );
    }
}


export default Directory;