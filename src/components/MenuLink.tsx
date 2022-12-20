import './MenuLink.scss';

export type Props =   {
  img : string;
  link: string;
  linkName: string
}

/**
 * Creates a container with an image and a linked text
 * @param {Props} param0 {Image to show, Link to follow, Text to show} 
 * @returns HTML container
 */
const MenuLink = ({img, link, linkName} : Props) => {
    return (
      <div className='link_container'>
        <img src={img}></img>
        <a className='link_text' href={link}>{linkName}</a>
      </div>
    )
}

export default MenuLink