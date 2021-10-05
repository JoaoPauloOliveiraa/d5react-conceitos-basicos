type Props ={
    name: string;
    age: number;
}

export const Header = ({name, age}: Props)=>{
    return(
        <header>
            <h1>Título do site</h1>
            <h2>Olá {name}, você tem {age} anos!</h2>
        </header>
    );
}

