import "../../styles/MenuBurger/MenuLink.scss";

export type Props = {
  svgFile: JSX.Element;
  link: string;
  linkName: string;
};

/**
 * Creates a container with an image and a linked text
 * @param {Props} param0 {Image to show, Link to follow, Text to show}
 * @returns HTML container
 */
const MenuLink = ({ svgFile, link, linkName }: Props) => {
  return (
    <div className="link-container">
      {svgFile}&emsp;
      <a className="link-text" href={link}>
        {linkName}
      </a>
    </div>
  );
};

export default MenuLink;
