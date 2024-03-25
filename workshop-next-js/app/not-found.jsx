import Link from "next/link";

const NotFound = () => {
    return (
    <div>
    <h1>not found page</h1>
    <p>Sorry, page not found</p> 

    <Link href='/'>
        <p className="my-4 bg-blue-300 text-white">Back to Home</p>
    </Link>
    </div>
    );
    };


    export default NotFound;