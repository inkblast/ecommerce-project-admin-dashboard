import React from 'react';
function Listicon(props) {
    const index = props;
    console.log(index);
    var icon='';
    switch(index)
    {
        case index==0:
            icon='zero';
            break;
        case index==1:
            icon='one';
            break;
        case index==2:
            icon= 'one';
            break;
        case index==3:
            icon= 'one';
            break;
        case index==4:
            icon= 'one';
            break;
    }
    return (<div>{icon}</div>);
}

export default Listicon