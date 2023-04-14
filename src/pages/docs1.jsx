import React from 'react'
import { logo, profile, ss2, ss3, ss4, ss5 } from '../assets'
import { Footer, Navbar } from '../components'



const Docs1 = () => {
    return (
        <>



            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24  bg-white dark:bg-gray-900">
            <a href='/' >
                <button class="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 ml-10 mb-10 px-4 rounded-full">
                    Back To Home Page
                </button>
                </a>
                <div className="flex justify-between px-4  mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img className="mr-4 w-16 h-16 rounded-full" src={profile} alt="Jese Leos" />
                                    <div>
                                        <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Krushna Modhave</a>
                                        {/* <p className="text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p> */}
                                        <p className="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">April. 12, 2023</time></p>
                                    </div>
                                </div>

                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Step-by-Step Guide: Configuring Your API Key with WhatsGPT</h1>
                        </header>
                        <img src={logo} className='mt-2 ' width={200} alt="" />

                        <div className="lg:pr-4">
                            <div className="">
                                <p className="text-base font-semibold leading-7 text-indigo-600">Get Unlimited Credits</p>
                                <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">1. Visit OpenAI Website</h3>
                                <p className="mt-6  leading-8 text-gray-300">To access OpenAI website, please follow these steps:
                                    <li>
                                        1. Open a web browser on your computer or mobile device.
                                    </li>
                                    <li>
                                        2. In the address bar of the web browser, type<strong> <a href='https://platform.openai.com/overview' target='blank'>`https://platform.openai.com/overview`</a> </strong> and hit Enter.
                                    </li>
                                    <li>3. Click on the Signup button present on the top right corner</li>
                                </p>




                            </div>
                            <img src={ss2} className='mt-5 mb-5' alt="" />
                            <div className="lg:pr-4"></div>
                        </div>
                        <div className="lg:pr-4">
                            <div className="">

                                <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">2. Create Account using Gmail and Phone Number</h3>
                                <p className="mt-6  leading-8 text-gray-300">To create your account , please enter the Gmail and click continue:
                                    <li>
                                        1. Try to use new Phone number and Gmail while creating your account.
                                    </li>
                                    If you are an existing user, chances are your credits are already exhausted so make sure you sign up with a new phone number.

                                </p>




                            </div>
                        </div>
                        <img src={ss3} className='mt-5 mb-5' alt="" />
                        <div className="lg:pr-4"></div>
                        <div className="lg:pr-4">
                            <div className="">

                                <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">3. Create Your Api Keys</h3>
                                <p className="mt-6  leading-8 text-gray-300">To create your keys , please follow these steps:
                                    <li>
                                        1. After succesfull creation of your account , click on the profile icon present at the top right corner.
                                    </li>
                                    <li>
                                        2. From the dropdown menu , select the option - View Api Keys

                                    </li>
                                    <li> 3. Now all the past created keys will show here.
                                    </li>
                                    <li> 4. To create a new Api key, click on : Create New Secret Key
                                    </li>
                                    <li> 5. After that, copy the Api key and save it in notepad or somewhere else.
                                    </li>
                                </p>




                            </div>
                            <img src={ss4} className='mt-5 mb-5' alt="" />
                            <div className="lg:pr-4"></div>
                        </div>
                        <div className="lg:pr-4">
                            <div className="">

                                <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">4. configure Key With WhatsGPT</h3>
                                <p className="mt-6  leading-8 text-gray-300">To see your keys , please follow these steps:
                                    <li>
                                        1. After creating a Api Key, close the window and open WhatsGPT
                                    </li>
                                    <li>
                                        2. In the ChatBox ,write the message <strong> #CONFIGURE_API=YOUR_KEY</strong>.

                                    </li>
                                    <li> 3. Replace 'YOUR_KEY' with the key that you copied.
                                    </li>
                                    <li> 4. Now send the message.
                                    </li>

                                </p>




                            </div>
                            <img src={ss5} className='mt-5 mb-5' alt="" />
                            <div className="lg:pr-4"></div>
                        </div>
                        <div className=" leading-7 text-gray-200 text-justify ">
                            <p>If the API key is Valid then you will get a message that api key is added succesfully .If not then try to create another key and configure it.
                                <strong> Now enjoy the unlimited access of WhatsGPT !!</strong>
                            </p>


                        </div>


                    </article>
                </div>
                <Footer />
            </main>



        </>
    )
}

export default Docs1