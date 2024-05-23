import './Puppycomment.css'

function PuppyComment({
    title,
    paragraph,
    name,
    image,
    isReverseRow,
    isReverseColumn, 
}){
    /*
        x===something   true/false
        x!==something   true/false
        x>something     true/false
        x>=something    true/false
        x<something     true/false
        x<=something    true/false
    */

    var direction;  //undefined

    if(isReverseRow !== undefined) {
        direction = isReverseRow ? 'row-reverse' : 'row';
    }

    if(isReverseColumn !== undefined) {
        direction = isReverseColumn ? 'column-reverse' : 'column';
    }


    return(
    <div className='puppy-comment-wrapper' style={{flexDirection: direction}}>
        <div className='puppy-comment-text-wrapper'>
        <span className='puppy-comment-title'>{title}</span>
        <span className='puppy-comment-paragraph'>{paragraph}</span>
        <span className='puppy-comment-name'>{name}</span>
        </div>
        <img className='puppy-comment-images' src={image}/>
    </div>
    )
}
export default PuppyComment