import React, { Component } from 'react';
import { connect } from 'react-redux';
import './recipe-view.css';


class RecipeView extends Component{
    render(){
        return(
            <div className="gallery">
                {JSON.stringify(this.props.recipes)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return(
       {recipes:state.recipes}                
    );
}

export default connect(mapStateToProps)(RecipeView);