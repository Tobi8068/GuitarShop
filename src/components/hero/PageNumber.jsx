import Link from "next/link";

const PageNumber = ({ pgNos, searchParams, name }) => {
    
    const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;

    return (
        <>
            {pgNos.map((pg, index) => (
                <Link key={index} href={`${name}?page=${pg}`}>
                    <span className={`${(!searchParams.page && pg === 1) || (searchParams.page && currentPage === pg) ? 'text-red-400  dark:text-white' : ' text-gray-700 dark:text-gray-500'}`}>
                        {pg}
                    </span>
                </Link>
            ))}
        </>
    );
};

export default PageNumber