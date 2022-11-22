import { Component } from "react";
import classes from './Footer.module.css'
export default class Footer extends Component{
    render(){
        return(
            <footer className={classes.footer}>
                Designed & Built by Le Trinh Quoc Huynh
            </footer>
        )
    }
}
