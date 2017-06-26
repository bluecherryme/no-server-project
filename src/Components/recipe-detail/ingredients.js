import React from 'react';
import './ingredients.css';


export default function Ingredients(img,name){
    return(
        <div className="ingredients container">
            <h4><em>Ingredients & Instructions</em></h4>
            <div className="details">
                <ul>
                    <li>2 pieces white sandwich bread, crusts removed and cut into 1/4-inch pieces</li>
                    <li>1/3 cup low fat milk</li>
                    <li>2-1/2 teaspoons kosher salt</li>
                    <li>1 teaspoon freshly ground black pepper</li>
                    <li>3 garlic cloves, minced</li>
                    <li>1-1/2 tablespoons Worcestershire sauce</li>
                    <li>2 tablespoons ketchup</li>
                    <li>3 pounds 85% lean ground beef</li>
                    <li>3 scallions, finely sliced (optional)</li>
                    <li>Non-flammable cooking spray to grease grill</li>
                    <li>10 hamburger buns</li>
                </ul>
                <div className="instructions">
                    Preheat the grill to high heat.
                    In a large bowl, mash the bread and milk together with a fork until it forms a chunky paste. Add the salt, pepper, garlic, Worcestershire sauce and ketchup and mix well.
                    Add the ground beef and scallions and break the meat up with your hands. Gently mix everything together until just combined. Do not overmix. Divide the mixture into ten equal portions and form loose balls. Flatten the balls into 3/4-inch patties about 4-1/2 inches around. Form a slight depression in the center of each patty to prevent the burgers from puffing up on the grill.
                    Grease the grill with non-flammable cooking spray. Grill the burgers, covered, until nicely browned on the first side, 2-4 minutes. Flip burgers and continue cooking for a few minutes more until desired doneness is reached. Before serving, toast the buns on the cooler side of the grill if desired.
                    Note: The nutritional information doesn't include the hamburger buns
                </div>
            </div>
        </div>
        
    );
}











