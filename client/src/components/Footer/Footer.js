import React from 'react'
import { Typography, Link } from '@material-ui/core'
import useStyles from "./styles"
function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="body2" align="center" className={classes.footLink}> 	&#169; 2021 Developed By &nbsp;
                <Link href="https://www.linkedin.com/in/ajmalnasumudeen/" target="_blank" rel="noopener"  >
                 Ajmal Nasumudeen
                </Link> </Typography>
        </footer>
    )
}

export default Footer
