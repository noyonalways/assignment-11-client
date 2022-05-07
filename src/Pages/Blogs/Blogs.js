import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Accordion from "../../Components/Accordion/Accordion";
import PageTitle from '../../Components/PageTitle/PageTitle';
import Spinner from '../../Components/Spinner/Spinner';


const Blogs = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        const fetchQuestion = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:5000/questions');
            setQuestions(res.data)
            setLoading(false);
        }
        fetchQuestion();
    }, []);

    if(loading){
        return <Spinner/>
    }

    return (
        <section className="py-16 ">
            <PageTitle title={'Blogs'}/>
            <div className="mx-auto w-11/12 md:w-5/6 ">
                <h2 className="text-3xl text-center mb-12">Blogs</h2>
                <div className="flex md:justify-between flex-wrap items-center mb-10">
                    <div className="basis-[48%] mb-5 md:mb-0 sm:basis-[50%] md:basis-[30%] lg:basis-[25%] mx-auto md:mx-0" data-aos="fade-right" data-aos-duration="1000">
                        <img src="https://us.123rf.com/450wm/alexgorka/alexgorka2012/alexgorka201200070/161045373-did-you-know-vector-banner-.jpg?ver=6" alt="" className="w-full rounded" />
                    </div>
                    <div className="md:basis-[60%] basis-[100%]" data-aos="fade-left" data-aos-duration="1000">
                        <div className="rounded overflow-hidden border">
                            {
                                questions?.map(question => <Accordion loading={loading} key={question._id} singleQuestion={question} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;