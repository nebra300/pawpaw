import './banner.css'
import PuppyComment from '../puppy-comment/Puppycomment'
import lifegoodpuppy from '../../images/elipse1.jpg'

function Banner() {
    return(
    <div className='big-wrapper'>
        <div className='banner-wrapper'>
            <div className='banner-section-column'>
                <PuppyComment 
                    title={"lives good"}
                    paragraph={"Lots of food, lots of walkses and lots of food. After i finish paw school I might get good job to repay my hoomans. Then I give them treats... Until then i just cute"}
                    name={"Jack"}
                    image={lifegoodpuppy}
                    isReverseRow={false}
                />

                <PuppyComment 
                    title={"lives not good"}
                    paragraph={"Lots of food, lots of walkses and lots of food. After i finish paw school I might get good job to repay my hoomans. Then I give them treats... Until then i just cute"}
                    name={"Jack"}
                    image={lifegoodpuppy}
                    isReverseRow={true}
                />
            </div>
            <div className='banner-section-title'>
                <h1>Fluffs That Found a Home Through PawPaw</h1>
            </div>
            <div className='banner-section-row'>
                <PuppyComment 
                    title={"lives not good"}
                    paragraph={"Lots of food, lots of walkses and lots of food. After i finish paw school I might get good job to repay my hoomans. Then I give them treats... Until then i just cute"}
                    name={"Jack"}
                    image={lifegoodpuppy}
                    isReverseColumn={true}
                />
                <span className='happy-customers'>Over 300 happy customers...and their hoomans</span>
            </div>
        </div>
    </div>
    )
}
export default Banner 