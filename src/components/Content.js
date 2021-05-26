import React from 'react'
import Cards from './Cards'
import { Grid } from '@material-ui/core';
import BlogsListing from './Blogs'

const Content = () => {

    const getBlogsListing = (BlogsListingObj)=> {
        
       return(
        <Grid item xs={12} sm={4}>
            <Cards { ...BlogsListingObj } />
        </Grid>
        )

    }

    return (

        <Grid container spacing={4}>
                {BlogsListing.map(BlogsListingObj => getBlogsListing (BlogsListingObj)) }
        </Grid>   
    )
};

export default Content;
