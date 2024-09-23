import DashboardNavbar from '../components/DashboardNavbar';

// export default function Dashboard() {
//     return (
//         <div>
//             <DashboardNavbar />
//             <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
//             <p>You have successfully registered.</p>
//         </div>
//     );
// }


export default function Dashboard() {
    return (
        <div className="w-full h-screen bg-gray-100"> {/* Full width and height */}
            <DashboardNavbar />
            <div className="p-6">
                <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
                {/* Other dashboard content goes here */}
            </div>
        </div>
    );
}
