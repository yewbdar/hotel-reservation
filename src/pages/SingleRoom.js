import React from 'react'
import Banner from '../component/Banner'
import Hero from '../component/Hero'
import {Link}  from 'react-router-dom'
import defaultImage from '../images/room-1.jpeg';
import {RoomContext} from '../context'
import defaultBcg from '../images/room-1.jpeg'
class  SingleRoom extends React.Component {
    
     state = {
         slug:this.props.match.params.slug,
          defaultBcg
     }
     
    static contextType = RoomContext 

    componentDidMount(){
        console.log('hii',this.props)
    }
    render(){
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        console.log(room)
        if(!room){
            return(
                <div className='error'>
                    <h3>no such room could be found ...</h3>
                    <Link to='/room' className='btn-primary'>back to room</Link>
                </div>
            )
        }
        const {name , description, capacity, size, price, extras,
              breakfast, pets, images} = room 
        return (
            <Hero hero ='roomsHero'>
                <Banner title ={`${name} room`}>
                <Link to ='/rooms' className = 'btn-primary'>
                  back to rooms
                </Link>
                </Banner>
            </Hero>
        )
    }
    
}

export default SingleRoom
