import React from 'react'
import Header from './header';
import Footer from './footer';

// function index({childern}) {
//   return (
//     <div>
//       <Header></Header>
//         {childern}
//       <Footer></Footer>
//     </div>
//   )
// }

const index = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default index
