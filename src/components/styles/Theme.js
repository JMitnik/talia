const Theme = {
    defaultColor: '#f6f6f6',
    primaryColor: '#B24592',
    primaryAltColor: '#F15F79',
    secondaryColor: 'red',
    containerWidthLg: '1344px',
    textContainer: '900px',
    gutter: '30px',
    gutterSm: '10px',
    mainFont: '"Lato", sans-serif',
    titleFont: '"Catamaran", sans-serif',
    playFont: '"Amatic SC", cursive',
    bodyTextColor: 'rgb(50, 56, 79)',
    borderRadius: '3px',
};

Theme.gradients = {
    primary: `linear-gradient(to right, ${Theme.primaryColor}, ${Theme.primaryAltColor})`
};

export default Theme;
