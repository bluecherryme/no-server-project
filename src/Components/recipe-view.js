import React, { Component } from 'react';
import { connect } from 'react-redux';


class RecipeView extends Component{
    render(){
        return(
            <div className="gallery">
                {JSON.stringify(recipes)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return(
       {recipes:state.recipes}                
    )
}

export default connect(mapStateToProps)(RecipeView);