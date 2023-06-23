import React from 'react';
import { Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./privRout";

const Routing =  () => {

return  <Routes>
            {privateRoutes.map(({path,element})=>
                <Route key={path} element={element} path={path} exact={true}/>
            )}
        </Routes>



};

export default Routing;
