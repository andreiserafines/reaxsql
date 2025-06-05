import React, { useState } from "react";
import Icon from '@mdi/react';
import { mdiFacebookMessenger, mdiBell, mdiViewGrid } from '@mdi/js';
import yonille from "../../assets/yonille.jpg";
import background from "../../assets/background.avif";
export function Home() {
    const [showMore, setShowMore] = useState(false);

    const toggleText = () => setShowMore(!showMore);
    return (
        <div className="min-h-screen mx-auto">
            <div className="bg-white shadow-sm sticky top-0 z-50">
                {/* Navbar */}
                <div className=" flex justify-between items-center max-w-[1300px] px-3 xl:mx-auto py-5">
                    {/* Logo */}
                    <div className="relative">
                        <div className="absolute inset-x-0 -bottom-3 w-11 h-11 md:w-12 md:h-12 rounded-full bg-green-300 mx-auto" />
                        <h2 className="text-[16px] md:text-lg font-bold text-green-800 relative z-10">
                            Polarisphere.
                        </h2>
                    </div>

                    {/* Utilities & Profile */}
                    <div className="hidden md:flex items-center gap-4 text-gray-600">
                        <Icon path={mdiViewGrid} size={1} />
                        <Icon path={mdiBell} size={1} />
                        <Icon path={mdiFacebookMessenger} size={1} />
                    </div>
                </div>
            </div>

            {/* Main Layout */}
            <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-6 px-3 py-6">

                {/* Left Sidebar */}
                <aside className="hidden lg:block lg:w-64 xl:w-72 xl:sticky xl:top-24 self-start">
                    <div className="bg-white shadow-sm hover:shadow-md transition rounded-2xl overflow-hidden w-full max-w-sm mx-auto">
                        {/* Cover + Avatar */}
                        <div className="relative">
                            <img
                                src={background}
                                alt="Cover"
                                className="h-22 w-full object-cover"
                            />
                            <img
                                src={yonille}
                                alt="Avatar"
                                className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-white h-20 w-20 object-cover shadow-sm"
                            />
                        </div>

                        {/* Name & Handle */}
                        <div className="text-center pt-12 pb-4">
                            <h3 className="text-[16px] font-semibold">Yonille Palomo</h3>
                            <p className="text-gray-500 text-[13px]">@palomoral</p>
                        </div>

                        {/* Info Stats */}
                        <div className="flex justify-center gap-6 p-3 border-t border-gray-200 text-[12px] text-gray-500">
                            <div className="text-center">
                                <span className="font-semibold block text-black">Enlisted</span>
                                Classification
                            </div>
                            <div className="text-center border-x px-4 border-gray-200">
                                <span className="font-semibold block text-black">O/IS6</span>
                                Office
                            </div>
                            <div className="text-center ">
                                <span className="font-semibold block text-black">Programmer</span>
                                Designation
                            </div>

                        </div>

                        {/* Profile Button */}
                        <div className="text-center py-3 border-t border-gray-200">
                            <button className="text-green-600 hover:bg-green-50 rounded-full py-2 px-5 text-[13px] font-medium transition">
                                My Profile
                            </button>
                        </div>
                    </div>

                </aside>

                {/* Main Feed */}
                <main className="flex-1 md:mx-0">
                    <div className="bg-white shadow rounded-2xl p-6 ">
                        <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                            <img
                                src={yonille}
                                className="bg-gray-300 h-10 w-10 rounded-full"
                                alt="Profile"
                            />
                            <input
                                placeholder="What's on your mind?"
                                className="bg-gray-100 w-full py-3 px-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                        </div>

                        {/* Feed Options */}
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center gap-3">
                                <div className="h-7 w-7 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                                    <Icon path={mdiViewGrid} size={1} />
                                </div>
                                <div className="h-7 w-7 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                                    <Icon path={mdiFacebookMessenger} size={1} />
                                </div>
                            </div>  
                            <button className="text-green-600 hover:bg-green-50 rounded-full py-2 px-5 text-[13px] font-medium transition"> Post</button>
                        </div>
                    </div>

                    {/* Feed Items */}
                    <div className="bg-white shadow rounded-2xl p-6 mt-6">
                        <div className="flex items-center gap-3">
                            <img
                                src={yonille}
                                className="bg-gray-300 h-10 w-10 rounded-full"
                                alt="Profile"
                            />
                            <div className="flex-1">
                                <h3 className="text-md font-semibold flex items-center gap-1">Yonille Palomo
                                <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                                <span className="font-normal text-xs text-gray-500">@palomoral</span>
                                </h3>
                                <p className="text-gray-500 text-[11px]">Few minutes ago.</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className={`text-gray-500 text-[13px] transition-all duration-300 ${showMore ? "" : "line-clamp-2"}`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tenetur impedit laborum delectus itaque accusantium esse dolores numquam labore voluptatum adipisci architecto rem aut consequatur corporis dolorum rerum consequuntur ullam nulla tempore, voluptas mollitia quos magnam debitis? Explicabo officia, atque nulla porro officiis suscipit possimus at consequatur illo ab dignissimos molestiae iusto perspiciatis sequi laborum impedit provident commodi nostrum neque eos distinctio! Ut nostrum aliquid deleniti aspernatur officia rem repellat ea voluptatum possimus ex deserunt doloremque, minus dolorum voluptatem qui atque! Ratione quas reiciendis ipsam temporibus consequatur dolorem earum aliquid autem modi ducimus, dicta quia? Sapiente commodi tempore quia magni corrupti delectus iste tempora porro doloribus beatae assumenda eius in omnis molestiae accusantium tenetur at, atque dicta officiis, excepturi fuga nostrum suscipit iure totam. Perspiciatis animi delectus, maxime natus quia mollitia cum amet vel recusandae, doloribus laborum non, dolores ratione fuga consequuntur veniam tempore error nam at eaque. Nesciunt veritatis magnam, laboriosam quisquam facere accusantium, aliquid voluptatem consequuntur alias excepturi optio mollitia rerum! Quo eius suscipit possimus? Atque facere expedita non officia aliquam consectetur magni quibusdam cupiditate, voluptatibus, dignissimos quia odio cumque, incidunt nam officiis commodi consequuntur maxime id unde eligendi. Possimus et, magnam expedita reiciendis ullam nam aspernatur necessitatibus suscipit error earum deserunt blanditiis quasi tempora. Soluta officiis a asperiores corporis tempore architecto molestiae, sequi, unde deleniti amet iste eveniet molestias excepturi ipsam fugiat velit earum aliquid harum inventore cumque, incidunt error! Enim distinctio ipsa alias ratione sapiente fugit explicabo necessitatibus, quasi, non repellendus assumenda numquam dolorem impedit eligendi quis perferendis et ipsum excepturi unde facilis ut corporis minus sed maxime! Eligendi itaque animi, sapiente optio neque distinctio libero nesciunt voluptatem illo officiis iusto reprehenderit vitae repudiandae vel hic totam exercitationem non tempora assumenda dolorum, odio praesentium vero. Et doloribus suscipit quas numquam repellendus perspiciatis nam accusamus, sapiente, perferendis facere, earum assumenda a porro eum impedit sequi reiciendis culpa odit consequatur! Autem ad necessitatibus, iusto non omnis unde vitae quibusdam in perspiciatis harum laboriosam itaque architecto eos. Culpa magnam suscipit quo itaque deserunt. Odit adipisci, excepturi dolorum iusto ut enim ducimus culpa quaerat eaque quae eum. Fuga pariatur deleniti quibusdam, inventore voluptate tempore est, esse nesciunt in animi nisi tenetur eum nihil nam? Cum sed aut ducimus perspiciatis aspernatur minus, molestiae totam repellat reiciendis iure harum voluptate, veritatis ipsa nesciunt impedit. Esse officiis odit voluptatem aut a recusandae maiores perferendis provident, excepturi incidunt, sequi sint. Culpa doloribus maiores nihil itaque accusantium ab atque! Illum consequatur earum pariatur tempore quas corrupti perspiciatis quae ut beatae, qui animi recusandae? At eius saepe hic unde, mollitia nostrum ut, fuga eum reprehenderit facere, cupiditate exercitationem iusto! Fugit rem aliquam quidem incidunt obcaecati nam facere laudantium quam numquam sed sunt quibusdam itaque harum necessitatibus, delectus eaque maxime nesciunt omnis tempore ut cupiditate rerum cum? Cum repellat a sint. Temporibus ut beatae provident, hic, fuga, sunt magni cupiditate eius sequi dolore quaerat quis doloribus fugit aspernatur! Molestias, illum excepturi enim expedita sint facilis quod fugiat modi adipisci ad reiciendis ipsum necessitatibus earum obcaecati vel! Sed ad, iusto quisquam earum delectus vitae nostrum tempore exercitationem fugit dolores nobis dolor, numquam laborum neque atque nam, doloremque adipisci consectetur excepturi possimus expedita deleniti perspiciatis? Molestiae nostrum cum amet saepe veniam eligendi, blanditiis quo sed cupiditate magnam unde fugiat nulla nesciunt maxime soluta ratione facilis culpa id? Reprehenderit eaque dolorem tempora omnis, quia ab amet incidunt officiis nam ut maiores beatae accusamus exercitationem aspernatur veniam cupiditate debitis aliquid libero. Eaque quam sapiente, ullam quisquam at ipsam similique? Culpa, deserunt veritatis autem, dolores facilis incidunt commodi blanditiis est dolorum quam asperiores expedita esse ab sunt exercitationem, consequuntur tenetur. Illo voluptas accusamus ea maxime amet, laudantium, dicta architecto iste rem libero qui eos odio vitae cumque sequi ducimus at aliquam provident saepe? Voluptatem nisi perferendis recusandae, neque ad iusto. Delectus ratione corrupti cumque enim consectetur atque voluptatibus suscipit excepturi! Enim reprehenderit reiciendis aliquam aliquid ea tenetur maiores beatae exercitationem repellendus vel laboriosam quisquam, at tempore recusandae. Nihil fuga fugit iste voluptas at id cupiditate explicabo impedit minima, aperiam tempora molestias repellendus laudantium? Aliquid facere recusandae accusamus porro assumenda in, ipsa rerum qui. Nemo, veritatis nobis sunt fugit, illo aspernatur illum suscipit id molestias dicta molestiae totam eaque? Inventore quia ipsam facere a totam, similique nulla corrupti aliquid autem perferendis temporibus error rerum deleniti sed cupiditate saepe ab in! Magni deserunt quidem eos id perspiciatis? Temporibus nisi ex unde dolorem quo id ab aspernatur veniam architecto, reiciendis harum suscipit sunt aliquam, quis quibusdam sed ipsam accusantium. Numquam fuga, ipsam et nostrum rerum odit dicta, magnam iste accusantium porro unde consequatur reprehenderit iusto! Nesciunt in eveniet consequatur debitis doloremque hic praesentium omnis exercitationem neque nisi aperiam accusamus ratione tempore corporis incidunt, voluptatem vitae, a beatae! Impedit ea excepturi fugit, cupiditate molestias enim architecto nihil ullam veniam, sed a praesentium repudiandae neque, minus voluptatibus ut numquam quod. Adipisci porro ut tempora quos dolorem! Numquam repellat illum, repudiandae, ex deserunt ducimus officia quis natus nostrum at illo nesciunt necessitatibus odit excepturi ipsam totam dolores doloribus ad. Saepe soluta totam sequi voluptatibus accusantium eum id deleniti culpa, delectus perferendis molestias explicabo iste quod, ipsam, modi error. Aut eligendi, eum maxime porro dolorum cupiditate distinctio atque delectus repellat ex voluptatum praesentium id nam dolore perferendis impedit ipsa et saepe, adipisci magnam vero vel sint commodi. Architecto explicabo maiores laudantium quis magni minus error ducimus dignissimos. Odio saepe voluptates, perspiciatis esse fugiat quod minus error dolorem sit. Corporis sunt minus laborum quas blanditiis fugiat, sapiente quod vitae sit officia minima quisquam voluptatibus nostrum excepturi ratione in illum delectus molestiae impedit, odit amet dolores! Amet quos accusamus voluptatum dolore vitae? Modi, harum ipsa! Suscipit, natus veritatis, quae totam sed quia deserunt temporibus distinctio molestiae aut molestias ea, esse omnis maiores? Autem vel ratione laudantium dicta error neque, doloribus nemo delectus pariatur ipsam officia perspiciatis dolores, debitis aliquam, provident corrupti quis. Iusto debitis in harum facere odio dignissimos aliquam perferendis ex, alias omnis reiciendis, maiores sunt vitae voluptatum cum porro illum dolores, incidunt minima. Corporis iure facilis doloremque dolores magnam? </p>
                            <button
                                onClick={toggleText}
                                className="mt-1 text-green-500 hover:underline text-[13px] cursor-pointer"
                            >
                                {showMore ? "See less" : "See more"}
                            </button>
                        </div>
                    </div>
                </main>

                {/* Right Sidebar */}
                <aside className="hidden lg:block lg:w-64 xl:w-72 xl:sticky xl:top-24 self-start">
                    <div className="bg-white shadow-sm hover:shadow-md transition rounded-2xl p-6">
                    
                        <h3 className="text-[15px] font-semibold mb-4 text-gray-800">
                            Duty Section
                        </h3>

                        <div className="mb-4 flex justify-center">
                            <div className="flex items-center justify-between border border-gray-200 rounded-full overflow-hidden text-[12px] w-fit">
                                <button className="px-4 py-1 text-green-600 bg-green-50 font-medium">Outgoing</button>
                                <button className="px-4 py-1 text-gray-500 hover:text-gray-700">Incoming</button>
                            </div>
                        </div>
                       


                        <div className="mb-4">
                            {/* Date */}
                            <p className="text-gray-500 font-semibold text-[11px] mb-4 uppercase">
                                Polaris official duty
                            </p>

                            {/* Duty List */}
                            <div className="flex flex-col space-y-3">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="h-7 w-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-[13px] font-bold">
                                            {/* Optional icon/text */}
                                            <span>K</span>
                                        </div>
                                        <div>
                                            <h4 className="text-[13px] font-medium text-gray-800">Kobe Bryant</h4>
                                            <p className="text-[11px] text-gray-500">JOOD</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            {/* Date */}
                            <p className="text-gray-500 font-semibold text-[11px] mb-4 uppercase">
                                gangway
                            </p>

                            {/* Duty List */}
                            <div className="flex flex-col space-y-3">
                                {[...Array(2)].map((_, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="h-7 w-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-[13px] font-bold">
                                            {/* Optional icon/text */}
                                            <span>K</span>
                                        </div>
                                        <div>
                                            <h4 className="text-[13px] font-medium text-gray-800">Kobe Bryant</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            {/* Date */}
                            <p className="text-gray-500 font-semibold text-[11px] mb-4 uppercase">
                                o/is6
                            </p>

                            {/* Duty List */}
                            <div className="flex flex-col space-y-3">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="h-7 w-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-[13px] font-bold">
                                            {/* Optional icon/text */}
                                            <span>K</span>
                                        </div>
                                        <div>
                                            <h4 className="text-[13px] font-medium text-gray-800">Kobe Bryant</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    
                </aside>


            </div>
        </div>
    );
}
