import "./intro.css"
import Me from "../../src/img/me.jpg"
const Intro = () => {
    return (
        <div className="intro">
<div className="intro-left">
    <div className="intro-left-wrapper">
        <h2 className="i-intro">hello my name is</h2>
        <h1 className="intro-name">Radhi Aissa</h1>
        <div className="intro-tittle">
            <div className="intro-tittle-wrapper">
                <div className="intro-title-item">web developer</div>
                <div className="intro-title-item">MSI</div>
                <div className="intro-title-item">gamer</div>
                <div className="intro-title-item">footballer</div>
                <div className="intro-title-item">reader</div>
            </div>
        </div>
        <div className="intro-desc">
            welcome to my portofolio my name is Radhi Aissa im 23 years
            old from tunisia. im corrently studying to get my web development
            certificat,i have a industrielle maintenance diploma but i want 
            to evolve my skills.
        </div>
    </div>
</div>
<div className="intro-right">
    <div className="intro-bg"></div>
    <img src={Me} alt="personalphoto" className="intro-image" />
</div>
        </div>
    )
}
export default Intro