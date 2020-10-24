import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    inputStyle: {
        backgroundColor: 'grey',
    }
};

class SearchBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div style={{ border: '2px solid green' }}>
                <SearchIcon />
                <InputBase classes={{ input: classes.inputStyle }} />
            </div>
        )
    }
};

export default withStyles(styles)(SearchBar);
