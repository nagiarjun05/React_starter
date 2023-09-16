console.log("App.js is Running!!");


const app = {
    title : "Indecision App",
    subTitle : "Put your decisions in the hand of the computer",
    options : []
};


const onRemoveAll=()=>{
    app.options=[]
    render();
};

const onFormSubmit=(e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option)
        e.target.elements.option.value='';
        render();
    }
};

const onMakeDesicion = () =>{
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum]
    alert(option)
};

const appRoot =document.getElementById('root');

const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length>0 ? "Here are your options" : "No options" }</p>
            <button disabled={app.options.length==0} onClick={onMakeDesicion}>What should i do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {app.options.map(o=><li key={o}>{o}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
};

render();