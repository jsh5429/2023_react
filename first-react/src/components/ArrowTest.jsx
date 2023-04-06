const ArrowTest = (props) =>{
    const {name, check} = props;
    return(
        <div>
            <h3>컴포넌트 name : {name}</h3>
            <p>{check ? name : "check값이 false입니다."}</p>
            <p>{props.children}</p>
        </div>
    );
}
export default ArrowTest;