
export default () => {
  let accentTypography = function () {
   
    let texts = document.querySelectorAll(`.js-accentTypography`);
    let newtext = ''
    if (texts){
      texts.forEach(element => {
        console.log(element.offsetHeight )
        var lines = element.innerHTML.split(" ");
        var text = ''
        var newtext = ''
        
        lines.forEach(line => {
          newtext = ''
          for (var i = 0; i < line.length; i++){
            newtext = newtext +'<span>' + line[i] + '</span>';  
           
          }
          text = text +'<span>' + newtext + '</span>' + ' ';  
        })

        element.innerHTML = text
        element.classList.add('accent-typography')
       

      });
    }

  };
  accentTypography();
 

};
