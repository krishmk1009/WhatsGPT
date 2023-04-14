import React from 'react'
import { logo, profile, ss2, ss3, ss4, ss5 } from '../assets'
import { Footer, Navbar } from '../components'



const Policy = () => {
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

                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Privacy Policy & Community Guidelines</h1>
                        </header>

                        <div className="lg:pr-4">
                            <div className="">


                                <p className="mt-6  leading-8 text-gray-300"> <strong >Privacy Policy: </strong>
                                    <li>
                                        We collect personal information such as name, phone number,  to provide our chatbot services.



                                    </li>
                                    <li>
                                        We store this information securely and do not share it with third parties unless required by law or with explicit user consent.


                                    </li>
                                    <li>   Users can request their data to be deleted or modified by contacting us.
                                    </li>
                                    <li>  We use user data for research and marketing purposes to improve our services.
                                    </li>


                                </p>

                                <p className="mt-6  leading-8 text-gray-300"> <strong >Safety Policy:
                                    : </strong>
                                    <li>
                                        We do not tolerate any abusive, discriminatory, or illegal behavior in our chatbot.




                                    </li>
                                    <li>
                                        Users must follow our community guidelines and respect other users.

                                    </li>
                                    <li>  We reserve the right to suspend or ban users who violate our guidelines.
                                    </li>
                                    <li> Users can report inappropriate behavior or content by contacting us.
                                    </li>
                                    <li>  We reserve the right to suspend or ban users who violate these guidelines.
                                    </li>

                                </p>
                                <p className="mt-6  leading-8 text-gray-300"> <strong >
                                    Payment Policy:
                                    : </strong>
                                    <li>


                                        Payment is due upon receipt of services.


                                    </li>
                                    <li>
                                        We accept payments through secure payment gateways.

                                    </li>
                                    <li>  We do not store user payment information.
                                    </li>
                                    <li> Refunds are available for valid reasons such as technical errors or service failure.
                                    </li>
                                    <li> Disputes can be resolved through arbitration.

                                    </li>

                                </p>
                                <p className="mt-6  leading-8 text-gray-300"> <strong >Community Guidelines: </strong>
                                    <li>
                                        Please interact with the chatbot in a respectful and appropriate manner.




                                    </li>
                                    <li>
                                        Do not engage in behavior that is abusive, discriminatory, or illegal.

                                    </li>
                                    <li>  Do not try to access or manipulate the chatbot's system or functionality in any way.
                                    </li>
                                    <li> Do not share personal information or confidential data with the chatbot that you do not want to be stored or processed.
                                    </li>
                                    <li>  We reserve the right to suspend or ban users who violate these guidelines.
                                    </li>

                                </p>




                            </div>

                            
                        </div>
                       

                    </article>
                </div>
                <Footer />
            </main>
            



        </>
    )
}

export default Policy