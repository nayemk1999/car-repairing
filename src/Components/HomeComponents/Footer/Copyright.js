import React from 'react';

const Copyright = () => {
    return (
        <div className="copyright">
         <small>Designed & Build by <a href="https://github.com/farhan-nahid" target="blank" style={{color:'rgb(26 210 14)'}}>Farhan Ahmed Nahid</a></small> <br />
         <small>{(new Date()).getFullYear()} &copy; copyright | Farhan</small> <br />
         </div>
    );
};

export default Copyright;