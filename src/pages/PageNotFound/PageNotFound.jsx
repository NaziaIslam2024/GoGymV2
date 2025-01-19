import notFoundImg from '../../assets/404.gif';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='max-w-3xl mx-auto flex flex-col items-center'>
            <img src={notFoundImg} alt="" className='w-full ' />
            <div className="flex gap-2">
                <Link to='/' size="lg" color="white" className="bg-[#e2ff31] p-4 font-bold">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;