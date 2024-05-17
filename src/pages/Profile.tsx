import {FC} from "react";
import {useCurrentUser} from "@/hook/use-current-user.ts";
import {useFetcher} from "react-router-dom";

export const Profile: FC = () => {
     const fetcher = useFetcher();
     const {currentUser} = useCurrentUser();
    return (
        <div className="h-full flex justify-center items-center" style={{ minHeight: "100vh" }}>
            <div className="" style={{ maxWidth: "80%", minWidth: "600px", width: "auto" }}>

                 <div className="p-4 sm:p-6 lg:p-8 bg-white shadow-md" style={{ borderRadius: "18px", border: "1px solid #e5e7eb", flexGrow: 1 }}>
                    
                                    <p className="font-bold" style={{marginBottom: "60px"}}>User Profile</p>

                                    <div className="md:flex">
                                        <img id="showImage" className="max-w-xs w-32 items-center border rounded-lg shadow-lg"
                                             src={currentUser?.avatar || "https://via.placeholder.com/150"}
                                             alt=""/>

                                    <span style={{ fontSize: "2em", fontWeight: "bold" }} className="border-1 rounded-r px-4 py-2 w-full">{currentUser?.name}</span>
                                    </div>
                                  

                                    <fetcher.Form method="post" action={`/auth/logout`}>
                                        <button type={"submit"} style={{background: "#5e86c5"}} className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                                        Sign out
                                        </button>
                                    </fetcher.Form>

                                    <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Nom</label>

                                    <div className="flex">
                                        <span className="border-1  rounded-r px-4 py-2 w-full">{currentUser?.name}</span>
                                    </div>

                                    <label htmlFor="email" className="font-semibold text-gray-700 block pb-1">Email</label>

                                    <div className="flex">
                                        <span className="border-1  rounded-r px-4 py-2 w-full">{currentUser?.email}</span>
                                    </div>

                                    <label htmlFor="email" className="font-semibold text-gray-700 block pb-1">Score</label>

                                    <div className="flex">
                                        <span className="border-1  rounded-r px-4 py-2 w-full">{currentUser?.score}</span>
                                    </div>              

                </div>


            </div>
        </div>
    );
}