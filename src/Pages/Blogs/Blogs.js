import React, {useState, useEffect} from 'react';
import Accordion from "../../Components/Accordion/Accordion";
import Loading from '../../Components/Loading/Loading';

const Blogs = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setLoading(true)
        fetch('http://localhost:5000/questions')
        .then(res => res.json())
        .then(data => setQuestions(data))
        setLoading(false)
    }, [])

    if(loading){
        return <Loading />
    }

    return (
        <section className="py-16 ">
            <div className="mx-auto w-11/12 md:w-5/6 ">
                <h2 className="text-3xl text-center mb-12">Blogs</h2>
                <div className="flex md:justify-between flex-wrap items-center mb-10">
                    <div className="basis-[45%] sm:basis-[50] md:basis-[30%] lg:basis-[25%] mx-auto md:mx-0" data-aos="fade-right" data-aos-duration="1000">
                        <img src="https://us.123rf.com/450wm/alexgorka/alexgorka2012/alexgorka201200070/161045373-did-you-know-vector-banner-.jpg?ver=6" alt="" className="w-full" />
                    </div>
                    <div className="md:basis-[60%] basis-[100%]" data-aos="fade-left" data-aos-duration="1000">
                        <div className="rounded overflow-hidden border">
                            {
                                questions.map(question => <Accordion key={question.i_d} singleQuestion={question} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;