import React from "react";
import notfoundstyle from "./Notfound.module.css"

export default function Notfound() {
  return (
    <div className="container">
      <div className={notfoundstyle.main}>
      <h1 className={notfoundstyle.h1}>Page Not Found</h1>
      <p className={notfoundstyle.p}>We couldn't find what you were looking for.</p>
      <h6>
        Additionally, a 404 Not Found error was encountered while trying to use
        an ErrorDocument to handle the request.
      </h6>
    </div>
    </div>
    
  );
}
