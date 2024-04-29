export const getTheme = () =>{
    let theme='light';
    let storedTheme = localStorage.getItem('theme');
    if(storedTheme){
        theme = JSON.parse(storedTheme);
    }
    console.log('theme from index', theme)
    return theme;
}