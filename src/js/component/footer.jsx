import React from "react"

export const Footer = () => {
return ( 

 <footer className="bg-dark text-white text-center text-lg-start mt-4">
 <div className="container p-4">
    
     <div className="row justify-content-center">
         <div className="col-auto">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png" alt="Bootstrap Logo" width="60" />
         </div>
     </div>
 </div>
 <div className="text-center p-3" style={{ backgroundColor: 'black' }}>
     © 2023 Copyright:
     <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
 </div>
</footer>

)
};