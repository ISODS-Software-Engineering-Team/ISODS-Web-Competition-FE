import React from 'react'
import './Competition.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


function Competition() {


    return (
        <div className='container-comp'>

                <div className='container-form-comp'>
                    Search
                </div>
                <p2 className=""> ISODS </p2>
                <div className='Add-Comp-Button'>
                    <Fab size="small" color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </div>
                <div className='container-form-comp'>
                    Search Bar Competition
                </div>

                <div className='container-comp-2'>
                    Competitions
                </div>
            </div>

    );
}

export default Competition;

