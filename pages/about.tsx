import { GetStaticProps } from 'next';

const about = () => {
    return (
        <div>
            Enter
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (ctx) => {


    return {
        props: {
            data: null
        }
    }
}

export default about;