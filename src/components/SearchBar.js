import React, { Component, Fragment } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
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
        '&:hover': {
            boxShadow: '0px 0px 5px grey',
        },
        '&:focus': {
            boxShadow: '0px 0px 5px grey',
        },
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
    buttons: {
        paddingTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    singleButton: {
        margin: '5px',
    },
};

class SearchBar extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon style={{ height: '60%' }} />
                    </div>
                    <InputBase
                        placeholder="Search..."
                        fullWidth={true}
                        classes={{ input: classes.inputStyle }} />
                </div>
                <div className={classes.buttons}>
                    <Button variant="outlined" color="primary" className={classes.singleButton}>
                        Search
                </Button>
                    <Button variant="outlined" color="primary" className={classes.singleButton}>
                        Random
                </Button>
                </div>
            </Fragment>
        )
    }
};

export default withStyles(styles)(SearchBar);
