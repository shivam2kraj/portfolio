import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import shivam from "../../assets/shivam.jpg"

function Section() {

    const {theme} = useContext(ThemeContext);

    return (
        <section className={`${theme === "light" ? "text-black bg-white" : "text-white bg-black"} px-[80px] max-md:px-[40px] max-sm:px-[20px] pt-[51px] pb-[121px] max-md:pb-[51px]`}>
            <div className="flex gap-[52px] max-md:flex-col max-lg:items-start justify items-center">
                <img src={shivam} alt="" width={300} className="rounded-[13px]" />
                <div className="flex flex-col gap-[12px]">
                    <div className="flex items-end gap-[12px]">
                        <h1 className="text-[30px] max-[450px]:text-[24px] max-[340px]:text-[20px] max-lg:text-[18px] leading-[120%] font-bold">Name: </h1>
                        <p className="capitalize text-[24px] leading-[120%] italic">
                            shivam raj
                        </p>
                    </div>
                    <div className="flex items-end gap-[12px]">
                        <h1 className="text-[30px] max-[450px]:text-[24px] max-[340px]:text-[20px] max-lg:text-[18px] leading-[120%] font-bold capitalize">date of birth: </h1>
                        <p className="text-[24px] leading-[120%] italic">
                            25-01-2000
                        </p>
                    </div>
                    <div className="flex items-end gap-[12px]">
                        <h1 className="text-[30px] max-[450px]:text-[24px] max-[340px]:text-[20px] max-lg:text-[18px] leading-[120%] font-bold capitalize">highest qualification: </h1>
                        <p className="capitalize text-[24px] leading-[120%] italic">
                            mca
                        </p>
                    </div>
                    <div className="flex items-end gap-[12px]">
                        <h1 className="text-[30px] max-[450px]:text-[24px] max-[340px]:text-[20px] leading-[120%] max-lg:text-[18px] font-bold capitalize">passout year: </h1>
                        <p className="text-[24px] leading-[120%] italic">
                            2022
                        </p>
                    </div>
                    <div className="flex items-end gap-[12px]">
                        <h1 className="text-[30px] max-[450px]:text-[24px] max-[340px]:text-[20px] leading-[120%] max-lg:text-[18px] font-bold capitalize">experience: </h1>
                        <p className="text-[24px] leading-[120%] italic capitalize">
                            2 year
                        </p>
                    </div>
                    <div className="flex items-end gap-[12px]">
                        <h1 className="text-[30px] max-[450px]:text-[24px] max-[340px]:text-[20px] leading-[120%] max-lg:text-[18px] font-bold capitalize">tech stack: </h1>
                        <p className="text-[24px] leading-[120%] italic capitalize">
                            reactjs
                        </p>
                    </div>
                </div>
            </div>
           <div className="flex justify-start">
            <p className="capitalize mt-[52px] w-[1024px]">present: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, non impedit ex facilis optio nam similique. Quo deserunt dignissimos beatae dolore soluta? <strong>skill/experience</strong>Enim dolor officia eveniet, facilis, a nihil ipsam praesentium culpa in consectetur, dolorum obcaecati ex sint illo nisi optio dolorem dolores sit ducimus animi explicabo quas eius eaque repellendus! Eius architecto quisquam eos voluptatem totam delectus enim, ipsum veniam provident dolorum voluptate nulla, cumque, ullam inventore pariatur iusto repellat voluptates eligendi magni quo harum? Laborum saepe modi aliquid impedit maiores incidunt illum porro cum assumenda ad quos quibusdam facere sapiente, quaerat nesciunt quia enim, cupiditate minus. Deleniti cupiditate similique ipsum fugit officia dolorum aliquam alias, voluptas delectus sapiente beatae facere et, debitis illo est provident nisi nam tempore consectetur at? Libero, aut corrupti. Minima perferendis ad inventore voluptatibus nulla beatae, vero neque fuga, eveniet vel unde quisquam consequuntur adipisci alias sit a culpa itaque cum quas perspiciatis libero reiciendis quo rem soluta! Numquam quos quidem reprehenderit architecto nam magni unde blanditiis odit eius excepturi quisquam eveniet ex cupiditate natus eum, maxime hic sequi modi libero obcaecati repudiandae nisi iste fuga velit? Itaque ut dolore asperiores quae, consectetur placeat facilis quasi eos amet laboriosam nobis fugit iusto, quisquam natus.
            </p>
            </div> 
             <div className="flex justify-end">
            <p className="capitalize mt-[52px] w-[1024px]">past: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates delectus harum mollitia labore ab exercitationem temporibus. Perspiciatis obcaecati aut officiis illo animi? Omnis nesciunt beatae iusto doloremque reiciendis rem ullam culpa, ipsam error perspiciatis quos libero ab molestias quisquam assumenda delectus optio corrupti est a! Aliquam amet ducimus optio! Perspiciatis veritatis nulla nobis, quisquam aliquid dolore velit quos vitae alias libero sequi cumque minus doloribus! Assumenda repudiandae eos ratione distinctio, quisquam sint, aut, illo laudantium aliquid iure obcaecati dolorem quos dolor! Esse eaque aut eum in! Officia necessitatibus ipsa dicta fuga consectetur dolorem illum iusto quis. Sint, officiis at. Rerum temporibus quos similique quasi deserunt magni, dignissimos a cupiditate, dicta explicabo exercitationem voluptatem iusto, quaerat consequuntur dolorem ea error odit provident quis! Officiis voluptatem quae quisquam consequuntur impedit nulla molestiae optio voluptatibus ex dolor? Suscipit in saepe perferendis quas placeat minima sed nam voluptatem error quasi inventore sunt natus, quod, consequuntur sapiente commodi sint consequatur incidunt necessitatibus magnam fugiat alias officiis ut nostrum. Explicabo facere voluptates magni deleniti culpa voluptate velit exercitationem aperiam earum rerum assumenda deserunt iusto accusamus eaque nemo quod illum fuga, eligendi impedit magnam dolor corporis, praesentium sequi iste. Mollitia eum repellendus quas vitae voluptates reiciendis deserunt.
                
            </p>
            </div>
            <div className="flex justify-start">
            <p className="capitalize mt-[52px] w-[1024px]">future: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, neque expedita. Et aspernatur dicta, quo, debitis corporis obcaecati libero ipsam voluptates dolorem eligendi accusamus illum architecto aperiam eos totam error esse deleniti ad, ex exercitationem. Omnis aliquam, corporis quod alias repellendus non voluptas qui dicta dolor recusandae quas placeat quibusdam possimus voluptatem reprehenderit voluptates eveniet itaque beatae facilis. Ipsam exercitationem tempora ab odit repellendus rem. Officiis illum deleniti, ad deserunt dolore facere mollitia praesentium natus obcaecati soluta quam dolor aliquid magni, alias iusto. Tenetur molestias nemo ab esse, odit sit cumque ipsum eos autem culpa qui, et sed nesciunt, dolores voluptas repellat architecto aspernatur. Consequatur molestias quasi inventore adipisci esse odio fugit quo labore vero amet. Nostrum doloribus quisquam dicta quaerat autem unde mollitia maiores repudiandae deserunt ducimus impedit totam, perspiciatis asperiores in quibusdam maxime reprehenderit temporibus, dolorum voluptatibus vitae non amet? Nihil facere dolorem modi nostrum adipisci, harum soluta facilis qui ex quam veritatis commodi eligendi in? Dicta magnam impedit odio saepe. Soluta quis at delectus sint atque illum nostrum labore. Et maxime harum possimus consequuntur tempore, delectus inventore magni animi optio impedit tenetur. Odio illo error facere, excepturi consequatur culpa quibusdam autem dolorem suscipit doloremque consectetur laboriosam placeat! 
                </p> 
                </div> 
                    
        </section>
    )
}

export default Section