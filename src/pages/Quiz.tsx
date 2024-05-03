import React from 'react';
// import {useLoaderData} from "react-router-dom";

export const Quiz: React.FC = () => {
    // const dataLoader = useLoaderData() as any[];
    // const [currentQuestion, setCurrentQuestion] = useState(0);

    // const handleNextQuestion = () => {
    //     if (currentQuestion < dataLoader.length - 1) {
    //         setCurrentQuestion(currentQuestion + 1);
    //     } else {
    //         setCurrentQuestion(0);
    //         // Consider adding logic to display a completion message or redirect to a different screen
    //     }
    // };

    return (
        <>
            <div
                className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <img
                    src="https://play.tailwindcss.com/img/beams.jpg"
                    alt=""
                    className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
                    width="1308"
                />
                <div
                    className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div
                    className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                    <div className="mx-auto max-w-md">
                        <div className="text-4xl text-center font-mono bg-black text-green-400 p-2 rounded-lg">
                            00:30:15
                        </div>
                        <div className="divide-y divide-gray-300/50">
                            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                                <p>
                                    Question:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <svg
                                            className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="11"/>
                                            <path
                                                d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                                                fill="none"
                                            />
                                        </svg>
                                        <p className="ml-4">
                                            Customizing your
                                            <code className="text-sm font-bold text-gray-900">
                                                tailwind.config.js
                                            </code>{" "}
                                            file
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="11"/>
                                            <path
                                                d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                                                fill="none"
                                            />
                                        </svg>
                                        <p className="ml-4">
                                            Extracting classes with
                                            <code className="text-sm font-bold text-gray-900">
                                                @apply
                                            </code>
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="11"/>
                                            <path
                                                d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                                                fill="none"
                                            />
                                        </svg>
                                        <p className="ml-4">Code completion with instant preview</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-8 text-base font-semibold leading-7">
                                <p className="flex justify-between items-center">
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M40 20.5674C40 25.8717 37.8929 30.9588 34.1421 34.7095C30.3914 38.4602 25.3043 40.5674 20 40.5674C14.6957 40.5674 9.60859 38.4602 5.85786 34.7095C2.10714 30.9588 0 25.8717 0 20.5674C0 15.2631 2.10714 10.176 5.85786 6.42525C9.60859 2.67452 14.6957 0.567383 20 0.567383C25.3043 0.567383 30.3914 2.67452 34.1421 6.42525C37.8929 10.176 40 15.2631 40 20.5674ZM20 13.0674C19.5607 13.067 19.1291 13.1823 18.7486 13.4017C18.3681 13.6212 18.0521 13.937 17.8325 14.3174C17.6739 14.6121 17.4578 14.8719 17.1969 15.0815C16.936 15.2911 16.6357 15.4462 16.3138 15.5376C15.9919 15.629 15.6549 15.6549 15.3228 15.6136C14.9907 15.5723 14.6702 15.4648 14.3805 15.2974C14.0907 15.13 13.8375 14.9061 13.6358 14.6391C13.4342 14.372 13.2882 14.0671 13.2066 13.7426C13.1249 13.4181 13.1093 13.0804 13.1605 12.7497C13.2118 12.419 13.3289 12.102 13.505 11.8174C14.3305 10.3877 15.6048 9.27029 17.1301 8.63854C18.6554 8.00679 20.3465 7.89597 21.9412 8.32328C23.5359 8.75058 24.945 9.69212 25.9501 11.0019C26.9551 12.3116 27.4999 13.9164 27.5 15.5674C27.5004 17.1189 27.0199 18.6324 26.1244 19.8995C25.2289 21.1666 23.9627 22.1249 22.5 22.6424V23.0674C22.5 23.7304 22.2366 24.3663 21.7678 24.8351C21.2989 25.304 20.663 25.5674 20 25.5674C19.337 25.5674 18.7011 25.304 18.2322 24.8351C17.7634 24.3663 17.5 23.7304 17.5 23.0674V20.5674C17.5 19.9043 17.7634 19.2685 18.2322 18.7996C18.7011 18.3308 19.337 18.0674 20 18.0674C20.663 18.0674 21.2989 17.804 21.7678 17.3351C22.2366 16.8663 22.5 16.2304 22.5 15.5674C22.5 14.9043 22.2366 14.2685 21.7678 13.7996C21.2989 13.3308 20.663 13.0674 20 13.0674ZM20 33.0674C20.663 33.0674 21.2989 32.804 21.7678 32.3351C22.2366 31.8663 22.5 31.2304 22.5 30.5674C22.5 29.9043 22.2366 29.2685 21.7678 28.7996C21.2989 28.3308 20.663 28.0674 20 28.0674C19.337 28.0674 18.7011 28.3308 18.2322 28.7996C17.7634 29.2685 17.5 29.9043 17.5 30.5674C17.5 31.2304 17.7634 31.8663 18.2322 32.3351C18.7011 32.804 19.337 33.0674 20 33.0674Z"
                                              fill="#3b82f6"/>
                                    </svg>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                        next
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
