import React from 'react'

const Alert = () => {
    return (
        <div>

            <div className="flex p-4 mb-4 mt-4 text-lg text-blue-800 border mr-10 ml-10 border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium"> <h2>Info alert!</h2></span>We are currently experiencing technical issues due to high demand. We apologize for the inconvenience and are actively working to resolve them. We will be back online soon. For more information, please contact: <a href='mailto:admin@whatsgpt.tech.'>admin@whatsgpt.tech.</a> 
                </div>
            </div>


        </div>
    )
}

export default Alert