const styles={


    flexCenter:"flex justify-center items-center",
    flexStart:"flex justify-start items-start",
    flexBet:"flex justify-between items-center",
    heading1:"md:text-2xl text-xl font-bold ",
    heading2:"text-",
    paddingX:"",
    paddingY:"",
    marginX:"",
    marginY:"",
    paragraph:"",
    list_hover:"after:content[''] after:rounded-md after:w-0 after:h-[3px] after:block after:m-auto after:transition-all hover:after:w-full hover:text-blue-600  ",
    active_nav:"relative before:content[''] before:w-5 before:h-5 before:bg-yellow before:hidden before:sm:flex before:-bottom-[30px]  before:absolute before:m-auto before:ml-5 before:rotate-45    ",

}

export const layout={
    container:`mx-auto w-3/4 md:w-4/5 xl:w-[100%] my-5 rounded-xl h-fit p-3 bg-slate-200 shadow-md shadow-slate-600 ${styles.flexCenter}`
}

export default styles