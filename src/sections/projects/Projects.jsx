import Button from '../../components/button/Button'
import { SectionHeader } from '../../components/section-header/SectionHeader'
import './projects.css'

import studentTaxHelpImage from '../../assets/images/studenttaxhelp.png';
import rulebornImage from '../../assets/images/ruleborn.png';
import isoxImage from '../../assets/images/isox.png';
import emcaImage from '../../assets/images/emca.png';
import magnumopusImage from '../../assets/images/magnumopus.png';
import baynetfuseImage from '../../assets/images/baynetfuse.png';
import onomeImage from '../../assets/images/onome.png';
import edublokImage from '../../assets/images/Edublok.png';
import dbmnImage from '../../assets/images/dbmn.jpg';
import praiseImage from '../../assets/images/praise.png';
import zionbarsImage from '../../assets/images/zionbars.jpg';
import brandleepImage from '../../assets/images/brandleep.jpg';
import zecnetImage from '../../assets/images/zecnet.jpg';
import helpinghandsImage from '../../assets/images/helpinghands.jpg';
import koinwaImage from '../../assets/images/koinwa.jpg';

import animatedIconsImage from '../../assets/images/animated-icons.png';
import easyRecipeImage from '../../assets/images/easyrecipe.png';
import ejeImage from '../../assets/images/eje.png';
import SpaceTechImage from '../../assets/images/SpaceTech.png';
import translatorImage from '../../assets/images/translator.png';
import syncImage from '../../assets/images/sync.jpg';
import womenImage from '../../assets/images/womentechster.jpg';
import digiImage from '../../assets/images/digigirl.jpg';
import syncertImage from '../../assets/images/syncert.jpg';
import alxcertImage from '../../assets/images/alxcert.jpg';
import gyftstoreImage from '../../assets/images/gyftstore.jpg';



const Projects = ({ title, subtitle, note }) => {
    return (
        <div id="portfolio" className="projects-section">

            {/* WordPress projects  */}
            <SectionHeader title={title} subtitle={subtitle} paddingValue={'10px'} note={`Professional Certification.`} />
            <div className="project-container">
                <div className="project">
                    <img src={syncImage} className="project-image" alt="Certificate" />
                   
                </div>
                <div className="project">
                    <img src={womenImage} className="project-image" alt="women tech cert image" />
                    
                </div>

                <div className="project">
                    <img src={digiImage} className="project-image" alt="Digi girl image" />
                    
                </div>

                <div className="project">
                    <img src={syncertImage} className="project-image" alt="sync intern image" />
                    
                </div>

                <div className="project">
                    <img src={alxcertImage} className="project-image" alt="alx cert image" />
                    
                </div>
                



            </div>

            {/* ReactJs and Javascript projects */}
            <h3 className='category-title'>Portfolio Project: Frontend and UI/UX Design and Writing </h3>
            <div className="project-container">

                <div className="project">
                    <img src={easyRecipeImage} className="project-image" alt="easy recipe" />
                    <p className="project-text">
                        A recipe app that fetches a list of all
                        recipes from external API and provide dynamic
                        search functionality.
                    </p>
                    <a href='https://easyrecipee.netlify.app/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
               
                <div className="project">
                    <img src={gyftstoreImage} className="project-image" alt="gyft store website" />
                    <p className="project-text">
                       Welcome to gyft store ecommercee website, an online gift store where you will find a delightful
                       array of unique gifts for all occasions .
                    </p>
                    <a href="https://www.gyft.ng/" target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>

                
                <div className="project">
                    <img src={gyftstoreImage} className="project-image" alt="gyft store website" />
                    <p className="project-text">
                    Discover Gyft Store: A seamless online shopping experience for finding unique gifts for every occasion.
                    </p>
                    <a href="https://www.figma.com/file/mIcWGIJ2YQC8cScRj15uL3/Gyfts.ng-(Copy)?type=design&mode=design&t=so5AXlSdmJSf5NlM-1
                     " target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>


                <div className="project">
                    <img src={SpaceTechImage} className="project-image" alt="SpaceTech" />
                    <p className="project-text">
                        One stop home for all information about crytocurencies; including
                        top cryptcurencies, cryptcurency prices, market trends, crypto news,
                        exchanges and others.
                    </p>
                    <a href='https://www.figma.com/file/HCpR0rQFdh2LpsI4EM1HfJ/SpaceTech(BLOG)?type=design&node-id=0%3A1&mode=design&t=9lSxoh0EMyBCADy2-1
                  ' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>

                
                

            </div>


        </div>
    )
}

Projects.defaultProps = {
    title: 'projects',
    subtitle: 'Check Out Some Of My Works and Professional Certification as a Product designer, UX Writer and web developer',
    note: 'A series of projects ranging from web devlopment and design to professional certification',
}

export default Projects
