import { Header } from "@/components/shared/navbar/Header";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <Header/>
            {children}
           
        </>
    );
};

export default CommonLayout;