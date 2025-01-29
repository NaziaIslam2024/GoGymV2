import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLetterboxd, faSquareLetterboxd, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logoB.png'
import {
    Typography,
    List,
    ListItem,
    ListItemPrefix,

} from "@material-tailwind/react";
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

const Dashboard = () => {
    const [isRole, isPending] = useRole();

    const navigate = useNavigate();
    console.log(isRole);
    const { logout, user } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    }
    if(isPending){
        return <h1>Loading....</h1>
    }
    return (
        <div className="flex">
            <div className="w-80 min-h-screen border border-black ">
                <div className='bg-black'>
                    <Link to='/'>
                        <img className='max-w-52 mx-auto' src={logo} alt="" />
                    </Link>
                </div>
                <ul className="menu bg-[#e2ff31] bg-opacity-40 h-[500px] pt-10">
                    <List>
                        {user && isRole === 'admin' &&
                            <>
                                <Link to='financial'>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <FontAwesomeIcon icon={faTwitter} className="text-black text-2xl" />
                                            {/* <InboxIcon className="h-5 w-5" /> */}
                                        </ListItemPrefix>
                                        Balance
                                    </ListItem>
                                </Link>
                                <Link to='add-class'>
                                    <ListItem>
                                        <ListItemPrefix>
                                            {/* <InboxIcon className="h-5 w-5" /> */}
                                        </ListItemPrefix>
                                        Add Class
                                    </ListItem>
                                </Link>
                                <Link to='all-trainer'>
                                    <ListItem>
                                        <ListItemPrefix>
                                            {/* <InboxIcon className="h-5 w-5" /> */}
                                        </ListItemPrefix>
                                        All Trainers
                                    </ListItem>
                                </Link>
                                <Link to='applied-trainer'>
                                    <ListItem>
                                        <ListItemPrefix>
                                            {/* <InboxIcon className="h-5 w-5" /> */}
                                        </ListItemPrefix>
                                        Applied Trainer
                                    </ListItem>
                                </Link>
                                <Link to='newsletterSubscribers'>
                                    <ListItem>
                                        <ListItemPrefix>
                                            {/* <InboxIcon className="h-5 w-5" /> */}
                                        </ListItemPrefix>
                                        Newsletter Subscribers
                                    </ListItem>
                                </Link>
                            </>
                        }
                        {
                            isRole === 'trainer' &&
                            <>
                                <Link to='manage-slots'>
                                    <ListItem>
                                        <ListItemPrefix>
                                            {/* <InboxIcon className="h-5 w-5" /> */}
                                        </ListItemPrefix>
                                        Manage Slot
                                    </ListItem>
                                </Link>
                                <Link to='add-new-slot'>
                                    <ListItem>
                                        <ListItemPrefix>
                                            {/* <InboxIcon className="h-5 w-5" /> */}
                                        </ListItemPrefix>
                                        Add New Slot
                                    </ListItem>
                                </Link>
                                <Link to='all-trainer'>
                                    <ListItem>
                                        <ListItemPrefix>
                                            {/* <InboxIcon className="h-5 w-5" /> */}
                                        </ListItemPrefix>
                                        Add New Forum
                                    </ListItem>
                                </Link>
                            </>
                        }
                        {isRole === 'member' &&
                            <>
                                <Link to='member-activity-log'>
                                    <ListItem>
                                        <ListItemPrefix>
                                            {/* <InboxIcon className="h-5 w-5" /> */}
                                        </ListItemPrefix>
                                        Activity Log
                                    </ListItem>
                                </Link>
                                <Link to='member-profile'>
                                    <ListItem>
                                        <ListItemPrefix>
                                            {/* <InboxIcon className="h-5 w-5" /> */}
                                        </ListItemPrefix>
                                        Profile
                                    </ListItem>
                                </Link>
                                <Link to='booked-trainer'>
                                    <ListItem>
                                        <ListItemPrefix>
                                            {/* <InboxIcon className="h-5 w-5" /> */}
                                        </ListItemPrefix>
                                        Booked Trainer
                                    </ListItem>
                                </Link>
                            </>
                        }


                        {/* divider */}
                        <hr className="my-2 border-blue-gray-50" />
                        <Link to='/'>
                            <ListItem>
                                <ListItemPrefix>
                                    {/* <PowerIcon className="h-5 w-5" /> */}
                                </ListItemPrefix>
                                Home
                            </ListItem>
                        </Link>
                        <Link to='/trainers'>
                            <ListItem>
                                <ListItemPrefix>
                                    {/* <PowerIcon className="h-5 w-5" /> */}
                                </ListItemPrefix>
                                Trainers
                            </ListItem>
                        </Link>
                        <Link to='/training-classes'>
                            <ListItem>
                                <ListItemPrefix>
                                    {/* <PowerIcon className="h-5 w-5" /> */}
                                </ListItemPrefix>
                                Classes
                            </ListItem>
                        </Link>
                        <Link to='/community'>
                            <ListItem>
                                <ListItemPrefix>
                                    {/* <PowerIcon className="h-5 w-5" /> */}
                                </ListItemPrefix>
                                Community
                            </ListItem>
                        </Link>
                        <Link onClick={handleLogout}>
                            <ListItem>
                                <ListItemPrefix>
                                    {/* <PowerIcon className="h-5 w-5" /> */}
                                </ListItemPrefix>
                                Log Out
                            </ListItem>
                        </Link>
                    </List>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;