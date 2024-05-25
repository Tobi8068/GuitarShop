'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { checkAuth } from '@/lib/features/user';

const withAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        const router = useRouter();
        const dispatch = useDispatch();
        const { data, error } = useSelector((state) => state.user);

        useEffect(() => {
            dispatch(checkAuth());
        }, [dispatch]);

        useEffect(() => {
            if (!data && error === 'unauthorized') {
                router.push('/login');
            }
        }, [ data, error, router]);

        return data ? <WrappedComponent {...props} /> : null;
    };

    return Wrapper;
};

export default withAuth;
