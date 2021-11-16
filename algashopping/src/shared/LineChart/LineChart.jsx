import React from "react";
import {ProgressBar, Wrapper} from './LineChart.styles'


function LineChart ({tittle, percentage, color}){
    return <Wrapper>
         <span>
            {tittle}:
    </span>
    <ProgressBar 
    color={color}
    percentage={percentage}
    />

    </Wrapper>
}

export default LineChart