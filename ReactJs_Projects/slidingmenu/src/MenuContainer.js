import React, {Component} from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

class MenuContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e){
        this.toggleMenu();

        console.log("Clicked");
        e.stopPropagation();
    }

    toggleMenu(){
        this.setState({
            visible: !this.state.visible
        });
    }

    render(){
        return(
            <div>
                <MenuButton handleMouseDown1={this.handleMouseDown} />
                <Menu handleMouseDown2={this.handleMouseDown} menuVisibility={this.state.visible} />
                <div>
                    <p>Can you stop the items that don't belong ?</p>
                    <ul>
                        <li>Lorem</li>
                        <li>Ipsum</li>
                        <li>Dolor</li>
                        <li>Sit</li>
                        <li>Bumblebee</li>
                        <li>Aenean</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuContainer;