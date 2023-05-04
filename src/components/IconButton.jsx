export default function IconButton(attrs) {

    let style = "flex items-center justify-center w-[32px] h-[32px] rounded-md p-[2px] bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all duration-300 overflow-hidden"
    style += attrs.className

    return (
        <a {...attrs} className={`${style}`} >
        </a>
    )
}