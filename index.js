


tailwind.config = {
  theme: {
    extend: {
      colors: {
        darkBlue: '#506690',
        lightBlue: '#869AB8',
        intenseBlue:'#335EEA',
        lightBlack: '#161C2D',
        strongBlue:'#12263F',
        snowGray:'#6E84A3',
      },
      fontFamily: {
        roboto: ['roboto']
      },
      fontSize: {
        postSubtitle: ['21px', '32px'],
        postInfo:['17px', '26px'],
        '43px': ['42px', '52px'],
        '52px': ['52px', '60px'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      maxWidth: {
        'dimensions': '680px',
        'size': '1040px', 
      },
      boxShadow: {
        '3xl': '0px 4px 4px 0px #00000040',
      },
      width: {
        '100': '590px',
      },
      height: {
        '90': '380px',
      },
      letterSpacing: {
        oneLetter: '-0.1em',
      }
    }
  }
}



