import { Outlet } from 'react-router'
import { useNavigate, useParams } from 'react-router-dom'
import Login from './login'

export function Dashboard() {
    let navigate = useNavigate();
    let { id } = useParams()

    return (<div style={{
    }}>
        <h1>Dash board - {id}</h1><br />
        <nav>
            <button type="button" onClick={() => navigate("/dashboard")}>Dashboard</button>
            <button type="button" onClick={() => navigate("/login")}>Login</button>
            <button type="button" onClick={() => navigate("/tasks")}>Tasks</button>
            <button type="button" onClick={() => navigate("/about")}>About</button>
        </nav>
        <Outlet />
    </div>)
}