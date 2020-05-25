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
        
        const target = e.target
        // const type = e.target.type
        const name = e.target.name
        
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]:value
        },this.filterRooms)
    }
    filterRooms = () => {
       let {
           rooms, type, capacity, price, minSize, maxSize, breakfast, pets
       } = this.state
       capacity = parseInt(capacity)
       price = parseInt(price)
       let tempRoom = [...rooms]
       if(type !== 'all'){
         tempRoom = tempRoom.filter(item => item.type === type)
       }
       if(capacity !== 1) {
        tempRoom = tempRoom.filter(item => item.capacity >= capacity)
      }
      if(price !== 0){
        tempRoom = tempRoom.filter(item => item.price <= price)
      }
      if(breakfast){
        tempRoom = tempRoom.filter(item => item.breakfast === true)
      }
      if(pets){
        tempRoom = tempRoom.filter(item => item.pets === true)
      }
      tempRoom = tempRoom.filter(item => item.size >= minSize && item.size <= maxSize)
       this.setState({sortedRooms:tempRoom})
       
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
           <RoomContext.Provider value={{...this.state , getRoom:this.getRoom , handleChange:this.handleChange}}>
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