import Meta from 'layouts/meta';

const SignIn = () => {
    return (
        <>
            <Meta title="SignIn" />
            <div className="w-full max-h-screen custom-scrollbar-hidden">
                <div className="w-full">
                    <h1 className="text-gray-600 text-2xl mb-16 font-bold">SignIn</h1>
                    <div className="">Content comming soon...</div>
                </div>
            </div>
        </>
    );
};

export default SignIn;

SignIn.pageOptions = {
    requireAuth: false,
    getLayout: (children: any) => <>{children}</>,
};
