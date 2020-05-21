import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail , FaHiking , FaShuttleVan, FaBeer} from 'react-icons/fa'
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'Free cocktails',
                info:'Search for the keywords to learn more about each , to learn more about each to' +
                       'learn more about each Search for the keywords to learn more',
                

            },
            {
                icon:<FaHiking/>,
                title:'Endless hiking',
                info:'Search for the keywords to learn more about each , to learn more about each to' +
                       'learn more about each Search for the keywords to learn more',
                
            },
            {
                icon:<FaShuttleVan/>,
                title:'Free shuttle',
                info:'Search for the keywords to learn more about each , to learn more about each to' +
                       'learn more about each Search for the keywords to learn more',
                
            },
            {
                icon:<FaBeer/>,
                title:'Strongest beer',
                info:'Search for the keywords to learn more about each , to learn more about each to' +
                       'learn more about each Search for the keywords to learn more',
                
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services'/>
                <div className='services-center'>
                    {this.state.services.map((item,i) => (
                        <article key={i} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>)
                        )}
                </div>
            </section>
        )
    }
}
