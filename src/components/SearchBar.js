import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    inputStyle: {
        backgroundColor: 'transparent',
        paddingLeft: '3.5rem',
        padding: '10px 5px',
        borderStyle: 'solid',
        borderWidth: '.5px',
        borderColor: 'grey',
        borderRadius: '25px',
    },
    search: {
        position: 'relative',
        width: '35%',
    },
    searchIcon: {
        padding: '0rem 1rem',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
    },
};

class SearchBar extends Component {
    AddsBoxShadowOnMouseOver = (OverEvent) => {
        OverEvent.target.style.boxShadow = "0px 0px 5px grey";
        console.log(OverEvent);
    }
    RemovesBoxShadowOnMouseLeave = (OverEvent) => {
        OverEvent.target.style.boxShadow = "none";
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon style={{ height:'60%'}} />
                </div>
                <InputBase
                    placeholder="Search..."
                    onMouseOver={this.AddsBoxShadowOnMouseOver}
                    onMouseLeave={this.RemovesBoxShadowOnMouseLeave}
                    fullWidth={true}
                    classes={{ input: classes.inputStyle }} />
            </div>
        )  
    }
};

export default withStyles(styles)(SearchBar);
