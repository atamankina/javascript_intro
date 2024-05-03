import React from "react";

function Footer(props) {

    return(
        <div>
            <p>Die Webseite von {props.name}.</p>
            <p>Copyright {props.year}.</p>
        </div>
    )
}

export default Footer;