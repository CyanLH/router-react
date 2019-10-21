import React from 'react';

// const About = ({match}) => {
//     return(
//         <div>
//             <h2>About {match.params.name} 1234567890</h2>
//         </div>
//     )
// }
function About({match}){
    return(
        <div>
            <h2>About {match.params.name} 1234567890</h2>
        </div>
    )
}

export default About;