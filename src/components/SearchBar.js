import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    inputStyle: {
        backgroundColor: 'transparent',
        paddingLeft: '3.5rem',
        padding: '10px 5px',
    },
    search: {
        position: 'relative',
        borderStyle: 'solid',
        borderColor: 'green',
        borderRadius:'5px',

    },
    searchIcon: {
        padding:'0rem 1rem',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

class SearchBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.search} >
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase placeholder="Search..." classes={{ input: classes.inputStyle }} />
            </div>
        )
    }
};

export default withStyles(styles)(SearchBar);
