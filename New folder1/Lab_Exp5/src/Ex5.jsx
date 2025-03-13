import ResponsiveAppBar from './Appbar';
import './style.css';
export default function Ex5() 
{
    function Mover()
    {
        document.getElementById("login").className='mover-login'
    }
    function Mleave()
    {
        document.getElementById("login").className='login-form'
    }
    return (
    <div className='parent'>
        <ResponsiveAppBar/>
        <center>
            <div className='login-form' onMouseOver={Mover} onMouseLeave={Mleave}
            id="login">
                <table>
                    <tr>
                        <td colSpan={2} style={{ backgroundColor: 'yellowgreen' }}>Login Page</td>
                    </tr>
                    <tr>
                        <td>Name: </td>
                        <td>
                            <input type="text" className='form-control' name="t1" id="un" />
                        </td>
                    </tr>
                    <tr>
                        <td>Password: </td>
                        <td>
                            <input type="password" className='form-control' name="t2" id="pwd" />
                        </td>
                    </tr>
                    <tr>
                        <td>Role: </td>
                        <td>
                            <select className="form-control" id="sel1">
                                <option value={1}>Admin</option>
                                <option value={2}>User</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}> <button className="btn btnsuccess">Login</button></td>
                    </tr>
             </table>
            </div>
        </center>
    </div>
    );
}