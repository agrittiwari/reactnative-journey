import React, { Component } from 'react'
import Menu from './MenuComponent'
import { DISHES } from '../Shared/dishes'
import { View } from 'react-native'
import DishDetail from './DishdetailComponent'

class Main extends Component {
    constructor(props)
    {
        super()
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }
    onDishSelect = (dishId) =>
    {
        this.setState({selectedDish: dishId})
    }
    

    render()
    {
        return (
            <View style={{flex:1}}>
                <Menu dishes={this.state.dishes}
                onPress = {(dishId)=> this.onDishSelect(dishId)}/>
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
            </View>
            
        )
        
    }

}

export default Main;