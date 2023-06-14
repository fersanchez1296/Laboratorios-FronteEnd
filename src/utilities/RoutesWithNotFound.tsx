import { Route, Routes } from "react-router-dom";

interface Props {
    children : React.ReactNode ;
}
function RoutesWithNotFound({children} : Props) {
  return (
    <Routes>
        {children}
        <Route path="/*" element={<div>NOT FOUND</div>}/>
    </Routes>
  )
}
export default RoutesWithNotFound