interface MyComponentProps{
    name:string;
    age:number;
}

const MyComponent:React.FC<MyComponentProps>=({name,age})=>{
    return(
        <div>
            Name:{name}
            Age:{age}
        </div>
    )
}
export default MyComponent;