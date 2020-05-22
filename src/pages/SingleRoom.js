import React from 'react'
import Banner from '../component/Banner'
import StyledHero from '../component/StyledHero'
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
        const [firstImage , ...theRestOfImage] = images
        return (
            <>
            <StyledHero img={firstImage }>
                <Banner title ={`${name} room`}>
                <Link to ='/rooms' className = 'btn-primary'>
                  back to rooms
                </Link>
                </Banner>
            </StyledHero>
            <section className='single-room'>
               <div  className='single-room-images'>
                   {theRestOfImage.map((img,index) => {
                       return <img key={index} src={img} alt={name}/>
                   })}
               </div>
               <div className='single-room-info'>
                   <article className='desc'>
                       <h3>details</h3>
                       <p>{description}</p>
                   </article>
                   <article className='info'>
                       <h3>info</h3>
                       <h6>price : ${price}</h6>
                       <h6> max capacity : ${capacity > 1 ?  `${capacity} people` : `${capacity} person`}</h6>
                       <h6>size : ${size} SQFT</h6>
                       <h6>{pets ? 'pets allowed':'no pets allowed'}</h6>
                       <h6>{breakfast && 'free breakfast included'}</h6>
                   </article>
               </div>
            </section>
            <section className='room-extras'>
              <h6>extras</h6>
              <ul className='extras'>
                  {extras.map((item,index ) =>{
                      return <li key={index}>-{item}</li>
                  })}
                  <li></li>
              </ul>
            </section>
            </>
        )
    }
    
}

export default SingleRoom
