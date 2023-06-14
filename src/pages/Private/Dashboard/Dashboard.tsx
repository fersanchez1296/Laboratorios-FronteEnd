import { Logout } from "../../../components/Logout"

function Dashboard() {
  const usuario = localStorage.getItem("user")
  return (
    <div>
      <Logout/>
      {`Usuario : ${usuario}`}
    </div>
  )
}
export default Dashboard