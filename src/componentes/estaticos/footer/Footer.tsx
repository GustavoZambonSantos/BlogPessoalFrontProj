import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid, Box } from '@material-ui/core';
import './footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';



export default function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    // eslint-disable-next-line no-var
    var footerComponent;

    if (token != '') {
        footerComponent = <Grid container className='grid-footer'>
            <Grid item xs={12}>
            <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                        
                            <a href="https://www.linkedin.com/in/gustavo-santos-2a3505118/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                           
                        </Box>
                        
                    </Box>
                <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                        </Box>
                        
            </Grid>
        </Grid>
    }



    return (
        <>
            {footerComponent}
        </>)
}