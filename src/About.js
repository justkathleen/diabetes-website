import './About.css'

export default function About()
{
    return (
        <div className="about-container">
            <h1>What is Diabetes?</h1>
            <article className="what-diabetes">
                <div className="what-text-container">
                
                <p>Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy</p>
                <p>Your body breaks down most of the food you eat into sugar (glucose) and releases it into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin. Insulin acts like a key to let the blood 
                sugar into your body’s cells for use as energy</p>
                <p>With diabetes, your body doesn’t make enough insulin or can’t use it as well as it should. When there isn’t enough insulin or cells stop responding to insulin, too much blood sugar stays in your bloodstream. Over time, that can cause serious health problems, 
                such as heart disease, vision loss, and kidney disease.</p>
                </div>             
                <img src='/image/diabetes.jpeg' className="diabetes-img"></img>
                
                
            </article>

        </div>
    )
}