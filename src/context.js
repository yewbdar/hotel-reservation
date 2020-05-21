import React, { Component } from 'react'
import item from './data'
const RoomContext = React.createContext();
class RoomProvider extends Component {
    
    state = {
      rooms:[],
      sortedRooms:[],
      featuredRooms:[],
      loading:true
    }
    componentDidMount () {
        let rooms = this.formatData(item);
        let featuredRooms = rooms.filter(room => room.featured === true)
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false
        })
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
           <RoomContext.Provider value={{...this.state , getRoom:this.getRoom} }>
            {this.props.children}
           </RoomContext.Provider>
        )
    }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomContext, RoomConsumer}