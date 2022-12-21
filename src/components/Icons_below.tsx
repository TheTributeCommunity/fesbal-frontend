
/**
 * Creates a basic structure for an icon with a link
 * @param props parameters { "href_link" link when click on it,
 *                           "src_img" image to show,
 *                           "alt" if image not found }
 * @returns HTML element with an image link
 */
const ImageLink = (props: { 
                   href_link: string; 
                   src_img: string; 
                   alt: string }) => {
    return (
      <div className="image-link">
        <a href={props.href_link}>
          <img src={props.src_img} alt={props.alt} />
        </a>  
      </div>
    )
}

export default ImageLink;