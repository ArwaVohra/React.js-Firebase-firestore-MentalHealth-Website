import React from 'react';
import Navibar from './navibar';
import Foot from './foot.js'

function Aspect() {
    return (
        <div>
            <Navibar />
            <section id="blog" className="section     before-content ">
                <div className="container text-center ">
                    <div className='titles' >
                        <h6 className="subtitle ">use our</h6>
                        <h6 className="section-title mb-2 ">Mind Reviving Aspects</h6>
                        <p className="mb-5 pb-4">Feel enlighten and leave behind your negative reasonings</p>
                    </div>

                    {/* ************************  MEDICATION ******************************** */}

                    <div>
                        <h2 className='text-justify' >Meditation</h2>
                        <p className='text-justify' >Join Meditation for healthy Living Session for all age group to Live healthy life. Being Spiritual Foundation Help You to Perform the Perfect Practice of Meditation</p>
                    </div>

                    <div className="row text-left">
                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-1.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/medi.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">15-Minute Meditation For Self Love</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Goodful</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Close your eyes and release all the negative thoughts that you have been holding on to. It's time from some self-love.</p>
                                    <a href="https://youtu.be/itZMM5gCboo">Read More..</a>
                                </div>
                            </div>
                        </div>

                        {/* ************************ 2 **************************** */}

                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-2.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/medi2.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">5-Minute Meditation You Can Do Anywhere</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Goodful</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>In just 5 minutes you can reset your day in a positive way.Special thanks to John Davisi for lending us his incredibly soothing voice</p>
                                    <a href="https://youtu.be/inpok4MKVLM">Read More..</a>
                                </div>
                            </div>
                        </div>

                        {/* ************************ 3 **************************** */}


                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-3.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/medi3.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">10 Minute Crystal Singing Bowl Meditation | Sound Healing For Relaxation & Stress Relief</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Jessica Richburg</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Enjoy this 10 minute sound bath meditation with crystal singing bowls for deep relaxation and healing. </p>
                                    <a href="https://youtu.be/unCya_-8ECs">Read More..</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* **********************************************  MUSIC  ************************** */}



                    <div>
                        <h2 className='text-justify' >Soft Music</h2>
                        <p className='text-justify' >
                            It provides a total brain workout. Can reduce anxiety, blood pressure, and pain as well as improve sleep quality, mood, mental alertness, and memory</p>
                    </div>
                    <div className="row text-left">
                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-1.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/music.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">[Study Sleep Relax] Meditation - peaceful relaxing soothing</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: MONOMAN</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>In every happy moment, I know an inevitable shadow, the Sadness, is coming. So I tend to feel both sentiments at the same time. </p>
                                    <a href="https://youtu.be/FjHGZj2IjBk">Read More..</a>
                                </div>
                            </div>
                        </div>
                        {/* ***************** 2 ************************************ */}

                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-2.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/music2.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">nightfall in Tokyo. 🌙🗼 lofi hip hop / chill beats</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: The Lofi Van</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>I don’t know where I’m going, but I’m on my way.  lofi hip hop / relaxing beats (1 hour)   #lofichill #lofirelax #studybeats</p>
                                    <a href="https://youtu.be/hqbvg9JC4Jg ">Read More..</a>
                                </div>
                            </div>
                        </div>
                        {/* ***************** 3 ************************************ */}


                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-3.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/music3.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">ULTRA RELAXING Sleep Music with Rain Sound.</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: The Soul of Rain</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>📜Message from the composer and producer of The Soul of Rain:"I write melodic songs with the sound of rain...Hope you love it. "</p>
                                    <a href="https://youtu.be/B7lTHTZ4_IY">Read More..</a>
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* ********************************** PODCAST  ***************************************** */}




                    <div>
                        <h2 className='text-justify' >Podcast</h2>
                        <p className='text-justify' >Podcasts can help you establish a sense of community and avoid feeling isolated as you focus on managing your mental health</p>
                    </div>
                    <div className="row text-left">
                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-1.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/pod.jpeg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Dr. Laurie Santos' 5 Favorite Coping Tips | #WithMe for World Mental Health Day</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Dr. Laurie Santos</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>In honor of World Mental Health Day, Yale Professor of Psychology Dr. Laurie Santos shares her top 5 favorite coping tips according to science. On October 10th - World Mental Health</p>
                                    <a href="https://www.youtube.com/watch?v=kCQim9VrnDY">Read More..</a>
                                </div>
                            </div>
                        </div>

                        {/* ************************ 2 *********************** */}

                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-2.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/pod2.jpeg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Mental Health Moment: The Road // The Hilarious World of Depression</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: The Hilarious World of Depression</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>We’ve been sharing short and simple videos all of Mental Health Awareness Month on tips from our listeners that help keep them mentally healthy</p>
                                    <a href="https://www.youtube.com/@thehilariousworldofdepress2874">Read More..</a>
                                </div>
                            </div>
                        </div>


                        {/* ************************ 3 *********************** */}


                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-3.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/pod3.jpeg"} />

                                <div className="card-body">
                                    <h5 className="card-title">The Science of Depression | Sona Dimidjian | Podcast Episode 413</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Ten Percent Happier</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>This episode features one of the world’s leading experts in depression and how meditation can help. Dr. Sona Dimidjian is a professor in the Department of Psychology and Neuroscience.</p>
                                    <a href="https://www.youtube.com/watch?v=QXz8uOU3CXs">Read More..</a>
                                </div>
                            </div>
                        </div>
                    </div>





                    {/* ********************** YOGA **************** */}


                    <div>
                        <h2 className='text-justify' >Yoga</h2>
                        <p className='text-justify' >yoga supports stress management, mental health, mindfulness, healthy eating, weight loss and quality sleep.</p>
                    </div>
                    <div className="row text-left">
                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-1.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/yoga.jpg"} />

                                <div className="card-body">
                                    <h5 className="card-title">30 Minute Relaxing Yoga For Mental Health | All Levels - Slow Seated Flow</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Jessica Richburg</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Welcome to your grounding and calm yoga flow to improve mental health. This class is for all levels (beginners to seasonal practitioners) and is intended to promote mindfulness.</p>
                                    <a href="https://youtu.be/COp7BR_Dvps">Read More..</a>
                                </div>
                            </div>
                        </div>
                        {/* ********************** 2 **************************** */}
                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-2.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/yoga2.jpeg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Yoga For Depression - Yoga With Adriene</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Yoga With Adriene</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Yoga For Depression is a 15 min yoga practice to help balance and restore both the physical and emotional body. Tend to your nervous system through mindful yoga to tend to the brain and body connect in a powerful way</p>
                                    <a href="https://www.youtube.com/watch?v=Sxddnugwu-8">Read More..</a>
                                </div>
                            </div>
                        </div>

                        {/* ************************** 3 **************************** */}


                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-3.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/yoga3.jpeg"} />

                                <div className="card-body">
                                    <h5 className="card-title">15-Day Yoga Ritual Challenge Day 8 - Nervous System Reset Meditation</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Bad Yogi Yoga</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>Do you ever just feel like your nervous system is fried? Are stress and anxiety such a dominant theme lately that you wish there was a reset button or something?!</p>
                                    <a href="https://www.youtube.com/watch?v=5Hk_jq8mK78">Read More..</a>
                                </div>
                            </div>
                        </div>
                    </div>











                </div>
            </section>
            <Foot />
        </div>
    )
}

export default Aspect;