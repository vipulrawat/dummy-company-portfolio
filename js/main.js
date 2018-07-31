function changeImage(e,imageName){

    var i,featuresContent,featuresLinks;
    
    featuresContent = document.getElementsByClassName("features-content");
      for (i = 0; i < featuresContent.length; i++) {
          featuresContent[i].style.display = "none ";
      }
  
      // Get all elements with class="ta0...blinks" and remove the class "active"
      featuresLinks = document.getElementsByClassName("features-links");
      for (i = 0; i < featuresLinks.length; i++) {
          featuresLinks[i].className = featuresLinks[i].className.replace(" active", "");
      }
  
      // Show the current tab, and add an "active" class to the link that opened the tab
      document.getElementById(imageName).style.display = "block";
    
      e.currentTarget.className +=" active";
      
  }
  document.getElementById("defaultOpen").click();
  
  var active = document.getElementById('defaultOpen');
  function autoSwitch(){ 
    if(active.nextElementSibling == null){
       console.log(active)
       active = document.getElementById('defaultOpen');
       active.click();
        
    }else{
      active = active.nextElementSibling
      active.click();
    }
  
  }
  setInterval(autoSwitch,5000)

  function moveToSelected(element) {
  
    if (element == "ttwo") {
      var selected = document.querySelector('.tmain').nextElementSibling;
    console.log(selected);
    } else if (element == "tone") {
      //var selected = $(".selected").prev();
     
      var selected = document.querySelector('.tmain').previousElementSibling; console.log(selected);
    } else {
      var selected = document.querySelector('.tmain');
    } 
    
   
  
   var next = $(selected).next();
   var prev = $(selected).prev();
  $(selected).removeClass().addClass("tmain");
  
    $(prev).removeClass().addClass("tone");
    $(next).removeClass().addClass("ttwo");
  
  }
  
  
  document.getElementById('prevB').addEventListener('click',function() {
    
    moveToSelected('tone');
  });
  
  document.getElementById('nextB').addEventListener('click',function() {
    
    moveToSelected('ttwo');
  });
  
  