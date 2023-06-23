import Diplom from "./diplom/diplom";
import Info from "./diplom/info";


export const privateRoutes = [
    { path: "/diplom", element:  <Diplom/>, exact: true },
    { path: "/info", element:  <Info/>, exact: true },

];
export const publicRoutes = [

];
//     <Routes>
//         <Route element={<Auth/>} path="/authLogin"/>
//         <Route path="/" element={<Navigate replace to="/authLogin" />} />
//         <Route element={<Main/>} path="/main"/>
//         <Route element={<Application/>} path="/application"/>
//         <Route element={<Messages/>} path="/messages"/>
//         <Route element={<Delivery/>} path="/delivery"/>
//     </Routes>
// );