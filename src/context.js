import React, { Component } from 'react'
import item from './data'
const RoomContext = React.createContext();
class RoomProvider extends Component {
    
    state = {
      rooms:[],
      sortedRooms:[],
      featuredRooms:[],
      loading:true,
      type:'all',
      capacity:1,
      price:0,
      minPrice:0,
      maxPrice:0,
      minSize:0,
      maxSize:0,
      breakfast:false,
      pets:false
    }
    componentDidMount () {
        let rooms = this.formatData(item);
        let featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            maxPrice:maxPrice,
            maxSize:maxSize
        })
    }
    handleChange = (e) =>{
        const type = e.target.type
        const name = e.target.name
        const value = e.target.value 
    }
    formatData =(item)=>{
         let tempItem = item.map(item => {
             let id = item.sys.id;
             let images = item.fields.images.map(image => image.fields.file.url)
             let room =  {...item.fields , images, id}
             return room
         })
         return tempItem
    }
    getRoom = (slug) =>{
       let tempRoom = [...this.state.rooms];
       const room = tempRoom.find(room => room.slug === slug)
       return room
    }
    render() {
        return (
           <RoomContext.Provider value={{...this.state , getRoom:this.getRoom}}>
            {this.props.children}
           </RoomContext.Provider>
        )
    }
}
const RoomConsumer = RoomContext.Consumer;

export const withRoomConsumer = (Component) => {
    return function consumerWrapper(props) {
        return(
            <RoomConsumer>
                {value => <Component {...props} context={value}/>}
            </RoomConsumer>
        )
    }
}
export { RoomProvider, RoomContext, RoomConsumer}